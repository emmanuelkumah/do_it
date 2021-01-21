import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import reportWebVitals from "./reportWebVitals";

//customizing the mui theme
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "Roboto", "Hachi Maru Pop"].join(","),
  },
  palette: {
    primary: {
      main: "#F8333C",
      secondary: "#ECC8AE",
    },
    secondary: {
      main: "#DDFFD9",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
