import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import type { KoiEvent } from "../../models/events";

type EventProps = {
  events: KoiEvent[];
};

function Event(props: EventProps) {
  return (
    <Container maxWidth="md" sx={{ paddingY: 5 }}>
      {props.events.map((e) => {
        return (
          <Box key={e.id} sx={{ paddingY: 1 }}>
            <Grid container spacing={5}>
              <Grid size={4}>
                <Typography fontSize={{ xs: 16, sm: 20 }} color="text.primary">
                  {e.date}
                </Typography>
              </Grid>
              <Grid size={8}>
                <Typography fontSize={{ xs: 16, sm: 20 }} color="text.primary">
                  {e.detail}
                </Typography>
              </Grid>
            </Grid>
            <Divider
              sx={{ borderBottomWidth: 1, borderColor: "text.primary" }}
            />
          </Box>
        );
      })}
    </Container>
  );
}

export default Event;
