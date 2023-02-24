import Head from "next/head";
import NavBar from "../components/navbar";
import Main from "../components/main";
import Footer from "@/components/footer";
import { ThemeContext } from "@/components/theme";
import { useContext } from "react";

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
          <Main>{props.children}</Main>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
