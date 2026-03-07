-- Run this once in Supabase Dashboard → SQL Editor

-- Create blog_highlights table
CREATE TABLE IF NOT EXISTS public.blog_highlights (
  id          SERIAL PRIMARY KEY,
  blog_id     TEXT    NOT NULL UNIQUE,
  title       TEXT    NOT NULL,
  img         TEXT    NOT NULL,
  sort_order  INTEGER NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS and allow public read
ALTER TABLE public.blog_highlights ENABLE ROW LEVEL SECURITY;

CREATE POLICY "allow anon read" ON public.blog_highlights
  FOR SELECT USING (true);

-- Add sort_order to events if missing
ALTER TABLE public.events
  ADD COLUMN IF NOT EXISTS sort_order INTEGER NOT NULL DEFAULT 0;

UPDATE public.events SET sort_order = id WHERE sort_order = 0;
