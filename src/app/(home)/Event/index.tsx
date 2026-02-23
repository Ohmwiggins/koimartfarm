"use client";

import { Box, Grid, Typography, Card, CardContent, Container, Chip } from "@mui/material";
import type { KoiEvent } from "../../../models/events";
import EventHighlight from "../EventHighlight";

type EventProps = {
  events: KoiEvent[];
};

function Event(props: EventProps) {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {props.events.map((e, index) => {
            const isFeatured = index === 0;
            return (
              <Grid key={e.id} size={{ xs: 12, md: isFeatured ? 12 : 6 }}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: isFeatured ? 'row' : 'column' },
                    borderLeft: isFeatured ? '4px solid' : 'none',
                    borderColor: 'secondary.main',
                    transition: 'box-shadow 0.3s ease, transform 0.2s ease',
                    '&:hover': {
                      boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Box sx={{ mb: 2 }}>
                      <Chip
                        label="งานอีเว้นท์"
                        color="secondary"
                        size="small"
                        sx={{ fontWeight: 600 }}
                      />
                    </Box>
                    <Typography
                      variant={isFeatured ? "h4" : "h5"}
                      color="text.primary"
                      sx={{ mb: 2, fontWeight: 600 }}
                    >
                      {e.detail}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      📅 {e.date}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: 8,
            overflowX: "hidden",
          }}
        >
          <EventHighlight />
        </Box>
      </Container>
    </Box>
  );
}

export default Event;
