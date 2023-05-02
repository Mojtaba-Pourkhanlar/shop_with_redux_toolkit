export const imgStyle = {
  height: "60px",
  width: "100%",
  objectFit: "cover",
};
export const appBarStyle = {
  top: "60px",
  background: "#0D1024",
  height: "fit-content",
  width: "100%",
};
export const gridContainerFirst = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  pt: "10px",
};
export const gridContainerSec = {
  position:"relative",
  width: "100%",
  display: { xs: "none", sm: "flex" },
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
  height: "32px",
  width: "1px",
  background:
    "linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, rgb(224, 225, 226) 49.52%, rgba(224, 225, 226, 0) 100%)",
  borderRadius: "50%",
  margin: "0 10px",
};
export const menuDrop = {
  display: "flex",
  alignItems: "center",
  // pb:"10px",
  "&:hover": {
    pb: "10px",
    borderBottom: "2px solid #448024",
    transform: "translate3d(1px, 0px, 0px)",
  },
};
