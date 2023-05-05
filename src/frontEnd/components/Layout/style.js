export const topImage = {
  position: "fixed",
  top: "0",
  width: "100%",
  height: { xs: "35px", md: "60px" },
  zIndex: "100",
};
export const imgStyle = {
  height: "60px",
  width: "100%",
  objectFit: "cover",
};
export const appBarStyle = {
  top: "60px",
  // background: "#0D1024",
  width: "100%",
  transitionProperty: " all",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "400ms",
};
export const gridContainerFirst = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  pt: "10px",
};
export const gridContainerSec = {
  position: "relative",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  py: "10px",
};
export const gridItem = {
  display: "flex",
  alignItems: "center",
};
export const linkStyle = { textDecoration: "none", margin: "0 10px" };
export const pStyle = {
  height: "25px",
  width: "1px",
  background:
    "linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, rgb(224, 225, 226) 49.52%, rgba(224, 225, 226, 0) 100%)",
  borderRadius: "50%",
  margin: "0 10px",
};
export const menuDrop = {
  display: "flex",
  alignItems: "center",
  mr: "20px",
  pb: "10px",
  height: "40px",
  border: "none",
  position: "relative",
  "&:hover": {
    border: "none",
  },
  "&::after": {
    content: `""`,
    position: "absolute",
    width: "0px",
    height: "2px",
    right: "0%",
    bottom: 0,
    backgroundColor: "#ef394e",
    transition: "all ease-in-out .4s",
  },
  "&:hover::after": {
    width: "100%",
    right: 0,
  },
};

export const dropLayout = {
  display: { sm: "none", md: "flex" },
  alignItems: "center",
  justifyContent: "end",
  marginTop: "-12px",
};
