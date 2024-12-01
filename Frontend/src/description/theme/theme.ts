import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    black: Palette["primary"];
    white: Palette["primary"];
  }
  interface PaletteOptions {
    black?: PaletteOptions["primary"];
    white?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#63a4ff",
      dark: "#004ba0",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff5722",
      light: "#ff8a50",
      dark: "#c63c00",
      contrastText: "#000",
    },
    black: {
      main: "#000000",
      contrastText: "#fff",
    },
    white: {
      main: "#ffffff",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: ["DM Sans, sans-serif"].join(","),
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    body1: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
  spacing: 8,
});

export default theme;
