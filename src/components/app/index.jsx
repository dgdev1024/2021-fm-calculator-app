/**
 * @file components/app/index.jsx
 * @brief The application's top-level component.
 */

import React from "react";
import ThemeProvider, { useThemeContext } from "../../contexts/theme";
import CalculatorProvider from "../../contexts/calculator";
import Header from "../header";
import Display from "../display";
import Controls from "../controls";
import Footer from "../footer";

const InnerApp = () => {
  const { theme } = useThemeContext();

  return (
    <main className={`main main--theme-${theme}`}>
      <Header />
      <Display />
      <Controls />
      <Footer />
    </main>
  );
};

export default () => (
  <ThemeProvider>
    <CalculatorProvider>
      <InnerApp />
    </CalculatorProvider>
  </ThemeProvider>
);
