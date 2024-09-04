"use client";

import { useState, useEffect } from "react";
import { MdToggleOff, MdToggleOn } from "react-icons/md";
import { CiLight, CiDark } from "react-icons/ci";
export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    // <button
    //   onClick={toggleTheme}
    //   className="p-2 text-[#434A57] dark:text-white"
    // >
    //   {theme === "light" ? (
    //     <MdToggleOff className="w-16 h-16  text-[#448C74]" />
    //   ) : (
    //     <MdToggleOn className="w-16 h-16 text-[#448C74] " />
    //   )}
    // </button>
    <div className="flex items-center">
      <CiLight
        className="w-6 h-6 text-[#448C74] cursor-pointer"
        onClick={() => setTheme(("light"))}
      />
      <button
        onClick={toggleTheme}
        className="p-2 text-[#434A57] dark:text-white"
      >
        {theme === "light" ? (
          <MdToggleOff className="w-16 h-16 text-[#448C74]" />
        ) : (
          <MdToggleOn className="w-16 h-16 text-[#448C74]" />
        )}
      </button>
      <CiDark
        className="w-6 h-6 text-[#448C74] cursor-pointer"
        onClick={() => setTheme("dark")}
      />
    </div>
  );
}
