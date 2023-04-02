import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "./Container";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Container />
    </BrowserRouter>
  </StrictMode>
);
