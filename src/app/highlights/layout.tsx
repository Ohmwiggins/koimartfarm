import type { Metadata } from "next";
import PageMargin from "../../components/PageMargin";

export const metadata: Metadata = {
  title: "Highlights",
  description: "…",
};

export default function HighlightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageMargin>{children}</PageMargin>;
}
