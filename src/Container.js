import { CssBaseline, ThemeProvider } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./frontEnd/components/Layout";
import { Cart, Products } from "./frontEnd/pages";
import { ColorModeContext, useMode } from "./frontEnd/theme";

const Container = () => {
  const [theme, coloMode] = useMode();

  return (
    <ColorModeContext.Provider value={coloMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Navigate to="/products" />} />
            <Route path="*" element={<Navigate to="/products" />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Container;
