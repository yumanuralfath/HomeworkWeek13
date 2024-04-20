import React from "react";
import { ColorModeScript } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// fonts
import "@fontsource/plus-jakarta-sans/latin.css";

import { theme } from "./lib/style/theme/main.js";

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);
root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config?.initialColorMode} />
    <App />
  </React.StrictMode>
);
