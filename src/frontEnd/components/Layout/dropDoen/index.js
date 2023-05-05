import { Box, Grid, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { detailsStyle, divDropDown, iconStyleHeader } from "./style";
import {
  Computer,
  DownhillSkiing,
  MenuBook,
  Checkroom,
} from "@mui/icons-material";
import Item from "./Item";

export const DropDown = () => {
  const [hoveredItem, setHoveredItem] = useState("");
  const theme = useTheme();
  const color = theme.palette;

  const itemStyle = {
    position: "relative",
    py: "14px",
    cursor: "pointer",
    textAlign: "end",
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    pl: "15px",
    color: color.mode === "dark" ? "#ffffff" : "#0D1024",
    "&:hover": {
      color: "#ee384e !important",
      backgroundColor: color.mode === "dark" ? "#192048" : "#E0E0E0",
      borderRadius: "0 20px 20px 0",
      overflow: "hidden",
    },
  };

  return (
    <Box
      sx={[
        divDropDown,
        { backgroundColor: color.mode === "dark" ? "#131836" : "#ffffff" },
      ]}
    >
      <Grid container>
        <Grid item sm={9}>
          <div style={detailsStyle}>
            {hoveredItem === "" && (
              <Item subTitles="همه محصولات کالای دیجیتال" />
            )}
            {hoveredItem === "first" && (
              <div
                onMouseOver={(e) => setHoveredItem("first")}
                onMouseLeave={() => setHoveredItem("")}
              >
                <Item subTitles="همه محصولات کالای دیجیتال" />
              </div>
            )}
            {hoveredItem === "sec" && (
              <div
                onMouseOver={(e) => setHoveredItem("sec")}
                onMouseLeave={() => setHoveredItem("")}
              >
                <Item subTitles="همه محصولات مد و پوشاک" />
              </div>
            )}
            {hoveredItem === "third" && (
              <div
                onMouseOver={(e) => setHoveredItem("third")}
                onMouseLeave={() => setHoveredItem("")}
              >
                <Item subTitles="همه محصولات ورزش و سفر" />
              </div>
            )}
            {hoveredItem === "fourth" && (
              <div
                onMouseOver={(e) => setHoveredItem("fourth")}
                onMouseLeave={() => setHoveredItem("")}
              >
                <Item subTitles="همه محصولات کتال و لوازم تحریر" />
              </div>
            )}
          </div>
        </Grid>
        <Grid item sm={3}>
          <Box
            onMouseOver={(e) => setHoveredItem("first")}
            onMouseLeave={() => setHoveredItem("")}
            sx={itemStyle}
          >
            <Typography variant="subtitle2">کالای دیجیتال</Typography>
            <Computer sx={iconStyleHeader} />
          </Box>
          <Box
            onMouseOver={(e) => setHoveredItem("sec")}
            onMouseLeave={() => setHoveredItem("")}
            sx={itemStyle}
          >
            <Typography variant="subtitle2">مد و پوشاک</Typography>
            <Checkroom sx={iconStyleHeader} />
          </Box>
          <Box
            onMouseOver={(e) => setHoveredItem("third")}
            onMouseLeave={() => setHoveredItem("")}
            sx={itemStyle}
          >
            <Typography variant="subtitle2">ورزش و سفر</Typography>
            <DownhillSkiing sx={iconStyleHeader} />
          </Box>
          <Box
            onMouseOver={(e) => setHoveredItem("fourth")}
            onMouseLeave={() => setHoveredItem("")}
            sx={itemStyle}
          >
            <Typography variant="subtitle2">کتاب و لوازم تحریر</Typography>
            <MenuBook sx={iconStyleHeader} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
