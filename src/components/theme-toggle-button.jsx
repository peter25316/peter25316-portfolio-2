import { FaMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeContext } from "@/components/theme";
import { useContext } from "react";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const darkButtonStyle =
    "cursor-pointer w-10 h-10 text-3xl mx-2 p-3 rounded-md duration-200 ";

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={theme ? "sun" : "moon"}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        exit={{ y: -10, opacity: 0 }}
        className="ml-auto"
      >
        {theme ? (
          <BsSun
            className={
              darkButtonStyle +
              "text-[#202020] bg-orange-400 hover:bg-orange-500"
            }
            onClick={toggleTheme}
          />
        ) : (
          <FaMoon
            className={
              darkButtonStyle +
              "text-[#F5F5F5] bg-purple-600 hover:bg-purple-500"
            }
            onClick={toggleTheme}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
