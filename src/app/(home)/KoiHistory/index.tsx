"use client";
import { Box, Fade, Grow, Grid, Typography, Modal, IconButton, Pagination, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useCallback } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { supabase } from "../../../lib/supabase";

function isVideo(url: string): boolean {
  return /\.(mp4|webm|mov|avi|mkv|m4v)(\?|$)/i.test(url);
}

function isYouTube(url: string): boolean {
  return /youtube\.com\/(watch|embed|shorts)|youtu\.be\//.test(url);
}

function getYouTubeId(url: string): string {
  const m =
    url.match(/youtube\.com\/watch\?v=([^&]+)/) ??
    url.match(/youtu\.be\/([^?]+)/) ??
    url.match(/youtube\.com\/embed\/([^?/]+)/) ??
    url.match(/youtube\.com\/shorts\/([^?]+)/);
  return m?.[1] ?? "";
}

function getYouTubeEmbedUrl(url: string): string {
  const id = getYouTubeId(url);
  return `https://www.youtube.com/embed/${id}?autoplay=1`;
}

interface AboutContent {
  lead: string;
  paragraphs: string[];
}

function parseContent(raw: string): AboutContent {
  const parts = raw.split(/\n\n+/).map((s) => s.trim()).filter(Boolean);
  const [lead = "", ...paragraphs] = parts;
  return { lead, paragraphs };
}

