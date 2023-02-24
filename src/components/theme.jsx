import React, { useState } from "react";
import { extendTheme } from "@chakra-ui/react";

const ThemeContext = React.createContext();

const FontTheme = extendTheme({
  fonts: {
    body: `'M PLUS Rounded 1c'`,
    heading: `'M PLUS Rounded 1c'`,
  },
});

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
