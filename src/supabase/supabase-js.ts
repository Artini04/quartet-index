import { createClient } from '@supabase/supabase-js'

const database_url = 'https://vjxbjlzjabsithatwqmh.supabase.co',
	database_anon_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqeGJqbHpqYWJzaXRoYXR3cW1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3MjA2MjEsImV4cCI6MTk5ODI5NjYyMX0.3ZoaJcCr7lx0AXwGURqiUZELyPiUiUCOkkaxAB3z-1U'

    const supabase = createClient(database_url, database_anon_key)

export { supabase }
