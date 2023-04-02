import { useContext } from "react";
import { Box, useTheme } from "@mui/material";
import { ColorModeContext } from "../theme";
// Images
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";

const Theme = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box sx={{ cursor: "pointer" }} onClick={colorMode.toggleColorMode}>
      {theme.palette.mode === "dark" ? (
        <img src={moon} width={28} height={28} alt="sun" />
      ) : (
        <img src={sun} width={28} height={28} alt="moon" />
      )}
    </Box>
  );
};

export default Theme;
