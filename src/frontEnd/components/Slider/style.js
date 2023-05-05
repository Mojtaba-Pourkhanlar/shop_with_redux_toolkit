export const swiper = {
  width: "100%",
  height: "100%",
}

export const swiperSlide = {
  textAlign: "center",
  fontSize: "18px",
  background:" #fff",
  display: "flex",
  justifyContent:" center",
  alignItems: "center",
}

export const swiperSlideImg = {
  width: "100%",
  height: "400px",
  objectFit: "cover",
}

export const autoplayProgress = {
  position: "absolute",
  right: "16px",
  bottom: "16px",
  zIndex: 10,
  width: "48px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight:" bold",
  color: "#ccc",
}

export const autoplayProgressSvg = {
//   --progress: 0;
  position: "absolute",
  left: 0,
  top: 0,
  zIndex: 10,
  width: "100%",
  height: "100%",
  strokeWidth: "4px",
  stroke: "#ccc",
  fill: "none",
//   stroke-dashoffset: calc(125.6 * (1 - var(--progress))),
  strokeDasharray:" 125.6",
  transform: "rotate(-90deg)",
}
