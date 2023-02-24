import Fonts from "../components/fonts";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeContextProvider, FontTheme } from "@/components/theme";
import "@/styles/globals.css";

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
