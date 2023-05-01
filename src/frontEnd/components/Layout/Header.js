import { AppBar, Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Theme } from "../../helper";
import logo from "frontEnd/assets/icons/logo.svg";
import user from "frontEnd/assets/icons/user.svg";
import location from "frontEnd/assets/icons/location.svg";
import cart from "frontEnd/assets/icons/cart.svg";
import topBaner from "frontEnd/assets/svg/header.webp";

export const Header = () => {
  return (
    <div>
      <div>
        <img src={topBaner} alt="" width="100%" />
      </div>
      <AppBar
        position="fixed"
        sx={{
          top: "69px",
          background: "#20295B",
          height: "95px",
        }}
      >
        <Container maxWidth="xl" disableGutters sx={{ height: "100%" }}>
          <Grid
            container
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              // px: { xs: "10px", sm: "15px", lg: "20px", xl: "0" },
              height: "60%",
            }}
          >
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link to="/" style={{ textDecoration: "none", margin: "0 10px" }}>
                <img src={cart} alt="cart" width="40px" />
              </Link>
              <p
                style={{
                  height: "32px",
                  width: "1px",
                  background:
                    "linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, rgb(224, 225, 226) 49.52%, rgba(224, 225, 226, 0) 100%)",
                  borderRadius: "50%",
                  margin: "0 10px",
                }}
              />
              <Link to="/" style={{ textDecoration: "none", margin: "0 10px" }}>
                <img src={user} alt="cart" width="40px" />
              </Link>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box mx={5}>
                <Theme />
              </Box>
              <Link
                to="/cart"
                style={{ textDecoration: "none", margin: "0 10px" }}
              >
                <img src={logo} alt="cart" />
              </Link>
            </Grid>
          </Grid>

          <Grid
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                m: "0 15px",
              }}
            >
              <Typography>ارسال به تهران</Typography>
              <img src={location} alt="location" width="40px" />
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography>دسته بندی کالا ها</Typography>
              <Typography>سوپرمارکت</Typography>
              <Typography>پر فروش ترین ها</Typography>
              <Typography>تخفیف ها و پیشنهاد ها</Typography>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </div>
  );
};
