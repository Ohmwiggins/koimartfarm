/** Shape stored in `blog_highlights.content` (JSON-encoded array). */
export interface ContentBlock {
  id?: string;
  type: "paragraph" | "heading" | "image" | "video";
  content: string;
}

export interface BlogCardData {
  blogId: string;
  title: string;
  img: string;
  content: string;
}

/**
 * Pulls the first paragraph out of a post's content for use as a card preview
 * and as the post's meta description. Falls back to the raw value when the
 * content is legacy plain HTML rather than a JSON block array.
 */
export function extractPreview(content: string | null | undefined): string {
  if (!content) return "";
  try {
    const blocks: ContentBlock[] = JSON.parse(content);
    return blocks.find((b) => b.type === "paragraph")?.content ?? "";
  } catch {
    return content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  }
}

/** Trims text to a length search engines will actually display. */
export function toMetaDescription(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trimEnd()}…`;
}
