import type { MetadataRoute } from "next";
import { supabase } from "../lib/supabase";
import { NAV_PAGES, SITE_URL } from "../lib/seo";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = NAV_PAGES.map((page) => ({
    url: `${SITE_URL}${page.path === "/" ? "" : page.path}`,
    lastModified: now,
    changeFrequency: page.path === "/" ? "daily" : "weekly",
    priority: page.path === "/" ? 1 : 0.8,
  }));

  const { data } = await supabase
    .from("blog_highlights")
    .select("blog_id")
    .eq("published", true)
    .order("sort_order");

  // koi-varieties has its own static route and is already in NAV_PAGES.
  const postRoutes: MetadataRoute.Sitemap = (data ?? [])
    .filter((row) => row.blog_id && row.blog_id !== "koi-varieties")
    .map((row) => ({
      url: `${SITE_URL}/blog/${row.blog_id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [...staticRoutes, ...postRoutes];
}
