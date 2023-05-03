import { Box, Grid, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { bocItem, gridItem } from "./style";
import { book, pc, sport, styler } from "frontEnd/assets/icons";

export const DropDown = () => {
  const [first, setFirst] = useState(true);
  const [sec, setSec] = useState(false);
  const [thir, setThir] = useState(false);
  const [fours, setFours] = useState(false);

  const theme = useTheme();
  const color = theme.palette;

  const divDropDown = {
    backgroundColor: color.mode === "dark" ? "#131836" : "#CACACA",
    width: "800px",
    height: "250px",
    zindex: "100",
    boxShadow: "2px 15px 21px 1880px rgba(0,0,0,0.3)",
    transition: "all 1s linear",
  };

  return (
    <div style={divDropDown}>
      <Grid container sx={{ height: "inherit" }}>
        <Grid item sm={9} >
          {!sec && !thir && !fours && (
            <Box>
              <Typography variant="h6">کالای دیجیتال</Typography>
            </Box>
          )}
          {sec && (
            <Box>
              <Typography variant="h6">مد و پوشاک</Typography>
            </Box>
          )}
          {thir && (
            <Box>
              <Typography variant="h6">ورزش و سفر</Typography>
            </Box>
          )}
          {fours && (
            <Box>
              <Typography variant="h6">کتاب و لوازم تحریر و هنر</Typography>
            </Box>
          )}
        </Grid>
        <Grid item sm={3} sx={gridItem}>
          <Box
            onMouseLeave={() => setFirst(false)}
            onMouseOver={() => setFirst(true)}
            sx={bocItem}
          >
            <Typography variant="h6">کالای دیجیتال</Typography>
            <img src={pc} alt={"کالای دیجیتال"} />
          </Box>
          <Box
            onMouseLeave={() => setSec(false)}
            onMouseOver={() => setSec(true)}
            sx={bocItem}
          >
            <Typography variant="h6">مد و پوشاک</Typography>
            <img src={styler} alt={"مد و پوشاک"} />
          </Box>
          <Box
            onMouseLeave={() => setThir(false)}
            onMouseOver={() => setThir(true)}
            sx={bocItem}
          >
            <Typography variant="h6">ورزش و سفر</Typography>
            <img src={sport} alt={"ورزش و سفر"} />
          </Box>
          <Box
            onMouseLeave={() => setFours(false)}
            onMouseOver={() => setFours(true)}
            sx={bocItem}
          >
            <Typography variant="h6">کتاب و لوازم تحریر و هنر</Typography>
            <img src={book} alt={"کتاب و لوازم تحریر و هنر"} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
