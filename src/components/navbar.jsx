import { GiSeaDragon } from "react-icons/gi";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import ThemeToggleButton from "./theme-toggle-button";
import Hamburger from "./hamburger";

const NavBar = () => {
  return (
    <div className="bg-transparent z-10 sticky top-0 backdrop-blur transition-all duration-200">
      <nav className="flex text-lg items-center px-4 py-2 mx-auto md:max-w-3xl">
        <div className="flex items-center gap-1">
          <GiSeaDragon />
          <Link className="font-bold" href="/">
            Peter Huynh
          </Link>
        </div>

        <div className="hidden items-center gap-6 mx-6 md:flex">
          {/* <Link className="nav-item" href="/">
            About
          </Link> */}
          <Link className="nav-item" href="/works">
            Projects
          </Link>
          <Link className="nav-item" href="/resume">
            Resume
          </Link>
          <a
            rel="noreferrer"
            target="_blank"
            className="flex items-center gap-1"
            href="https://github.com/peter25316/peter25316-portfolio-2"
          >
            <AiFillGithub />
            <span className="nav-item ">Source</span>
          </a>
        </div>

        <ThemeToggleButton />

        <Hamburger />
      </nav>
    </div>
  );
};

export default NavBar;
