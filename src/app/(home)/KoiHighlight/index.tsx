"use client";
import { Box, Slide, Modal, IconButton } from "@mui/material";
import KoiHighlightBox from "../../../components/KoiHighlightBox/KoiHighlightBox";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState, useCallback } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';

const highlightImages = [
  ...Array.from({ length: 10 }, (_, i) => `/img/highlights/koi-highlight${i + 1}.png`),
  ...Array.from({ length: 10 }, (_, i) => `/img/highlights/koi-highlight${i + 11}.png`)
];

function KoiHighlight() {
  const { ref: inViewRef1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: inViewRef2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleOpen = useCallback((index: number) => {
    setSelectedImageIndex(index);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedImageIndex(prevIndex => 
      prevIndex !== null ? (prevIndex - 1 + highlightImages.length) % highlightImages.length : null
    );
  }, []);

  const handleNext = useCallback(() => {
    setSelectedImageIndex(prevIndex =>
      prevIndex !== null ? (prevIndex + 1) % highlightImages.length : null
    );
  }, []);

  useEffect(() => {
    if (scrollRef1.current) {
      const scrollContainer = scrollRef1.current;
      scrollContainer.scrollLeft =
        (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;
    }
    if (scrollRef2.current) {
      const scrollContainer = scrollRef2.current;
      scrollContainer.scrollLeft =
        (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (event.key === 'ArrowLeft') {
        handlePrev();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex, handlePrev, handleNext, handleClose]);

  const combinedRef1 = (node: HTMLDivElement) => {
    scrollRef1.current = node;
    inViewRef1(node);
  };

  const combinedRef2 = (node: HTMLDivElement) => {
    scrollRef2.current = node;
    inViewRef2(node);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          overflowX: "auto",
          overflowY: "hidden",
          display: "flex",
          flexDirection: "row",
          maxWidth: "100vw",
          scrollbarWidth: "none",
          height: "270px",
          alignItems: "center",
        }}
        ref={combinedRef1}
      >
        {highlightImages.slice(0, 10).map((imgUrl, index) => (
            <Slide key={`row1-${index}`} in={inView1} timeout={index * 300}>
              <Box>
                <KoiHighlightBox
                  img={imgUrl}
                  onClick={() => handleOpen(index)}
                />
              </Box>
            </Slide>
        ))}
      </Box>
      <Box
        sx={{
          overflowX: "auto",
          overflowY: "hidden",
          display: "flex",
          flexDirection: "row",
          maxWidth: "100vw",
          scrollbarWidth: "none",
          height: "270px",
          alignItems: "center",
        }}
        ref={combinedRef2}
      >
        {highlightImages.slice(10, 20).map((imgUrl, index) => (
          <Slide key={`row2-${index}`} in={inView2} timeout={index * 300}>
            <Box>
              <KoiHighlightBox
                img={imgUrl}
                onClick={() => handleOpen(index + 10)}
              />
            </Box>
          </Slide>
        ))}
      </Box>
      <Modal open={selectedImageIndex !== null} onClose={handleClose} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
        <Box sx={{
          position: 'relative',
          height: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>

          <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 20, right: 20, color: 'white' }}>
            <CloseIcon fontSize="large"/>
          </IconButton>

          <IconButton onClick={handlePrev} sx={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', color: 'white' }}>
            <ArrowBackIosNewIcon fontSize="large"/>
          </IconButton>

          <IconButton onClick={handleNext} sx={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', color: 'white' }}>
            <ArrowForwardIosIcon fontSize="large"/>
          </IconButton>

          {selectedImageIndex !== null && (
            <img 
              src={highlightImages[selectedImageIndex]} 
              alt="selected-koi" 
              style={{ maxHeight: '90vh', maxWidth: '80vw', objectFit: 'contain' }}
            />
          )}

        </Box>
      </Modal>
    </Box>
  );
}

export default KoiHighlight;
