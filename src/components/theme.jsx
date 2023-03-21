import React, { useState, createContext } from "react";
import { extendTheme } from "@chakra-ui/react";

const FontTheme = extendTheme({
  fonts: {
    body: `'M PLUS Rounded 1c'`,
    heading: `'M PLUS Rounded 1c'`,
  },
});

const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext, FontTheme };
