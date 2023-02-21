import { GiSeaDragon } from "react-icons/gi";
import Link from "next/link";
import ThemeToggleButton from "./components/theme-toggle-button";

const NavBar = (props) => {
  return (
    <nav className="flex text-lg items-center gap-6">
      <div className="flex items-center gap-1">
        <GiSeaDragon />
        <h1 className="font-extrabold">Peter Huynh</h1>
      </div>
      <Link href="/">Projects</Link>
      <Link href="/">About</Link>

      <ThemeToggleButton {...props} />
    </nav>
  );
};

export default NavBar;
