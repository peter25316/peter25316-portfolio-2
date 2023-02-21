import NavBar from "./navbar";
import { useState } from "react";

const Layout = (props) => {
  const [dark, setDark] = useState(false);

  const setTheme = () => {
    setDark((prevState) => !prevState);
  };

  return (
    <div className={dark ? "dark " : ""}>
      <div className="bg-[#f7e7dd] min-h-screen p-6 transition-all duration-300 dark:bg-[#202020] dark:text-teal-500">
        <NavBar dark={dark} setTheme={setTheme}></NavBar>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
