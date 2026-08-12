export interface AboutContent {
  lead: string;
  paragraphs: string[];
}

/** First blank-line-separated block becomes the pull-quote lead. */
export function parseAboutContent(raw: string): AboutContent {
  const parts = raw
    .split(/\n\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
  const [lead = "", ...paragraphs] = parts;
  return { lead, paragraphs };
}
