import { supabase } from "./supabase";
import { extractPreview } from "./blog";
import { parseAboutContent } from "./about";
import type { BlogCardData } from "./blog";
import type { AboutContent } from "./about";
import type { KoiEvent } from "../models/events";

/**
 * Server-side data access shared by the home page and the dedicated section
 * pages. Fetching here rather than in `useEffect` puts the content in the
 * initial HTML, which is what search engines index.
 */

export async function getEvents(): Promise<KoiEvent[]> {
  const { data } = await supabase.from("events").select("*").order("sort_order");
  return (data ?? []) as KoiEvent[];
}

export async function getBlogHighlights(): Promise<BlogCardData[]> {
  const { data } = await supabase
    .from("blog_highlights")
    .select("blog_id, title, img, content")
    .eq("published", true)
    .order("sort_order");

  return (data ?? []).map((d) => ({
    blogId: d.blog_id,
    title: d.title,
    img: d.img,
    content: extractPreview(d.content),
  }));
}

export async function getAboutContent(): Promise<AboutContent | null> {
  const { data } = await supabase
    .from("about_text")
    .select("content")
    .limit(1)
    .single();

  return data?.content ? parseAboutContent(data.content) : null;
}

export async function getAboutGallery(): Promise<string[]> {
  const { data } = await supabase
    .from("about_gallery")
    .select("url")
    .order("sort_order");

  return (data ?? []).map((d: { url: string }) => d.url);
}
