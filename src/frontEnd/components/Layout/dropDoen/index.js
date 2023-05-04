import { Box, Grid, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { detailsStyle, divDropDown, itemStyle } from "./style";
import { book, pc, sport, styler } from "frontEnd/assets/icons";
import Item from "./Item";

export const DropDown = () => {
  const [hoveredItem, setHoveredItem] = useState("")
  const theme = useTheme();
  const color = theme.palette;

  return (
    <Box
      sx={[
        divDropDown,
        { backgroundColor: color.mode === "dark" ? "#131836" : "#CACACA" },
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
            <img src={pc} alt={"کالای دیجیتال"} />
          </Box>
          <Box
            onMouseOver={(e) => setHoveredItem("sec")}
            onMouseLeave={() => setHoveredItem("")}
            sx={itemStyle}
          >
            <Typography variant="subtitle2">مد و پوشاک</Typography>
            <img src={styler} alt={"مد و پوشاک"} />
          </Box>
          <Box
            onMouseOver={(e) => setHoveredItem("third")}
            onMouseLeave={() => setHoveredItem("")}
            sx={itemStyle}
          >
            <Typography variant="subtitle2">ورزش و سفر</Typography>
            <img src={sport} alt={"ورزش و سفر"} />
          </Box>
          <Box
            onMouseOver={(e) => setHoveredItem("fourth")}
            onMouseLeave={() => setHoveredItem("")}
            sx={itemStyle}
          >
            <Typography variant="subtitle2">کتاب و لوازم تحریر</Typography>
            <img src={book} alt={"ورزش و سفر"} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
