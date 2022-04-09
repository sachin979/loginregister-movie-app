import React from "react";
import React from "react";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ccc9dc",
    },
    secondary: {
      main: "#324A5F",
    },
  },
});

function Theme(props) {
  return <div></div>;
}

export default Theme;
