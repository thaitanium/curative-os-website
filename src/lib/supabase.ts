// Stub localStorage at module load time to prevent Supabase initialization errors
if (typeof window === 'undefined') {
  if (!globalThis.localStorage || typeof globalThis.localStorage.getItem !== 'function') {
    Object.defineProperty(globalThis, 'localStorage', {
      value: {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
        clear: () => {},
        key: () => null,
        length: 0,
      },
      writable: true,
      configurable: true,
    });
  }
}

let cachedClient: any = null;

export async function getSupabaseClient() {
  if (cachedClient) {
    return cachedClient;
  }

  if (typeof window !== 'undefined') {
    throw new Error('Supabase client should only be created on the server');
  }

  const { createClient } = await import('@supabase/supabase-js');

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Missing Supabase environment variables');
  }

  cachedClient = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
      storage: {
        getItem: (_key: string) => null,
        setItem: (_key: string, _value: string) => {},
        removeItem: (_key: string) => {},
      },
    },
    global: {
      headers: {
        'User-Agent': 'Curative-OS-Server',
      },
    },
  });

  return cachedClient;
}
