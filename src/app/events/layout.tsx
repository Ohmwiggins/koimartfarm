import type { Metadata } from "next";
import PageMargin from "../../components/PageMargin";

export const metadata: Metadata = {
  title: "Events",
  description: "…",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageMargin>{children}</PageMargin>;
}
