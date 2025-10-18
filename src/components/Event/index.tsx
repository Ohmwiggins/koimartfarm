import { Box, Grid, Typography } from "@mui/material";
import type { KoiEvent } from "../../models/events";
import { EventDivider, EventTable } from "./Event.styles";

type EventProps = {
  events: KoiEvent[];
};

function Event(props: EventProps) {
  return (
    <EventTable maxWidth="md">
      {props.events.map((e) => {
        return (
          <Box key={e.id}>
            <Grid container spacing={5}>
              <Grid size={4}>
                <Typography variant="body1" color="text.primary">
                  {e.date}
                </Typography>
              </Grid>
              <Grid size={8}>
                <Typography variant="body1" color="text.primary">
                  {e.detail}
                </Typography>
              </Grid>
            </Grid>
            <EventDivider />
          </Box>
        );
      })}
    </EventTable>
  );
}

export default Event;
