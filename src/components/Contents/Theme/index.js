import * as React from "react";
import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: red["700"],
      hover: red["300"],
    },
  },
});

function ThemeProvider(props) {
  return <MUIThemeProvider theme={theme}>{props.children}</MUIThemeProvider>;
}

export default ThemeProvider;
