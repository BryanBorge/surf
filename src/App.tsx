import React from "react";
import { ImageDisplay } from "./Components/ImageDisplay";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/Theme";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Footer } from "./Components/Footer";
const App = () => {
  const customTheme = createTheme(theme);
  const themeWithResponsiveFontSizes = responsiveFontSizes(customTheme);

  return (
    <ThemeProvider theme={themeWithResponsiveFontSizes}>
      <CssBaseline />
      <Container maxWidth="lg">
        <ImageDisplay />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
