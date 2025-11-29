import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'SUPABASE_URL_BURAYA' // örnek: https://xyzcompany.supabase.co
const supabaseAnonKey = 'SUPABASE_ANON_KEY_BURAYA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface TestOnerisi {
  id?: string
  film_dizi: string
  created_at?: string
}