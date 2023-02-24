import Fonts from "../components/fonts";
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import { ThemeContextProvider, FontTheme } from "@/components/theme";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={FontTheme}>
      <Fonts />
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </ChakraProvider>
  );
}
