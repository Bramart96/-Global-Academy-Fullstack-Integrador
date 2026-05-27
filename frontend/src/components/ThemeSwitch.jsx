import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeSwitch = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button className="flex flex-col text-center]" onClick={toggleDarkMode}>
      <div className="text-2xl cursor-pointer">
        {!darkMode ? '🌞' : '🌙'}
      </div>
      <div className="text-sm font-semibold cursor-pointer">
        {!darkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </div>
    </button>
  );
};

export default ThemeSwitch;