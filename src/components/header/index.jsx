/**
 * @file components/header/index.jsx
 * @brief Displays the application name and theme switcher at the top.
 */

import React from "react";
import { useThemeContext } from "../../contexts/theme";
import "./index.scss";

export default () => {
  const { setLightTheme, setDarkTheme, setVioletTheme, theme } =
    useThemeContext();

  return (
    <header className="header">
      <div className="container header__container">
        <h1 className="header__title">Calc</h1>
        <div className="header__theme-control">
          <p className="header__theme-control-label">Theme</p>
          <div className="header__theme-control-button-label-strip">
            <p className="header__theme-control-button-label">1</p>
            <p className="header__theme-control-button-label">2</p>
            <p className="header__theme-control-button-label">3</p>
          </div>
          <div className={`header__theme-control-button-strip`}>
            <button
              tabIndex="1"
              className="header__theme-control-button"
              aria-label="Toggle Dark Theme"
              onClick={setDarkTheme}
            ></button>
            <button
              tabIndex="2"
              className="header__theme-control-button"
              aria-label="Toggle Light Theme"
              onClick={setLightTheme}
            ></button>
            <button
              tabIndex="3"
              className="header__theme-control-button"
              aria-label="Toggle Violet Theme"
              onClick={setVioletTheme}
            ></button>
          </div>
        </div>
      </div>
    </header>
  );
};
