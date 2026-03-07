/**
 * Seed the database with initial blog_highlights and events data,
 * then upload all images to Supabase Storage and update DB records
 * to use the public Storage URLs.
 *
 * Run once with:
 *   node --env-file=.env.local scripts/seed-database.mjs
 *
 * Or:
 *   SUPABASE_SERVICE_ROLE_KEY=<your-key> node scripts/seed-database.mjs
 */

import { createClient } from "@supabase/supabase-js";
import { readFileSync, existsSync } from "fs";
import { join, extname, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://cnpaysvylgpmkitatsqf.supabase.co";
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SERVICE_ROLE_KEY) {
  console.error(
    "\nError: SUPABASE_SERVICE_ROLE_KEY is not set.\n" +
    "Find it in Supabase Dashboard → Settings → API → service_role key.\n" +
    "Then run:\n" +
    "  SUPABASE_SERVICE_ROLE_KEY=<your-key> node scripts/seed-database.mjs\n"
  );
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

const MIME = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
};

const PUBLIC_BASE = `${SUPABASE_URL}/storage/v1/object/public`;

// ── seed data ────────────────────────────────────────────────────────────────

const BLOG_HIGHLIGHTS = [
  { blog_id: "where-to-find-koi",       title: "ไปตามหาปลาคาร์ฟที่ญี่ปุ่น ไปที่ไหนกันดี",                         img: "/img/blogs/where-to-find-koi/blog1-0.png",          sort_order: 1 },
  { blog_id: "how-to-choose-koi",       title: "ธรรมเนียมการเลือกซื้อปลาที่ญี่ปุ่น",                              img: "/img/blogs/how-to-choose-koi/blog2-banner.png",      sort_order: 2 },
  { blog_id: "koi-appreciation",        title: "การเลือกปลาจากรูปร่างเราดูกันอย่างไรบ้าง",                         img: "/img/blogs/koi-appreciation/blog3-banner.png",       sort_order: 3 },
  { blog_id: "shape-quality-pattern",   title: "รูปร่าง > คุณภาพ > แพตเทิร์น",                                    img: "/img/blogs/shape-quality-pattern/blog4-banner.png",  sort_order: 4 },
  { blog_id: "importing-koi-from-japan",title: "ไปซื้อปลาที่ญี่ปุ่น ควรไปกับใคร และมีค่าใช้จ่ายอะไรบ้าง",         img: "/img/blogs/importing-koi-from-japan/blog5-banner.png",sort_order: 5 },
  { blog_id: "koi-hunting-tips-1",      title: "Koi hunting tips 1",                                              img: "/img/blogs/koi-hunting-tips-1/blog6-banner.png",     sort_order: 6 },
  { blog_id: "koi-hunting-tips-2",      title: "Koi hunting tips 2",                                              img: "/img/blogs/koi-hunting-tips-2/blog7-banner.png",     sort_order: 7 },
];

const EVENTS = [
  {
    id: 1,
    date: "7/02/2026",
    detail: "Koimart Cup 2026 \"KOIMART CUP 4 EVENT\"",
    imgs: ["/img/events/event-1.png", "/img/events/event-2.png"],
    description: "",
    sort_order: 1,
  },
  {
    id: 2,
    date: "21/03/2026",
    detail: "KOIMART CUP ISA",
    imgs: ["/img/events/event-3.jpg"],
    description: "เริ่มจำหน่ายสิทธิเลือกปลาแล้วตั้งแต่วันนี้เป็นต้นไป โดยแบ่งการเลือกปลาและตัดสินเป็น 3 กลุ่ม A B C",
    sort_order: 2,
  },
];

// ── helpers ──────────────────────────────────────────────────────────────────

async function ensureBucket(name) {
  const { data: buckets } = await supabase.storage.listBuckets();
  const exists = buckets?.some((b) => b.name === name);
  if (!exists) {
    const { error } = await supabase.storage.createBucket(name, { public: true });
    if (error) throw new Error(`Failed to create bucket "${name}": ${error.message}`);
    console.log(`  Created bucket: ${name}`);
  }
}

async function uploadFile(bucket, storagePath, localPath) {
  const ext = extname(localPath).toLowerCase();
  const contentType = MIME[ext] ?? "application/octet-stream";
  const file = readFileSync(localPath);

  const { error } = await supabase.storage
    .from(bucket)
    .upload(storagePath, file, { contentType, upsert: true });

  if (error) {
    console.error(`  ✗ ${storagePath}: ${error.message}`);
    return null;
  }

  const url = `${PUBLIC_BASE}/${bucket}/${storagePath}`;
  console.log(`  ✓ ${storagePath}`);
  return url;
}

