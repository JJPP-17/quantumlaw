import { createBrowserClient } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// Server reads are public; privileged operations use a request-scoped server client.
export const supabase = typeof window === 'undefined'
  ? createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } })
  : createBrowserClient(url, key);
