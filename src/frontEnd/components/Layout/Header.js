import { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Theme } from "../../helper";
import topBaner from "frontEnd/assets/images/header.webp";
import { logo } from "frontEnd/assets/icons";
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
  topImage,
} from "./style";
import { DropDown } from "./dropDoen";
import useScrollDirection from "frontEnd/hook/scroll";
import {
  ShoppingCart,
  Person,
  HourglassBottom,
  Whatshot,
  Storefront,
  Menu,
  LocationOn,
} from "@mui/icons-material";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  const theme = useTheme();
  const color = theme.palette;

  const iconStyle = {
    fontSize: "25px",
    color: color.mode === "dark" ? "#ffffff" : "#0D1024",
  };
  const iconStyleHeader = {
    fontSize: "18px",
    mr: "5px",
    color: color.mode === "dark" ? "#ffffff" : "#0D1024",
  };

  const textStyle = {
    color: color.mode === "dark" ? "#ffffff" : "#0D1024",
  };

  return (
    <div>
      <Box sx={topImage}>
        <img src={topBaner} alt="top-banner" style={imgStyle} />
      </Box>
      <AppBar
        position="fixed"
        sx={[
          appBarStyle,
          {
            height: scrollDirection === "down" ? "50px" : "99px",
            backgroundColor: color.mode === "dark" ? "#0D1024" : "#FFFFFF",
          },
        ]}
      >
        <Container maxWidth="xl" disableGutters sx={{ height: "100%" }}>
          <Grid container sx={gridContainerFirst}>
            <Grid item sx={gridItem}>
              <Link to="/" style={linkStyle}>
                <ShoppingCart sx={iconStyle} />
              </Link>
              <p style={pStyle} sx={iconStyle} />
              <Link to="/" style={linkStyle}>
                <Person sx={iconStyle} />
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

          <Grid
            sx={[
              gridContainerSec,
              { display: scrollDirection === "down" ? "none" : "flex" },
            ]}
          >
            <Grid item xs={6} sx={[gridItem, { margin: "0 15px" }]}>
              <Typography variant="h6" sx={textStyle}>
                ارسال به تهران
              </Typography>
              <LocationOn sx={[iconStyle, { mr: "5px" }]} />
            </Grid>
            <Grid
              item
              xs={6}
              md={9}
              sx={[gridItem, { display: { sm: "none", md: "flex" } }]}
            >
              <Box sx={menuDrop} onMouseLeave={() => setOpen(false)}>
                <Typography variant="subtitle2" sx={textStyle}>
                  تخفیف ها و پیشنهاد ها
                </Typography>
                <HourglassBottom sx={iconStyleHeader} />
              </Box>
              <Box sx={menuDrop} onMouseLeave={() => setOpen(false)}>
                <Typography variant="subtitle2" sx={textStyle}>
                  پرفروش ترین ها
                </Typography>
                <Whatshot sx={iconStyleHeader} />
              </Box>
              <Box sx={menuDrop} onMouseLeave={() => setOpen(false)}>
                <Typography variant="subtitle2" sx={textStyle}>
                  سوپر مارکت
                </Typography>
                <Storefront sx={iconStyleHeader} />
              </Box>

              <Box sx={[pStyle, { height: "20px", m: "0 10px 10px 0" }]} />
              <Box onMouseOver={() => setOpen(true)} sx={menuDrop}>
                <Typography
                  variant="h6"
                  sx={[textStyle, { fontWeight: "600" }]}
                >
                  دسته بندی کالا ها
                </Typography>
                <Menu sx={[iconStyle, { mr: "5px" }]} />
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
