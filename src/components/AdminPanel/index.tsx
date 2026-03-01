"use client";

import {
  Alert,
  Box,
  Button,
  Chip,
  IconButton,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import DeleteIcon from "@mui/icons-material/Delete";
import LockIcon from "@mui/icons-material/Lock";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

// ---------------------------------------------------------------------------
// Shared dark-mode TextField sx (reused in all three editor tabs)
// ---------------------------------------------------------------------------
const darkFieldSx = {
  "& .MuiOutlinedInput-root": {
    color: "#FAF8F5",
    "& fieldset": { borderColor: "rgba(255,255,255,0.15)" },
    "&:hover fieldset": { borderColor: "rgba(255,255,255,0.3)" },
    "&.Mui-focused fieldset": { borderColor: "#C5A55A" },
  },
  "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.5)" },
  "& .Mui-focused.MuiInputLabel-root": { color: "#C5A55A" },
  "& .MuiFormHelperText-root": { color: "rgba(255,255,255,0.4)" },
};

// Placeholder — swap this for a real env-var / server-side check in production
const ADMIN_PASSWORD = "koimart2026";
const MAX_CAROUSEL_IMAGES = 20;

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function ImageUploadPreview({
  src,
  onRemove,
  aspectRatio = "4/5",
  width = 160,
  label,
}: {
  src: string;
  onRemove: () => void;
  aspectRatio?: string;
  width?: number;
  label?: string;
}) {
  return (
    <Box sx={{ position: "relative", display: "inline-block" }}>
      <Box
        sx={{
          width,
          aspectRatio,
          position: "relative",
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid rgba(197,165,90,0.3)",
        }}
      >
        <Image src={src} alt={label ?? "Upload preview"} fill style={{ objectFit: "cover" }} />
      </Box>
      <IconButton
        size="small"
        onClick={onRemove}
        aria-label="Remove image"
        sx={{
          position: "absolute",
          top: 4,
          right: 4,
          backgroundColor: "rgba(15,27,45,0.85)",
          color: "#FAF8F5",
          width: 26,
          height: 26,
          "&:hover": { backgroundColor: "error.main" },
        }}
      >
        <DeleteIcon sx={{ fontSize: 14 }} />
      </IconButton>
    </Box>
  );
}

function UploadButton({
  inputRef,
  label,
  multiple,
  onChange,
  disabled,
}: {
  inputRef: React.RefObject<HTMLInputElement | null>;
  label: string;
  multiple?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}) {
  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple={multiple}
        style={{ display: "none" }}
        onChange={onChange}
      />
      <Button
        startIcon={<AddPhotoAlternateIcon />}
        variant="outlined"
        disabled={disabled}
        onClick={() => inputRef.current?.click()}
        sx={{
          borderColor: "#C5A55A",
          color: "#C5A55A",
          "&:hover": { borderColor: "#D4BA7A", backgroundColor: "rgba(197,165,90,0.08)" },
          "&.Mui-disabled": { borderColor: "rgba(197,165,90,0.2)", color: "rgba(197,165,90,0.3)" },
        }}
      >
        {label}
      </Button>
    </>
  );
}

function SaveButton({
  label,
  disabled,
  onClick,
}: {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      variant="contained"
      disabled={disabled}
      onClick={onClick}
      sx={{
        alignSelf: "flex-start",
        mt: 1,
        backgroundColor: "#C5A55A",
        color: "#0F1B2D",
        fontWeight: 700,
        "&:hover": { backgroundColor: "#D4BA7A" },
        "&.Mui-disabled": {
          backgroundColor: "rgba(197,165,90,0.25)",
          color: "rgba(0,0,0,0.3)",
        },
      }}
    >
      {label}
    </Button>
  );
}

