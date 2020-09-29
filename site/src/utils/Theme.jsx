import React from "react";
import { ThemeProvider } from "emotion-theming";

export const theme = {
  colors: {
    primary: "#FFED00",
    secondary: "#37C1FF",
    third: "#ED6A5A",
    fourth: "#0C6291",
    fifth: "#191923",
    white: "#ffffff",
    black: "rgba(0,0,0,0.87)",
    primaryBackground: "#ffffff",
    secondaryBackground: "#f8f8f8",
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

