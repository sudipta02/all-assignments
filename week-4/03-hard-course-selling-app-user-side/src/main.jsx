import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from "react-toastify";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";

const customTheme = createTheme({
  palette: {
    background: {
      default: "#1eff8d",
    },
    primary: {
      main: "#1eff8d",
      dark: "#129955",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Nunito, sans-serif",
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
