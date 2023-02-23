import { GiSeaDragon } from "react-icons/gi";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import ThemeToggleButton from "./theme-toggle-button";
import Hamburger from "./hamburger";

const NavBar = (props) => {
  return (
    <div className="bg-transparent sticky top-0 backdrop-blur transition-all duration-200">
      <nav className="flex text-lg items-center px-4 py-2 mx-auto md:max-w-3xl">
        <div className="flex items-center gap-1">
          <GiSeaDragon />
          <h1 className="font-bold">Peter Huynh</h1>
        </div>

        <div className="hidden items-center gap-6 mx-6 md:flex">
          <Link className="nav-item" href="/projects">
            Projects
          </Link>
          <Link className="nav-item" href="/">
            About
          </Link>
          <Link className="nav-item" href="/">
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

        <ThemeToggleButton {...props} />

        <Hamburger {...props} />
      </nav>
    </div>
  );
};

export default NavBar;