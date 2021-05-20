/**
 * @file index.jsx
 * @brief The entry point for our application.
 */

import React, { StrictMode } from "react";
import { render } from "react-dom";
import "./styles/_typography.scss";
import App from "./components/app";

const mountNode = document.querySelector(".app-root");
render(
  <StrictMode>
    <App />
  </StrictMode>,
  mountNode
);
