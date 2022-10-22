import { Theme } from "@mui/material";

enum FontFamily {
  Raleway = "Raleway",
  Poppins = "Poppins",
  LibreBaskerville = "Libre Baskerville",
  Lora = "Lora",
  Lato = "Lato",
  CrimsonText = "Crimson Text",
}

const FontCombo1 = {
  headingFontFamily: FontFamily.Lato,
  bodyFontFamily: FontFamily.CrimsonText,
};

const FontCombo2 = {
  headingFontFamily: FontFamily.Raleway,
  bodyFontFamily: FontFamily.LibreBaskerville,
};

const FontCombo3 = {
  headingFontFamily: FontFamily.Lora,
  bodyFontFamily: FontFamily.Poppins,
};

const currentFontFamily = FontFamily.Lato;

const BackgroundColor = "#F2F7F9";

const PrimaryColor = "#0058b0";
const SecondaryColor = "#30d2e8";

export const theme: Theme = {
  typography: {
    h1: {
      fontFamily: currentFontFamily,
    },
    h2: {
      fontFamily: currentFontFamily,
    },
    h3: {
      fontFamily: currentFontFamily,
    },
    h4: {
      fontFamily: currentFontFamily,
    },
    h5: {
      fontFamily: currentFontFamily,
    },
    h6: {
      fontFamily: currentFontFamily,
    },
    subtitle1: {
      fontFamily: currentFontFamily,
    },
    subtitle2: {
      fontFamily: currentFontFamily,
    },
    body1: {
      fontFamily: currentFontFamily,
      fontSize: "16px",
    },
    body2: {
      fontFamily: currentFontFamily,
    },
    button: {
      fontFamily: currentFontFamily,
    },
    caption: {
      fontFamily: currentFontFamily,
    },
    overline: {
      fontFamily: currentFontFamily,
    },
  },
  palette: {
    primary: {
      main: PrimaryColor,
    },
    secondary: {
      main: SecondaryColor,
    },
    background: {
      default: BackgroundColor,
    },
  },
  components: {
    MuiImageListItemBar: {
      styleOverrides: {
        root: {
          background: "rgba(0, 0, 0, .25)",
        },
        title: {
          fontFamily: FontCombo1.headingFontFamily,
        },
        subtitle: {
          fontFamily: FontCombo1.bodyFontFamily,
        },
      },
    },
  },
};
