import { Box, Typography, useTheme } from "@mui/material";
import {
  digiBoxBody,
  digiBoxChaild,
  digiBoxHeader,
  divBorder,
  nestedBox,
} from "./style";
import { ArrowBackIos } from "@mui/icons-material";

const CaptionType = ({ title }) => {
  const theme = useTheme();
  const colorT = theme.palette;
  return (
    <Typography
      variant="caption"
      sx={{
        color: colorT.mode === "dark" ? colorT.grey[500] : colorT.grey[600],
        fontSize: "14px",
      }}
    >
      {title}
    </Typography>
  );
};
const Item = ({ subTitles }) => {
  const theme = useTheme();
  const color = theme.palette;

  const heade = {
    color: color.mode === "dark" ? color.grey[400] : color.grey[900],
    fontWeight: "600",
    m: "0 10px",
  };
  const iconStyle = {
    color: color.grey[600],
    fontSize: "10px",
  };

  return (
    <>
      <Box sx={digiBoxHeader}>
        <ArrowBackIos sx={iconStyle} />
        <Typography
          variant="caption"
          sx={{
            color: color.grey[500],
            fontWeight: "600",
          }}
        >
          {subTitles}
        </Typography>
      </Box>

      <Box sx={digiBoxBody}>
        <Box sx={digiBoxChaild}>
          <Box sx={nestedBox}>
            <ArrowBackIos sx={iconStyle} />
            <Typography variant="subtitle2" sx={heade}>
              تلویزیون{" "}
            </Typography>
            <div style={divBorder} />
          </Box>
          <CaptionType title={"جی پلاس"} />
          <CaptionType title={"ایکس ویژن"} />
          <CaptionType title={"دوو"} />
          <CaptionType title={"اسنوا"} />
        </Box>
        <Box sx={digiBoxChaild}>
          <Box sx={nestedBox}>
            <ArrowBackIos sx={iconStyle} />
            <Typography variant="subtitle2" sx={heade}>
              تلویزیون{" "}
            </Typography>
            <div style={divBorder} />
          </Box>
          <CaptionType title={"جی پلاس"} />
          <CaptionType title={"ایکس ویژن"} />
          <CaptionType title={"دوو"} />
          <CaptionType title={"اسنوا"} />
        </Box>
        <Box sx={digiBoxChaild}>
          <Box sx={nestedBox}>
            <ArrowBackIos sx={iconStyle} />
            <Typography variant="subtitle2" sx={heade}>
              لب تاپ{" "}
            </Typography>
            <div style={divBorder} />
          </Box>
          <CaptionType title={"ایسوز"} />
          <CaptionType title={"لنوا"} />
          <CaptionType title={"اپل"} />
          <CaptionType title={"مایکروسافت"} />
        </Box>
        <Box sx={digiBoxChaild}>
          <Box sx={nestedBox}>
            <ArrowBackIos sx={iconStyle} />
            <Typography variant="subtitle2" sx={heade}>
              گوشی موبایل
            </Typography>
            <div style={divBorder} />
          </Box>
          <CaptionType title={"اپل"} />
          <CaptionType title={"سامسونگ"} />
          <CaptionType title={"شیائومی"} />
          <CaptionType title={"هوآوی"} />
        </Box>
      </Box>
    </>
  );
};

export default Item;
