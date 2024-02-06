import React, { useState, useEffect } from "react";

interface ToggleSwitchProps {
  toggleAction: () => void;
  icons: {
    [key: string]: React.ElementType;
  };
  checked: boolean;
}

export default function ToggleSwitch({
  icons,
  checked,
  toggleAction,
}: ToggleSwitchProps) {
  const [mounted, setMounted] = useState<boolean>(false);

  const Icon = checked ? icons.checked : icons.unChecked;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    toggleAction();
  };

  return (
    <div className="flex items-center justify-center">
      <label
        htmlFor="toggle"
        className="relative w-24 h-12 rounded-full cursor-pointer bg-yellow-500 dark:bg-customGreay-800"
      >
        <input
          type="checkbox"
          id="toggle"
          className="sr-only  cursor-none"
          checked={checked}
          onChange={handleToggle}
        />
        {/* TODO : https://velog.io/@yijaee/serverside-html-matching */}
        <span className="absolute left-0 w-12 h-12 rounded-full shadow-lg transform transition-transform duration-300 flex items-center justify-center bg-slate-50 dark:translate-x-full dark:bg-customGreay-600">
          {mounted && (
            <Icon className="h-8 w-8 text-yellow-500 dark:text-slate-100" />
          )}
        </span>
      </label>
    </div>
  );
}
