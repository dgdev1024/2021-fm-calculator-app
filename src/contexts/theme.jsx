/**
 * @file contexts/theme.jsx
 * @brief React context controlling the application's theme.
 */

import React, { useContext } from "react";
import { useMediaQuery } from "../hooks/use-media-query";
import { useLocalStorage } from "../hooks/use-local-storage";
const Context = React.createContext();

const ThemeProvider = ({ children }) => {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useLocalStorage(
    "-fm-calculator-theme",
    prefersDark === true ? 1 : 2
  );

  const setDarkTheme = () => setTheme(1);
  const setLightTheme = () => setTheme(2);
  const setVioletTheme = () => setTheme(3);

  return (
    <Context.Provider
      value={{
        theme,
        setDarkTheme,
        setLightTheme,
        setVioletTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ThemeProvider;
export const useThemeContext = () => useContext(Context);
