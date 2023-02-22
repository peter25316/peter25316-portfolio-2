import { GiSeaDragon } from "react-icons/gi";
import Link from "next/link";
import ThemeToggleButton from "./theme-toggle-button";
import Hamburger from "./hamburger";

const NavBar = (props) => {
  return (
    <div className="bg-[#F4EDE4] dark:bg-[#222222] transition-all duration-200">
      <nav className="flex text-lg items-center px-4 py-2 mx-auto md:max-w-3xl">
        <div className="flex items-center gap-1">
          <GiSeaDragon />
          <h1 className="font-extrabold">Peter Huynh</h1>
        </div>

        <div className="hidden items-center gap-6 mx-6 md:flex">
          <Link className="nav-item" href="/projects">
            Projects
          </Link>
          <Link className="nav-item" href="/">
            About
          </Link>
        </div>

        <ThemeToggleButton {...props} />

        <Hamburger {...props} />
      </nav>
    </div>
  );
};

export default NavBar;
