import Head from "next/head";
import NavBar from "../components/navbar";
import Main from "../components/main";
import Footer from "@/components/footer";
import { useState } from "react";

const Layout = (props) => {
  console.log(props.title);
  const [dark, setDark] = useState(true);

  const setTheme = () => {
    setDark((prevState) => !prevState);
  };

  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div
        className={
          (dark ? "dark bg-[#202020]" : "bg-[#F0E7DB]") +
          " antialiased transition-all duration-200"
        }
      >
        <div className="flex flex-col min-h-screen dark:text-gray-200">
          <NavBar dark={dark} setTheme={setTheme}></NavBar>
          <Main>{props.children}</Main>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
