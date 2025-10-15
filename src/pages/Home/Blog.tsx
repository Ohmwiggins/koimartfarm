import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import blogs from "../../data/blog.json";

function HighlightComponent({
  title,
  img,
  desc,
  link,
}: {
  title: string;
  img: string;
  desc: string;
  link: string;
}) {
  return (
    <Card sx={{ display: "flex", flexDirection: "column", maxWidth: 350 }}>
      <CardMedia sx={{ height: 150 }} image={`/img/blogs/${img}`} />
      <CardContent>
        <Typography variant="body2" noWrap sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="body2" noWrap>
          {desc}
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{ margin: 1, width: "100%" }}
          onClick={() => console.log(link)}
        >
          อ่านต่อ
        </Button>
      </Box>
    </Card>
  );
}

function Blog() {
  return (
    <Grid container spacing={2}>
      {blogs.map((b) => (
        <Grid key={b.id} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <HighlightComponent
              title={b.title}
              img={b.img}
              desc={b.detail}
              link={b.link}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Blog;
