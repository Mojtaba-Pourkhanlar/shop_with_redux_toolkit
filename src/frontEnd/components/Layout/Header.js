import { AppBar, Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Theme } from "../../helper";
import topBaner from "frontEnd/assets/images/header.webp";
import { cart, location, logo, menu, user } from "frontEnd/assets/icons";
import {
  appBarStyle,
  dropLayout,
  gridContainerFirst,
  gridContainerSec,
  gridItem,
  imgStyle,
  linkStyle,
  menuDrop,
  pStyle,
} from "./style";
import { headerItem } from "frontEnd/api/fakeApi";
import { useState } from "react";
import { DropDown } from "./dropDoen";

export const Header = () => {
  const [open, setOpen] = useState(false);

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
            <Grid
              item
              xs={6}
              md={9}
              sx={[gridItem, { display: { sm: "none", md: "flex" } }]}
            >
              {headerItem.map((item) => (
                <Box
                  sx={menuDrop}
                  key={item.id}
                  onMouseLeave={() => setOpen(false)}
                >
                  <Typography variant="subtitle2">{item.name}</Typography>
                  <img src={item.icon} alt={item.name} />
                </Box>
              ))}
              <Box sx={[pStyle, { height: "20px", m: "0 10px 10px 0" }]} />
              <Box onMouseOver={() => setOpen(true)} sx={menuDrop}>
                <Typography variant="h6">دسته بندی کالا ها</Typography>
                <img src={menu} alt={"دسته بندی کالا ها"} />
              </Box>
            </Grid>
          </Grid>
          {open && (
            <Box sx={dropLayout} onMouseLeave={() => setOpen(false)}>
              <DropDown />
            </Box>
          )}
        </Container>
      </AppBar>
    </div>
  );
};
