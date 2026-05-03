import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const adminSecret = process.env.ADMIN_SECRET_KEY;

    if (!adminSecret) {
      return NextResponse.json(
        { error: 'Admin secret not configured' },
        { status: 500 }
      );
    }

    const authHeader = request.headers.get('authorization');
    const key = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;

    if (!key || key !== adminSecret) {
      return NextResponse.json(
        { error: 'Invalid or missing admin key' },
        { status: 401 }
      );
    }

    const supabase = await getSupabaseClient();
    const { data, error } = await supabase
      .from('waitlist')
      .select('id, name, email, source, created_at')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('Admin waitlist error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch waitlist' },
      { status: 500 }
    );
  }
}