function History() {
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: travelImgRef, inView: travelImgInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [content, setContent] = useState<AboutContent | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [galleryPage, setGalleryPage] = useState(1);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const perPage = isMobile ? 4 : 8;

  useEffect(() => {
    supabase
      .from("about_gallery")
      .select("url")
      .order("sort_order")
      .then(({ data, error }) => {
        console.log("[about_gallery] data:", data, "error:", error);
        if (data) setGalleryImages(data.map((d: { url: string }) => d.url));
      });

    supabase
      .from("about_text")
      .select("content")
      .limit(1)
      .single()
      .then(({ data, error }) => {
        if (error) console.error("[about_text]", error);
        if (data?.content) setContent(parseContent(data.content));
      });
  }, []);

  const handleOpen = useCallback((index: number) => setSelectedImageIndex(index), []);
  const handleClose = useCallback(() => setSelectedImageIndex(null), []);

  const handlePrev = useCallback(() => {
    setSelectedImageIndex((prev) =>
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
    );
  }, [galleryImages.length]);

  const handleNext = useCallback(() => {
    setSelectedImageIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  }, [galleryImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, handlePrev, handleNext, handleClose]);

  return (
    <Box>
      {/* Two-column CEO + Story layout */}
      <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
        {/* Left: CEO Image */}
        <Grid size={{ xs: 12, md: 5 }} ref={imageRef}>
          <Grow in={imageInView} timeout={2000}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-start" } }}>
              <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, mb: 2, px: 1.5, py: 0.5, borderRadius: "999px", border: "1px solid rgba(197, 165, 90, 0.4)", backgroundColor: "rgba(197, 165, 90, 0.08)" }}>
                <Box sx={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#C5A55A" }} />
                <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#C5A55A", textTransform: "uppercase", fontFamily: "var(--font-inter)" }}>
                  Founder & CEO
                </Typography>
              </Box>

              <Box sx={{ position: "relative", display: "inline-block" }}>
                <Box sx={{ position: "absolute", top: -10, left: -10, width: 28, height: 28, borderTop: "2px solid #C5A55A", borderLeft: "2px solid #C5A55A", borderRadius: "4px 0 0 0", zIndex: 1 }} />
                <Box sx={{ position: "absolute", bottom: -10, right: -10, width: 28, height: 28, borderBottom: "2px solid #C5A55A", borderRight: "2px solid #C5A55A", borderRadius: "0 0 4px 0", zIndex: 1 }} />
                <Image
                  src="/img/history/ceo.png"
                  alt="KoiMartFarm CEO"
                  width={800}
                  height={800}
                  style={{ display: "block", width: "100%", maxWidth: 360, height: "auto", borderRadius: 16 }}
                />
              </Box>

              <Box sx={{ mt: 3, textAlign: { xs: "center", md: "left" } }}>
                <Typography sx={{ fontFamily: "var(--font-playfair)", color: "primary.main", fontSize: 20, fontWeight: 700, mb: 0.5 }}>
                  บวรศักดิ์ ศุภทนต์
                </Typography>
                <Typography sx={{ color: "secondary.main", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "var(--font-inter)" }}>
                  CEO · KOIMART GROUP
                </Typography>
              </Box>
            </Box>
          </Grow>
        </Grid>

        {/* Right: Story Text */}
        <Grid size={{ xs: 12, md: 7 }} ref={textRef}>
          <Grow in={textInView} timeout={2000}>
            <Box>
              <Typography sx={{ fontFamily: "var(--font-playfair)", fontSize: 120, lineHeight: 0.75, color: "secondary.main", opacity: 0.2, mb: -2, userSelect: "none" }}>
                &ldquo;
              </Typography>

              {content && (
                <>
                  {content.lead && (
                    <Box sx={{ borderLeft: "3px solid", borderColor: "secondary.main", pl: 3, mb: 4 }}>
                      <Typography variant="body1" sx={{ color: "text.secondary", fontStyle: "italic", fontWeight: 500, lineHeight: 1.8, fontSize: { xs: 15, md: 16 }, wordBreak: "keep-all", overflowWrap: "break-word" }}>
                        {content.lead}
                      </Typography>
                    </Box>
                  )}
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {content.paragraphs.map((paragraph, index) => (
                      <Typography key={index} variant="body2" sx={{ color: "text.primary", lineHeight: 1.85, wordBreak: "keep-all", overflowWrap: "break-word" }}>
                        {paragraph}
                      </Typography>
                    ))}
                  </Box>
                </>
              )}
            </Box>
          </Grow>
        </Grid>
      </Grid>

      {/* Travel photo gallery */}
      <div ref={travelImgRef} className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
        {galleryImages
          .slice((galleryPage - 1) * perPage, galleryPage * perPage)
          .map((imgSrc, index) => (
            <Fade key={(galleryPage - 1) * perPage + index} in={travelImgInView} timeout={index * 250}>
              <div onClick={() => handleOpen((galleryPage - 1) * perPage + index)} className="group relative cursor-pointer overflow-hidden rounded-xl aspect-square">
                {isVideo(imgSrc) ? (
                  <video
                    src={imgSrc}
                    muted
                    loop
                    playsInline
                    autoPlay
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
                    className="group-hover:scale-110"
                  />
                ) : isYouTube(imgSrc) ? (
                  <iframe
                    src={`${getYouTubeEmbedUrl(imgSrc)}&mute=1&loop=1&playlist=${getYouTubeId(imgSrc)}&controls=0`}
                    allow="autoplay; encrypted-media"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      pointerEvents: "none",
                    }}
                  />
                ) : (
                  <Image
                    src={imgSrc}
                    alt="KoiMartFarm Japan"
                    fill
                    sizes="(max-width: 600px) 50vw, (max-width: 960px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-all duration-300" />
                {(isVideo(imgSrc) || isYouTube(imgSrc)) && (
                  <Box sx={{ position: "absolute", bottom: 8, right: 8, opacity: 0.9, pointerEvents: "none" }}>
                    <PlayCircleFilledIcon fontSize="small" sx={{ color: "#C5A55A" }} />
                  </Box>
                )}
              </div>
            </Fade>
          ))}
      </div>

      {Math.ceil(galleryImages.length / perPage) > 1 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <Pagination
            count={Math.ceil(galleryImages.length / perPage)}
            page={galleryPage}
            onChange={(_, value) => setGalleryPage(value)}
            sx={{
              "& .MuiPaginationItem-root": {
                color: "primary.main",
                fontFamily: "var(--font-inter)",
                fontWeight: 600,
              },
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "secondary.main",
                color: "#fff",
                "&:hover": { backgroundColor: "secondary.light" },
              },
            }}
          />
        </Box>
      )}

      {/* Lightbox Modal */}
      <Modal open={selectedImageIndex !== null} onClose={handleClose} sx={{ backgroundColor: "rgba(10, 18, 32, 0.92)" }}>
        <Box sx={{ position: "relative", height: "100vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IconButton onClick={handleClose} sx={{ position: "absolute", top: 20, right: 20, color: "#FAF8F5", "&:hover": { color: "#C5A55A" } }}>
            <CloseIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={handlePrev} sx={{ position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)", color: "#FAF8F5", "&:hover": { color: "#C5A55A" } }}>
            <ArrowBackIosNewIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={handleNext} sx={{ position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)", color: "#FAF8F5", "&:hover": { color: "#C5A55A" } }}>
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
          {selectedImageIndex !== null && (
            <Box sx={{ position: "relative", width: "80vw", height: "90vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {isVideo(galleryImages[selectedImageIndex]) ? (
                <video
                  key={galleryImages[selectedImageIndex]}
                  src={galleryImages[selectedImageIndex]}
                  controls
                  autoPlay
                  style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "12px", objectFit: "contain" }}
                />
              ) : isYouTube(galleryImages[selectedImageIndex]) ? (
                <iframe
                  key={galleryImages[selectedImageIndex]}
                  src={getYouTubeEmbedUrl(galleryImages[selectedImageIndex])}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ width: "80vw", height: "80vh", border: "none", borderRadius: "12px" }}
                />
              ) : (
                <Image
                  src={galleryImages[selectedImageIndex]}
                  alt="KoiMartFarm History"
                  fill
                  sizes="80vw"
                  style={{ objectFit: "contain", borderRadius: "12px" }}
                />
              )}
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
}

export default History;
