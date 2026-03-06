/**
 * Upload images for the 3 editable sections to Supabase Storage,
 * then update the database records to use the new public Storage URLs.
 *
 * Run:
 *   SUPABASE_SERVICE_ROLE_KEY=<your-key> node scripts/upload-images.mjs
 *
 * Or add SUPABASE_SERVICE_ROLE_KEY to .env.local and run:
 *   node -r dotenv/config scripts/upload-images.mjs
 */

import { createClient } from "@supabase/supabase-js";
import { readFileSync, readdirSync, existsSync } from "fs";
import { join, extname, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const SUPABASE_URL = "https://jzqfjmthvjdqaazwluro.supabase.co";
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SERVICE_ROLE_KEY) {
  console.error(
    "\nError: SUPABASE_SERVICE_ROLE_KEY is not set.\n" +
    "Find it in Supabase Dashboard → Settings → API → service_role key.\n" +
    "Then run:\n" +
    "  SUPABASE_SERVICE_ROLE_KEY=<your-key> node scripts/upload-images.mjs\n"
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

// ── helpers ─────────────────────────────────────────────────────────────────

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

// ── Section 1: Carousel (koi-images) ────────────────────────────────────────

async function uploadCarousel() {
  console.log("\n[1/3] Carousel images → bucket: koi-images");
  await ensureBucket("koi-images");

  const dir = join(ROOT, "public/img/koi-images");
  const files = readdirSync(dir).filter((f) => /\.(png|jpe?g|webp)$/i.test(f));

  for (const file of files) {
    const url = await uploadFile("koi-images", file, join(dir, file));
    if (!url) continue;

    // Update the row whose url matches the old local path
    const { error } = await supabase
      .from("carousel_images")
      .update({ url })
      .eq("url", `/img/koi-images/${file}`);
    if (error) console.error(`    DB update failed for ${file}: ${error.message}`);
  }
}

// ── Section 2: Events (events) ───────────────────────────────────────────────

async function uploadEvents() {
  console.log("\n[2/3] Event images → bucket: events");
  await ensureBucket("events");

  const dir = join(ROOT, "public/img/events");
  const files = readdirSync(dir).filter((f) => /\.(png|jpe?g|webp)$/i.test(f));

  // Build a map of old local path → new Supabase Storage URL
  const urlMap = {};
  for (const file of files) {
    const url = await uploadFile("events", file, join(dir, file));
    if (url) urlMap[`/img/events/${file}`] = url;
  }

  // Re-write each event's imgs array
  const { data: events, error } = await supabase.from("events").select("id, imgs");
  if (error) { console.error("  DB fetch failed:", error.message); return; }

  for (const evt of events ?? []) {
    const newImgs = (evt.imgs ?? []).map((img) => urlMap[img] ?? img);
    const { error: upErr } = await supabase
      .from("events")
      .update({ imgs: newImgs })
      .eq("id", evt.id);
    if (upErr) console.error(`  DB update failed for event ${evt.id}: ${upErr.message}`);
  }
}

// ── Section 3: Blog highlights (blog-highlights) ─────────────────────────────

async function uploadBlogHighlights() {
  console.log("\n[3/3] Blog highlight thumbnails → bucket: blog-highlights");
  await ensureBucket("blog-highlights");

  const { data: blogs, error } = await supabase
    .from("blog_highlights")
    .select("id, blog_id, img");
  if (error) { console.error("  DB fetch failed:", error.message); return; }

  for (const blog of blogs ?? []) {
    // blog.img is e.g. "/img/blogs/where-to-find-koi/blog1-0.png"
    const localPath = join(ROOT, "public", blog.img);
    if (!existsSync(localPath)) {
      console.log(`  - Skipping missing file: ${blog.img}`);
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

// ── main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("Uploading images to Supabase Storage...");
  await uploadCarousel();
  await uploadEvents();
  await uploadBlogHighlights();
  console.log("\nDone. Database URLs have been updated to Supabase Storage URLs.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
