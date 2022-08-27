import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const colors = {
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "base",
    color: "black", // <-- border radius is same for all variants and sizes
    backgroundColor: "white",
  },
  brand: {
    100: "#f8f5f2",
    200: "#0b9daa",
    300: "#f45d48",
  },
};
const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "1000px",
  xl: "1110px",
  "2xl": "1250px",
};
const theme = extendTheme({ colors, breakpoints });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
