import { Typography } from "@mui/material";
import Image from "next/image";

function KoiHighlightBox({
  img,
  desc,
  onClick,
}: {
  img: string;
  desc?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={`group relative flex flex-col ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={`${img}`}
          alt={`highlight-img-${desc}`}
          width={300}
          height={500}
          className="transition-transform duration-500 group-hover:scale-105"
          style={{
            width: "180px",
            height: "240px",
            objectFit: "cover",
            display: "block",
          }}
        />
        {/* Hover overlay with subtle navy tint */}
        {onClick && (
          <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-all duration-300 rounded-xl" />
        )}
      </div>

      {desc && (
        <Typography
          variant="body2"
          sx={{
            color: "secondary.main",
            fontWeight: 600,
            mt: 1,
            fontSize: 13,
            letterSpacing: "0.02em",
          }}
        >
          {desc}
        </Typography>
      )}
    </div>
  );
}

export default KoiHighlightBox;