// ---------------------------------------------------------------------------
// Tab 0: Header Carousel Editor
// ---------------------------------------------------------------------------
function CarouselEditor() {
  const [images, setImages] = useState<string[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const remaining = MAX_CAROUSEL_IMAGES - images.length;
    Array.from(files)
      .slice(0, remaining)
      .forEach((file) => {
        const reader = new FileReader();
        reader.onload = (ev) => {
          if (ev.target?.result) {
            setImages((prev) => [...prev, ev.target!.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    // Reset input so the same file can be re-selected if removed
    e.target.value = "";
  }, [images.length]);

  const remove = useCallback((idx: number) => {
    setImages((prev) => prev.filter((_, i) => i !== idx));
  }, []);

  const isFull = images.length >= MAX_CAROUSEL_IMAGES;

  return (
    <Box>
      {/* Header row */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Typography
          sx={{ color: "#FAF8F5", fontFamily: "var(--font-inter)", fontWeight: 600 }}
        >
          Carousel Images
        </Typography>
        <Chip
          label={`${images.length} / ${MAX_CAROUSEL_IMAGES}`}
          size="small"
          sx={{
            backgroundColor: isFull ? "error.main" : "#C5A55A",
            color: "#0F1B2D",
            fontWeight: 700,
          }}
        />
      </Box>

      <Alert
        severity="info"
        sx={{
          mb: 3,
          backgroundColor: "rgba(197,165,90,0.08)",
          border: "1px solid rgba(197,165,90,0.2)",
          "& .MuiAlert-message": { color: "rgba(255,255,255,0.7)", fontSize: 12 },
          "& .MuiAlert-icon": { color: "#C5A55A" },
        }}
      >
        Upload portrait images at a <strong>4:5 aspect ratio</strong> (e.g. 800&thinsp;×&thinsp;1000 px).
        Maximum {MAX_CAROUSEL_IMAGES} images. Drag-to-reorder coming soon.
      </Alert>

      <UploadButton
        inputRef={fileRef}
        label={isFull ? "Limit reached (20 / 20)" : "Upload Images (4:5 ratio)"}
        multiple
        onChange={handleUpload}
        disabled={isFull}
      />

      {/* Image grid */}
      {images.length === 0 ? (
        <Typography
          sx={{
            mt: 4,
            color: "rgba(255,255,255,0.25)",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          No images uploaded yet
        </Typography>
      ) : (
        <Box
          sx={{
            mt: 3,
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(5, 1fr)",
            },
            gap: 2,
          }}
        >
          {images.map((src, i) => (
            <Box key={i}>
              {/* Enforced 4:5 preview */}
              <Box
                sx={{
                  aspectRatio: "4/5",
                  position: "relative",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "1px solid rgba(197,165,90,0.25)",
                }}
              >
                <Image src={src} alt={`Slide ${i + 1}`} fill style={{ objectFit: "cover" }} />
                <IconButton
                  size="small"
                  onClick={() => remove(i)}
                  aria-label={`Remove slide ${i + 1}`}
                  sx={{
                    position: "absolute",
                    top: 4,
                    right: 4,
                    backgroundColor: "rgba(15,27,45,0.8)",
                    color: "#FAF8F5",
                    width: 26,
                    height: 26,
                    "&:hover": { backgroundColor: "error.main" },
                  }}
                >
                  <DeleteIcon sx={{ fontSize: 14 }} />
                </IconButton>
              </Box>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.35)",
                  fontSize: 10,
                  textAlign: "center",
                  mt: 0.5,
                  fontFamily: "var(--font-inter)",
                }}
              >
                #{i + 1}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      {images.length > 0 && (
        <Box sx={{ mt: 3 }}>
          <SaveButton
            label="Apply to Carousel"
            onClick={() =>
              alert(
                `${images.length} image(s) ready.\n\nTODO: POST to /api/admin/carousel to persist and update the Banner component.`
              )
            }
          />
        </Box>
      )}
    </Box>
  );
}

// ---------------------------------------------------------------------------
// Tab 1: Event Editor
// ---------------------------------------------------------------------------
function EventEditor() {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      if (ev.target?.result) setImage(ev.target.result as string);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  }, []);

  const handleSave = () => {
    alert(
      `Event "${title}" saved!\n\nTODO: POST to /api/admin/events with { date, title, description, image }.`
    );
    setDate("");
    setTitle("");
    setDescription("");
    setImage(null);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
      <Typography
        sx={{ color: "#FAF8F5", fontFamily: "var(--font-inter)", fontWeight: 600, mb: 0.5 }}
      >
        Add New Event
      </Typography>

      <TextField
        label="Date (DD/MM/YYYY)"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        size="small"
        placeholder="07/02/2026"
        sx={darkFieldSx}
      />
      <TextField
        label="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        size="small"
        sx={darkFieldSx}
      />
      <TextField
        label="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        multiline
        rows={3}
        size="small"
        sx={darkFieldSx}
      />

      {/* Image upload — 4:5 preview */}
      <Box>
        <Typography sx={{ color: "rgba(255,255,255,0.45)", fontSize: 12, mb: 1 }}>
          Event Image (4:5 ratio)
        </Typography>
        {image ? (
          <ImageUploadPreview
            src={image}
            onRemove={() => setImage(null)}
            aspectRatio="4/5"
            width={160}
            label="Event image preview"
          />
        ) : (
          <UploadButton
            inputRef={fileRef}
            label="Upload Image"
            onChange={handleImage}
          />
        )}
      </Box>

      <SaveButton label="Save Event" disabled={!date || !title} onClick={handleSave} />
    </Box>
  );
}

// ---------------------------------------------------------------------------
// Tab 2: Blog Editor
// ---------------------------------------------------------------------------
function BlogEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      if (ev.target?.result) setImage(ev.target.result as string);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  }, []);

  const handlePublish = () => {
    alert(
      `Blog "${title}" published!\n\nTODO: POST to /api/admin/blogs with { title, content, image }.`
    );
    setTitle("");
    setContent("");
    setImage(null);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
      <Typography
        sx={{ color: "#FAF8F5", fontFamily: "var(--font-inter)", fontWeight: 600, mb: 0.5 }}
      >
        Add New Blog Post
      </Typography>

      <TextField
        label="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        size="small"
        sx={darkFieldSx}
      />

      {/* Featured image — 16:9 preview (blog cards use landscape) */}
      <Box>
        <Typography sx={{ color: "rgba(255,255,255,0.45)", fontSize: 12, mb: 1 }}>
          Featured Image (landscape recommended)
        </Typography>
        {image ? (
          <ImageUploadPreview
            src={image}
            onRemove={() => setImage(null)}
            aspectRatio="16/9"
            width={240}
            label="Blog featured image preview"
          />
        ) : (
          <UploadButton
            inputRef={fileRef}
            label="Upload Featured Image"
            onChange={handleImage}
          />
        )}
      </Box>

      <TextField
        label="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        multiline
        rows={10}
        helperText="Markdown or plain text — rendered by the blog page"
        sx={darkFieldSx}
      />

      <SaveButton
        label="Publish Blog Post"
        disabled={!title || !content}
        onClick={handlePublish}
      />
    </Box>
  );
}

// ---------------------------------------------------------------------------
// Main AdminPanel
// ---------------------------------------------------------------------------
export default function AdminPanel() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const handleLogin = useCallback(() => {
    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Incorrect password. Please try again.");
    }
  }, [password]);

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    setIsExpanded(false);
    setPassword("");
    setLoginError("");
  }, []);

  // ── Collapsed state — tiny "Admin" link ──────────────────────────────────
  if (!isExpanded) {
    return (
      <Box
        sx={{
          backgroundColor: "#060D17",
          py: 2,
          display: "flex",
          justifyContent: "center",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <Button
          startIcon={<LockIcon sx={{ fontSize: "14px !important" }} />}
          onClick={() => setIsExpanded(true)}
          size="small"
          sx={{
            color: "rgba(255,255,255,0.2)",
            fontSize: 11,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontFamily: "var(--font-inter)",
            "&:hover": { color: "rgba(255,255,255,0.45)" },
          }}
        >
          Admin
        </Button>
      </Box>
    );
  }

  // ── Login form ────────────────────────────────────────────────────────────
  if (!isLoggedIn) {
    return (
      <Box sx={{ backgroundColor: "#060D17", py: 6, px: 2 }}>
        <Box sx={{ maxWidth: 380, mx: "auto" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography
              sx={{
                color: "#FAF8F5",
                fontFamily: "var(--font-inter)",
                fontWeight: 600,
                fontSize: 18,
              }}
            >
              Admin Login
            </Typography>
            <IconButton
              size="small"
              onClick={() => { setIsExpanded(false); setLoginError(""); }}
              sx={{ color: "rgba(255,255,255,0.4)", "&:hover": { color: "#FAF8F5" } }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          <TextField
            type="password"
            label="Password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setLoginError(""); }}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            fullWidth
            size="small"
            error={!!loginError}
            helperText={loginError}
            autoFocus
            sx={{ ...darkFieldSx, mb: 2 }}
          />

          <Button
            variant="contained"
            fullWidth
            onClick={handleLogin}
            sx={{
              backgroundColor: "#C5A55A",
              color: "#0F1B2D",
              fontWeight: 700,
              "&:hover": { backgroundColor: "#D4BA7A" },
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    );
  }

  // ── Dashboard ─────────────────────────────────────────────────────────────
  return (
    <Box
      sx={{
        backgroundColor: "#060D17",
        py: { xs: 5, md: 8 },
        px: { xs: 2, md: 4 },
        borderTop: "1px solid rgba(197,165,90,0.12)",
      }}
    >
      <Box sx={{ maxWidth: 960, mx: "auto" }}>
        {/* Dashboard header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            pb: 3,
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <Typography
            sx={{
              color: "#FAF8F5",
              fontFamily: "var(--font-playfair)",
              fontSize: { xs: 20, md: 26 },
              fontWeight: 700,
            }}
          >
            Admin Dashboard
          </Typography>
          <Button
            size="small"
            onClick={handleLogout}
            sx={{
              color: "rgba(255,255,255,0.4)",
              fontSize: 12,
              "&:hover": { color: "#FAF8F5" },
            }}
          >
            Logout
          </Button>
        </Box>

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onChange={(_, v: number) => setActiveTab(v)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            mb: 4,
            "& .MuiTab-root": {
              color: "rgba(255,255,255,0.45)",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              textTransform: "none",
              fontSize: 14,
            },
            "& .Mui-selected": { color: "#C5A55A" },
            "& .MuiTabs-indicator": { backgroundColor: "#C5A55A" },
          }}
        >
          <Tab label="Header Carousel" />
          <Tab label="New Event" />
          <Tab label="New Blog Post" />
        </Tabs>

        {/* Tab panels */}
        {activeTab === 0 && <CarouselEditor />}
        {activeTab === 1 && <EventEditor />}
        {activeTab === 2 && <BlogEditor />}
      </Box>
    </Box>
  );
}
