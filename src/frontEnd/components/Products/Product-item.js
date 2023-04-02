import { useTheme } from "@mui/material";
import React from "react";

const ProductItem = (props) => {
  const theme = useTheme();
  const color = theme.palette;
  const { name, image, price, featured, id } = props.products;
  const demo = {
    background: color.mode === "dark" ? "#131836" : "#CACACA",
    boxShadow:
      color.mode === "dark"
        ? "0px 0px 20px 5px rgba(133, 150, 150, 0.3)"
        : "0px 0px 20px 5px rgba(0, 0, 255, .2)",
    borderRadius: "12px",
    overflow: "hidden",
    width: "100%",
  };

  return (
    <div style={demo}>
      <img src={image} alt="demo" width="100%" height="230px" />
      <h3>{name}</h3>
      <h4>Featured : {featured}</h4>
      <h4>Price : {price}</h4>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h4>Detail</h4>

        <div>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
