
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lbxaqlbnaznczttahrpi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxieGFxbGJuYXpuY3p0dGFocnBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY2NDY3MjQsImV4cCI6MTk5MjIyMjcyNH0.3TVPJ76-b93gg_GZoYKKUJnprsdbE7ch0u4YerpGR3A'
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase };
