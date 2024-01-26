import React, { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

interface ToggleSwitchProps {
  theme: string;
  toggleTheme: () => void;
}

function ToggleSwitch({ theme, toggleTheme }: ToggleSwitchProps) {
  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <div className="flex items-center justify-center ">
      <label
        htmlFor="toggle"
        className={`relative w-24 h-12 rounded-full cursor-pointer ${
          theme === "dark" ? "bg-gray-800" : "bg-yellow-500"
        }`}
      >
        <input
          type="checkbox"
          id="toggle"
          className="sr-only"
          checked={theme === "light" ? false : true}
          onChange={handleToggle}
        />
        <span
          className={`absolute left-0 inline-block w-12 h-12  rounded-full shadow-lg transform transition-transform duration-300 flex items-center justify-center ${
            theme === "dark" ? "translate-x-full bg-gray-900" : "bg-slate-50"
          }`}
        >
          {theme === "dark" ? (
            <MoonIcon className="h-8 w-8 text-gray-500" />
          ) : (
            <SunIcon className="h-8 w-8 text-yellow-500" />
          )}
        </span>
      </label>
      <a
        href="https://dribbble.com/shots/14199649-Dark-Light-Mode-Toggle-Switch-Pattern-A11y"
        className="font-semibold text-gray-600 hover:text-green-600"
      ></a>
    </div>
  );
}

export default ToggleSwitch;
