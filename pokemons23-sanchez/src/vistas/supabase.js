import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ozagnqmhicxttpxfjsse.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96YWducW1oaWN4dHRweGZqc3NlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNzk4MjksImV4cCI6MTk5Mjc1NTgyOX0.gGpSKr6r7Mudh2QSb5FD_5dh8yX3-h97zLzkRGHlSEA'

// exportamos la conexión
export const supabase = createClient(supabaseUrl, supabaseKey)
