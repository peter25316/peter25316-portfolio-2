import Fonts from "../components/fonts";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeContextProvider, FontTheme } from "@/components/theme";
import { AnimatePresence } from "framer-motion";
import "@/styles/globals.css";

export default function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={FontTheme}>
      <Fonts />
      <ThemeContextProvider>
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeContextProvider>
    </ChakraProvider>
  );
}
