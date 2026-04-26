import React from "react";

const URL_SPLIT = /(https?:\/\/[^\s<>"{}|\\^`[\]]+)/g;
const URL_TEST = /^https?:\/\//;

interface LinkifyProps {
  children: string;
  linkColor?: string;
}

function Linkify({ children, linkColor = "#C5A55A" }: LinkifyProps) {
  const parts = children.split(URL_SPLIT);

  return (
    <>
      {parts.map((part, i) =>
        URL_TEST.test(part) ? (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: linkColor,
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              wordBreak: "break-all",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
}

export default Linkify;
