import { describe, it, expect, beforeEach, vi } from 'vitest';
import { GET } from '@/app/api/admin/waitlist/route';
import { NextRequest } from 'next/server';

vi.mock('@/lib/supabase', () => ({
  getSupabaseClient: vi.fn(),
}));

import { getSupabaseClient } from '@/lib/supabase';

describe('GET /api/admin/waitlist', () => {
  const validAdminKey = 'test_admin_key_12345';

  beforeEach(() => {
    vi.clearAllMocks();
    process.env.ADMIN_SECRET_KEY = validAdminKey;
  });

  it('returns 401 with no Authorization header', async () => {
    const request = new NextRequest('http://localhost:3000/api/admin/waitlist', {
      method: 'GET',
    });

    const response = await GET(request);
    expect(response.status).toBe(401);
    const data = await response.json();
    expect(data.error).toContain('Invalid or missing');
  });

  it('returns 401 with wrong Authorization key', async () => {
    const request = new NextRequest('http://localhost:3000/api/admin/waitlist', {
      method: 'GET',
      headers: { Authorization: 'Bearer wrong_key' },
    });

    const response = await GET(request);
    expect(response.status).toBe(401);
  });

  it('returns 200 with correct Authorization header and valid data', async () => {
    const mockData = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        source: 'curative-os-website',
        created_at: '2026-05-03T12:00:00Z',
      },
    ];

    const mockSupabase = {
      from: vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          order: vi.fn().mockResolvedValue({ data: mockData, error: null }),
        }),
      }),
    };
    (getSupabaseClient as any).mockResolvedValue(mockSupabase);

    const request = new NextRequest('http://localhost:3000/api/admin/waitlist', {
      method: 'GET',
      headers: { Authorization: `Bearer ${validAdminKey}` },
    });

    const response = await GET(request);
    expect(response.status).toBe(200);
    const result = await response.json();
    expect(Array.isArray(result.data)).toBe(true);
    expect(result.data.length).toBe(1);
    expect(result.data[0].name).toBe('John Doe');
  });

  it('returns 401 if old ?key= query param is used instead of Authorization header', async () => {
    const request = new NextRequest(`http://localhost:3000/api/admin/waitlist?key=${validAdminKey}`, {
      method: 'GET',
    });

    const response = await GET(request);
    expect(response.status).toBe(401);
  });

  it('returns 500 if ADMIN_SECRET_KEY env var is not configured', async () => {
    delete process.env.ADMIN_SECRET_KEY;

    const request = new NextRequest('http://localhost:3000/api/admin/waitlist', {
      method: 'GET',
      headers: { Authorization: `Bearer some_key` },
    });

    const response = await GET(request);
    expect(response.status).toBe(500);
    const data = await response.json();
    expect(data.error).toContain('Admin secret not configured');
  });

  it('returns 500 on unexpected database error', async () => {
    const mockSupabase = {
      from: vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          order: vi.fn().mockResolvedValue({
            data: null,
            error: new Error('Connection failed'),
          }),
        }),
      }),
    };
    (getSupabaseClient as any).mockResolvedValue(mockSupabase);

    const request = new NextRequest('http://localhost:3000/api/admin/waitlist', {
      method: 'GET',
      headers: { Authorization: `Bearer ${validAdminKey}` },
    });

    const response = await GET(request);
    expect(response.status).toBe(500);
  });

  it('returns 200 with empty array if no waitlist entries exist', async () => {
    const mockSupabase = {
      from: vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          order: vi.fn().mockResolvedValue({ data: [], error: null }),
        }),
      }),
    };
    (getSupabaseClient as any).mockResolvedValue(mockSupabase);

    const request = new NextRequest('http://localhost:3000/api/admin/waitlist', {
      method: 'GET',
      headers: { Authorization: `Bearer ${validAdminKey}` },
    });

    const response = await GET(request);
    expect(response.status).toBe(200);
    const result = await response.json();
    expect(Array.isArray(result.data)).toBe(true);
    expect(result.data.length).toBe(0);
  });
});
