import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#1e90ff",
    },
  },
  typography: {
    fontFamily: "Nunito, sans-serif",
    // fontSize: 13,
    // fontWeightMedium: "bold",
    // fontWeightRegular: "lighter",
  },
  components: {
    MuiDrawer: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
    <ToastContainer />
  </React.StrictMode>
);
