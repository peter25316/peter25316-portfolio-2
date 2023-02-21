import { FaMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";

const ThemeToggleButton = (props) => {
  const { dark, setTheme } = props;
  const darkButtonStyle =
    "cursor-pointer w-10 h-10 text-3xl ml-auto p-3 rounded duration-300 ";

  return dark ? (
    <BsSun
      className={
        darkButtonStyle + "text-[#202020] bg-orange-400 hover:bg-orange-500"
      }
      onClick={setTheme}
    />
  ) : (
    <FaMoon
      className={
        darkButtonStyle + "text-[#F5F5F5] bg-purple-600 hover:bg-purple-500"
      }
      onClick={setTheme}
    />
  );
};

export default ThemeToggleButton;
