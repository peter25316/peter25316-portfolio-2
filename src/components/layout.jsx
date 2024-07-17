import Head from "next/head";
import NavBar from "../components/navbar";
import Main from "../components/main";
import Footer from "@/components/footer";
import { ThemeContext } from "@/components/theme";
import { useContext } from "react";
import { motion } from "framer-motion";
import { GridItemStyle } from "./grid-item";
import styled from "@emotion/styled";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const Layout = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div
        className={
          (theme ? "dark bg-[#202020]" : "bg-[#F0E7DB]") +
          " antialiased transition-all duration-200"
        }
      >
        <div className="flex flex-col min-h-screen dark:text-gray-200">
          <NavBar></NavBar>
          <motion.article
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: "easeInOut" }}
          >
            <Main>{props.children}</Main>
          </motion.article>
          <Footer></Footer>
        </div>
      </div>
      <GridItemStyle />
    </>
  );
};

export default Layout;
