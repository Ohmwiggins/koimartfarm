-- ============================================================
-- Koimartfarm UI — Supabase Schema
-- Run this in the Supabase SQL Editor (Dashboard → SQL Editor)
-- ============================================================

-- 1. Banner carousel images
create table if not exists carousel_images (
  id          bigint generated always as identity primary key,
  url         text not null,
  sort_order  int  not null default 0,
  created_at  timestamptz default now()
);

-- Seed with the current 7 hardcoded slides
insert into carousel_images (url, sort_order) values
  ('/img/koi-images/Koi-image-01.png', 1),
  ('/img/koi-images/Koi-image-02.png', 2),
  ('/img/koi-images/Koi-image-03.png', 3),
  ('/img/koi-images/Koi-image-04.png', 4),
  ('/img/koi-images/Koi-image-05.png', 5),
  ('/img/koi-images/Koi-image-06.png', 6),
  ('/img/koi-images/Koi-image-07.png', 7);

-- 2. Events
create table if not exists events (
  id          bigint generated always as identity primary key,
  date        text   not null,
  detail      text   not null,
  imgs        text[] not null default '{}',
  description text   not null default '',
  sort_order  int    not null default 0,
  created_at  timestamptz default now()
);

-- Seed with the current 2 events from events.json
insert into events (date, detail, imgs, description, sort_order) values
  ('7/02/2026', 'Koimart Cup 2026 "KOIMART CUP 4 EVENT"',
   array['/img/events/event-1.png', '/img/events/event-2.png'],
   '', 1),
  ('21/03/2026', 'KOIMART CUP ISA',
   array['/img/events/event-3.jpg'],
   'เริ่มจำหน่ายสิทธิเลือกปลาแล้วตั้งแต่วันนี้เป็นต้นไป โดยแบ่งการเลือกปลาและตัดสินเป็น 3 กลุ่ม A B C',
   2);

-- 3. Blog highlight cards
create table if not exists blog_highlights (
  id          bigint generated always as identity primary key,
  blog_id     text not null unique,
  title       text not null,
  img         text not null,
  sort_order  int  not null default 0,
  created_at  timestamptz default now()
);

-- Seed with the current 7 hardcoded blog cards
insert into blog_highlights (blog_id, title, img, sort_order) values
  ('where-to-find-koi',       'ไปตามหาปลาคาร์ฟที่ญี่ปุ่น ไปที่ไหนกันดี',                         '/img/blogs/where-to-find-koi/blog1-0.png',             1),
  ('how-to-choose-koi',       'ธรรมเนียมการเลือกซื้อปลาที่ญี่ปุ่น',                               '/img/blogs/how-to-choose-koi/blog2-banner.png',         2),
  ('koi-appreciation',        'การเลือกปลาจากรูปร่างเราดูกันอย่างไรบ้าง',                         '/img/blogs/koi-appreciation/blog3-banner.png',          3),
  ('shape-quality-pattern',   'รูปร่าง > คุณภาพ > แพตเทิร์น',                                     '/img/blogs/shape-quality-pattern/blog4-banner.png',     4),
  ('importing-koi-from-japan','ไปซื้อปลาที่ญี่ปุ่น ควรไปกับใคร และมีค่าใช้จ่ายอะไรบ้าง',         '/img/blogs/importing-koi-from-japan/blog5-banner.png',  5),
  ('koi-hunting-tips-1',      'Koi hunting tips 1',                                                 '/img/blogs/koi-hunting-tips-1/blog6-banner.png',        6),
  ('koi-hunting-tips-2',      'Koi hunting tips 2',                                                 '/img/blogs/koi-hunting-tips-2/blog7-banner.png',        7);

-- ============================================================
-- Enable Row Level Security (RLS) — allow public read access
-- ============================================================
alter table carousel_images  enable row level security;
alter table events           enable row level security;
alter table blog_highlights  enable row level security;

create policy "Public read carousel_images"  on carousel_images  for select using (true);
create policy "Public read events"           on events           for select using (true);
create policy "Public read blog_highlights"  on blog_highlights  for select using (true);
