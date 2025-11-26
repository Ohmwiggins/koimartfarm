import { Box, Container } from "@mui/material";
import Event from "../../components/Event/index";
import eventDetails from "../../data/events.json";
import PageHeader from "../../components/PageHeader";

function Events() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ marginY: 10 }}>
        <PageHeader text="Events" />
      </Box>
      <Event events={eventDetails} />
    </Container>
  );
}

export default Events;
