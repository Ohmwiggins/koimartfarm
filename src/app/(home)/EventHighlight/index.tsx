import { Box } from "@mui/material";
import EventHighlightBox from "../../../components/EventHighlightBox";

function EventHighlight() {
  return (
    <Box
      sx={{
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        maxWidth: "98vw",
        scrollbarWidth: "none",
      }}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Box key={i} sx={{ display: "inline-block", margin: 2 }}>
          <Box>
            <EventHighlightBox img={`/img/events/event-${i + 1}.png`} />
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default EventHighlight;
