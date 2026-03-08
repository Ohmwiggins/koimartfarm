-- Run in Supabase Dashboard → SQL Editor

ALTER TABLE public.blog_highlights
  ADD COLUMN IF NOT EXISTS banner_img TEXT,
  ADD COLUMN IF NOT EXISTS content    TEXT NOT NULL DEFAULT '';
