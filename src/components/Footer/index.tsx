import {
  Box,
  Button,
  Grid,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import HeaderText from "../HeaderText";
import appLogo from "./../../assets/logo/FullLogo.png";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <HeaderText title="Contact Us" color="primary.contrastText" />
      </Box>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={5}
        sx={{ paddingY: 10, justifyContent: "center" }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              minHeight: 200,
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1040.735378468406!2d100.52806330942832!3d13.901343551246619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e283667e313185%3A0xf3d9ce05d5dff8ae!2z4Lia4LiI4LiBLiDguYLguITguYjguKIg4Lih4Liy4Lij4LmM4LiXIOC4n-C4suC4o-C5jOC4oQ!5e0!3m2!1sth!2sth!4v1760697310973!5m2!1sth!2sth"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box>
            <Typography
              variant="h3"
              sx={{ color: "primary.contrastText", paddingBottom: 3 }}
            >
              ส่งข้อความหาเรา
            </Typography>
            <Box sx={{ paddingY: 1 }}>
              <InputBase
                placeholder="ชื่อผู้ติดต่อ"
                sx={{ width: "100%", paddingX: 2 }}
              />
            </Box>
            <Box sx={{ paddingY: 1 }}>
              <InputBase
                placeholder="บริษัท"
                sx={{ width: "100%", paddingX: 2 }}
              />
            </Box>
            <Box sx={{ paddingY: 1 }}>
              <InputBase
                placeholder="หัวเรื่อง"
                sx={{ width: "100%", paddingX: 2 }}
              />
            </Box>
            <Box sx={{ paddingTop: 1 }}>
              <InputBase
                multiline
                placeholder="รายละเอียด"
                sx={{ width: "100%", paddingX: 2 }}
                rows={4}
              />
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}></Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingY: 2,
          }}
        >
          <Box component="img" src="img/Koi.png" alt="Koi" sx={{ width: 40 }} />
          <Button
            variant="contained"
            sx={{
              width: "30%",
              height: "60%",
              "&:hover": { backgroundColor: "primary.light" },
            }}
            onClick={() => console.log("submit")}
          >
            ส่ง
          </Button>
        </Grid>

        <Grid size={{ sm: 12, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Box
              component="img"
              src={appLogo}
              sx={{
                width: "100%",
                maxWidth: 250,
                height: "auto",
                display: "flex",
              }}
            />
            <Typography
              variant="h3"
              sx={{ color: "primary.contrastText", paddingY: 2 }}
            >
              Koi Mart Farm Co.,LTD
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "primary.contrastText", paddingY: 0.5 }}
            >
              46/81 Moo2 Chaengwattana28, Bangtalad, Pak Kret District,
              Nonthaburi 11120
            </Typography>
          </Box>
        </Grid>
        <Grid
          size={{ sm: 12, md: 6 }}
          sx={{
            display: "flex",
            justifyContent: { sm: "center", md: "flex-end" },
            alignItems: "flex-end",
          }}
        >
          <Box
            component="img"
            src={"/img/socialmedias/facebook.png"}
            sx={{
              maxWidth: 50,
              paddingX: 1,
              "&:hover": { cursor: "pointer" },
            }}
            onClick={() => console.log("facebook")}
          />

          <Box
            component="img"
            src={"/img/socialmedias/tiktok.png"}
            sx={{
              maxWidth: 50,
              paddingX: 1,
              "&:hover": { cursor: "pointer" },
            }}
            onClick={() => console.log("tiktok")}
          />
          <Box
            component="img"
            src={"/img/socialmedias/line.png"}
            sx={{
              maxWidth: 50,
              paddingX: 1,
              "&:hover": { cursor: "pointer" },
            }}
            onClick={() => console.log("line")}
          />
          <Box
            component="img"
            src={"/img/socialmedias/instagram.png"}
            sx={{
              maxWidth: 50,
              paddingX: 1,
              "&:hover": { cursor: "pointer" },
            }}
            onClick={() => console.log("instagram")}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