// ── Step 1: Seed blog_highlights ─────────────────────────────────────────────

async function seedBlogHighlights() {
  console.log("\n[1/4] Seeding blog_highlights table...");

  const { data: existing } = await supabase
    .from("blog_highlights")
    .select("blog_id");

  const existingIds = new Set((existing ?? []).map((r) => r.blog_id));
  const toInsert = BLOG_HIGHLIGHTS.filter((b) => !existingIds.has(b.blog_id));

  if (toInsert.length === 0) {
    console.log("  Already seeded — skipping.");
    return;
  }

  const { error } = await supabase.from("blog_highlights").insert(toInsert);
  if (error) {
    console.error("  Insert failed:", error.message);
  } else {
    console.log(`  Inserted ${toInsert.length} record(s).`);
  }
}

// ── Step 2: Seed events ───────────────────────────────────────────────────────

async function seedEvents() {
  console.log("\n[2/4] Seeding events table...");

  const { data: existing } = await supabase.from("events").select("id");
  const existingIds = new Set((existing ?? []).map((r) => r.id));
  const toInsert = EVENTS.filter((e) => !existingIds.has(e.id));

  if (toInsert.length === 0) {
    console.log("  Already seeded — skipping.");
    return;
  }

  const { error } = await supabase.from("events").insert(toInsert);
  if (error) {
    console.error("  Insert failed:", error.message);
  } else {
    console.log(`  Inserted ${toInsert.length} record(s).`);
  }
}

// ── Step 3: Upload blog highlight images → Storage ───────────────────────────

async function uploadBlogHighlightImages() {
  console.log("\n[3/4] Blog highlight images → bucket: blog-highlights");
  await ensureBucket("blog-highlights");

  const { data: blogs, error } = await supabase
    .from("blog_highlights")
    .select("id, blog_id, img");
  if (error) { console.error("  DB fetch failed:", error.message); return; }

  for (const blog of blogs ?? []) {
    // Skip rows that already have a Storage URL
    if (blog.img.startsWith("http")) {
      console.log(`  - Already migrated: ${blog.blog_id}`);
      continue;
    }

    const localPath = join(ROOT, "public", blog.img);
    if (!existsSync(localPath)) {
      console.log(`  - Missing local file: ${blog.img}`);
      continue;
    }

    // Storage path: strip leading "/img/blogs/" → "where-to-find-koi/blog1-0.png"
    const storagePath = blog.img.replace(/^\/img\/blogs\//, "");
    const url = await uploadFile("blog-highlights", storagePath, localPath);
    if (!url) continue;

    const { error: upErr } = await supabase
      .from("blog_highlights")
      .update({ img: url })
      .eq("id", blog.id);
    if (upErr) console.error(`  DB update failed for ${blog.blog_id}: ${upErr.message}`);
  }
}

// ── Step 4: Upload event images → Storage ────────────────────────────────────

async function uploadEventImages() {
  console.log("\n[4/4] Event images → bucket: events");
  await ensureBucket("events");

  const { data: events, error } = await supabase.from("events").select("id, imgs");
  if (error) { console.error("  DB fetch failed:", error.message); return; }

  for (const evt of events ?? []) {
    const newImgs = [];
    let changed = false;

    for (const img of evt.imgs ?? []) {
      if (img.startsWith("http")) {
        newImgs.push(img);
        console.log(`  - Already migrated: ${img}`);
        continue;
      }

      const localPath = join(ROOT, "public", img);
      if (!existsSync(localPath)) {
        console.log(`  - Missing local file: ${img}`);
        newImgs.push(img);
        continue;
      }

      const storagePath = img.replace(/^\/img\/events\//, "");
      const url = await uploadFile("events", storagePath, localPath);
      newImgs.push(url ?? img);
      if (url) changed = true;
    }

    if (changed) {
      const { error: upErr } = await supabase
        .from("events")
        .update({ imgs: newImgs })
        .eq("id", evt.id);
      if (upErr) console.error(`  DB update failed for event ${evt.id}: ${upErr.message}`);
    }
  }
}

// ── main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("Seeding database and uploading images to Supabase Storage...");
  await seedBlogHighlights();
  await seedEvents();
  await uploadBlogHighlightImages();
  await uploadEventImages();
  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
