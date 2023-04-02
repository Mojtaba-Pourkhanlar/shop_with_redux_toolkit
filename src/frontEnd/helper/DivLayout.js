import { Container } from "@mui/material";
import React from "react";

const DivLayout = ({ children }) => {
  return (
    <div style={{ marginTop: "90px" }}>
      <Container
        maxWidth="xl"
        disableGutters
        sx={{ px: { xs: "10px", sm: "15px", lg: "20px", xl: "0" } }}
      >
        {children}
      </Container>
    </div>
  );
};

export default DivLayout;
