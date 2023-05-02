import { AppBar, Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Theme } from "../../helper";
import logo from "frontEnd/assets/icons/logo.svg";
import user from "frontEnd/assets/icons/user.svg";
import location from "frontEnd/assets/icons/location.svg";
import cart from "frontEnd/assets/icons/cart.svg";
import menu from "frontEnd/assets/icons/menu.svg";
import topBaner from "frontEnd/assets/svg/header.webp";
import {
  appBarStyle,
  gridContainerFirst,
  gridContainerSec,
  gridItem,
  imgStyle,
  linkStyle,
  menuDrop,
  pStyle,
} from "./style";

export const Header = () => {
  return (
    <div>
      <Box sx={{ height: { xs: "35px", md: "60px" } }}>
        <img src={topBaner} alt="top-banner" style={imgStyle} />
      </Box>
      <AppBar position="fixed" sx={appBarStyle}>
        <Container maxWidth="xl" disableGutters sx={{ height: "100%" }}>
          <Grid container sx={gridContainerFirst}>
            <Grid item sx={gridItem}>
              <Link to="/" style={linkStyle}>
                <img src={cart} alt="cart" width="40px" />
              </Link>
              <p style={pStyle} />
              <Link to="/" style={linkStyle}>
                <img src={user} alt="cart" width="40px" />
              </Link>
            </Grid>
            <Grid item sx={gridItem}>
              <Box mx={5}>
                <Theme />
              </Box>
              <Link to="/cart" style={linkStyle}>
                <img src={logo} alt="cart" />
              </Link>
            </Grid>
          </Grid>

          <Grid sx={gridContainerSec}>
            <Grid item xs={6} sx={[gridItem, { margin: "0 15px" }]}>
              <Typography variant="h6">ارسال به تهران</Typography>
              <img src={location} alt="location" width="40px" />
            </Grid>
            <Grid item xs={6} md={9} sx={gridItem}>
              <Typography variant="h6" sx={{ m: "0 20px" }}>
                تخفیف ها و پیشنهاد ها
              </Typography>
              <Typography variant="h6">پر فروش ترین ها</Typography>
              <Typography variant="h6" sx={{ m: "0 40px 0 20px" }}>
                سوپرمارکت
              </Typography>
              <Box sx={menuDrop}>
                <Typography variant="h6">دسته بندی کالا ها</Typography>
                <img src={menu} alt="menu" />
              </Box>
              <span
                style={{
                  backgroundColor: "#ef394e",
                  left: 0,
                  bottom: 0,
                }}
              ></span>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </div>
  );
};
