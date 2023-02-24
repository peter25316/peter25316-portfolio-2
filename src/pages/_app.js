import Layout from "./layout";
import Fonts from "../components/fonts";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import theme from "../components/theme";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}
