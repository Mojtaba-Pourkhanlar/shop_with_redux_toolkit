import React, { useEffect, useState } from "react";
import { Grid,  } from "@mui/material";
import ProductItem from "./Product-item";

const Products = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://shop-redux-github-default-rtdb.firebaseio.com/products.json")
      .then((res) => res.json())
      .then((data) => {
        let products = [];

        for (const key in data) {
          products.push({
            id: key,
            ...data[key],
          });
        }
        setData(products);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <h1>Loading ...</h1>}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data
          ? data?.map((product) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                xl={3}
                key={product.id}
              >
                <ProductItem products={product} />
              </Grid>
            ))
          : null}
      </Grid>
    </>
  );
};

export default Products;
