import { describe, it, expect, beforeEach, vi } from 'vitest';
import { POST } from '@/app/api/waitlist/route';
import { NextRequest } from 'next/server';

vi.mock('@/lib/supabase', () => ({
  getSupabaseClient: vi.fn(),
}));

import { getSupabaseClient } from '@/lib/supabase';

describe('POST /api/waitlist', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns 200 with valid name and email', async () => {
    const mockSupabase = {
      from: vi.fn().mockReturnValue({
        insert: vi.fn().mockResolvedValue({ error: null }),
      }),
    };
    (getSupabaseClient as any).mockResolvedValue(mockSupabase);

    const request = new NextRequest('http://localhost:3000/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'John Doe', email: 'john@example.com' }),
    });

    const response = await POST(request);
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.success).toBe(true);
  });

  it('returns 400 if name is missing', async () => {
    const request = new NextRequest('http://localhost:3000/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'john@example.com' }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toContain('Name and email are required');
  });

  it('returns 400 if email is missing', async () => {
    const request = new NextRequest('http://localhost:3000/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'John Doe' }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toContain('Name and email are required');
  });

  it('returns 400 if email format is invalid', async () => {
    const request = new NextRequest('http://localhost:3000/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'John Doe', email: 'invalid-email' }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toContain('Invalid email address');
  });

  it('returns 409 if email already exists', async () => {
    const mockSupabase = {
      from: vi.fn().mockReturnValue({
        insert: vi.fn().mockResolvedValue({
          error: { code: '23505', message: 'Duplicate key' },
        }),
      }),
    };
    (getSupabaseClient as any).mockResolvedValue(mockSupabase);

    const request = new NextRequest('http://localhost:3000/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'John Doe', email: 'john@example.com' }),
    });

    const response = await POST(request);
    expect(response.status).toBe(409);
    const data = await response.json();
    expect(data.error).toContain('already on the waitlist');
  });

  it('returns 415 if Content-Type is not application/json', async () => {
    const request = new NextRequest('http://localhost:3000/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ name: 'John Doe', email: 'john@example.com' }),
    });

    const response = await POST(request);
    expect(response.status).toBe(415);
    const data = await response.json();
    expect(data.error).toContain('application/json');
  });

  it('returns 429 after exceeding rate limit', async () => {
    const mockSupabase = {
      from: vi.fn().mockReturnValue({
        insert: vi.fn().mockResolvedValue({ error: null }),
      }),
    };
    (getSupabaseClient as any).mockResolvedValue(mockSupabase);

    const ip = '192.168.1.100';
    const requests = [];

    for (let i = 0; i < 7; i++) {
      const request = new NextRequest('http://localhost:3000/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-forwarded-for': ip,
        },
        body: JSON.stringify({
          name: `User ${i}`,
          email: `user${i}@example.com`,
        }),
      });
      const response = await POST(request);
      requests.push(response.status);
    }

    expect(requests.slice(0, 5)).toEqual([200, 200, 200, 200, 200]);
    expect(requests[5]).toBe(429);
    expect(requests[6]).toBe(429);
  });

  it('returns 500 on unexpected database error', async () => {
    const mockSupabase = {
      from: vi.fn().mockReturnValue({
        insert: vi.fn().mockResolvedValue({
          error: { code: 'UNKNOWN_ERROR', message: 'Database connection failed' },
        }),
      }),
    };
    (getSupabaseClient as any).mockResolvedValue(mockSupabase);

    const request = new NextRequest('http://localhost:3000/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': '10.0.0.1',
      },
      body: JSON.stringify({ name: 'John Doe', email: 'john@example.com' }),
    });

    const response = await POST(request);
    expect(response.status).toBe(500);
  });
});
