/**
 * @file components/footer/index.jsx
 * @brief Displays the footer at the end of the page.
 */

import React from "react";
import "./index.scss";

export default () => (
  <footer className="footer">
    <div className="container footer__container">
      <p className="footer__attribution">
        Challenge by{" "}
        <a
          className="footer__link"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="footer__link"
          href="https://dgdev1024.com"
          target="_blank"
        >
          Dennis Griffin
        </a>
        .
      </p>
    </div>
  </footer>
);
