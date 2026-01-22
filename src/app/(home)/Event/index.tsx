"use client";

import { Box, Grid, Typography } from "@mui/material";
import type { KoiEvent } from "../../../models/events";
import { EventTable } from "./Event.styles";
import EventHighlight from "../EventHighlight";

type EventProps = {
  events: KoiEvent[];
};

function Event(props: EventProps) {
  return (
    <Box>
      <EventTable maxWidth="md">
        {props.events.map((e) => {
          return (
            <Box key={e.id}>
              <Grid
                container
                sx={{
                  px: 5,
                  py: 2,
                  my: 2,
                  mx: 5,
                  borderRadius: 2,
                  backgroundColor: "secondary.light",
                  alignItems: "center",
                }}
              >
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Typography variant="body1" color="text.primary">
                    {e.date}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 8 }}>
                  <Typography variant="h5" color="text.primary">
                    {e.detail}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </EventTable>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingY: 5,
            overflowX: "hidden",
          }}
        >
          <EventHighlight />
        </Box>
      </Box>
    </Box>
  );
}

export default Event;
