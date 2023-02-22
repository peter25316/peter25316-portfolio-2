import NavBar from "./components/navbar";
import Main from "./components/main";
import { useState } from "react";

const Layout = (props) => {
  const [dark, setDark] = useState(true);

  const setTheme = () => {
    setDark((prevState) => !prevState);
  };

  return (
    <div
      className={
        (dark ? "dark bg-[#202020]" : "bg-[#F0E7DB]") +
        " antialiased transition-all duration-200"
      }
    >
      <div className="min-h-screen dark:text-[#F5F5F5]">
        <NavBar dark={dark} setTheme={setTheme}></NavBar>
        <Main>{props.children}</Main>
      </div>
    </div>
  );
};

export default Layout;
