import React from "react";

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
  const handleToggle = () => {
    toggleAction();
  };

  const Icon = checked ? icons.checked : icons.unChecked;

  return (
    <div className="flex items-center justify-center">
      <label
        htmlFor="toggle"
        className="relative w-24 h-12 rounded-full cursor-pointer bg-yellow-500 dark:bg-gray-800"
      >
        <input
          type="checkbox"
          id="toggle"
          className="sr-only  cursor-none"
          checked={checked}
          onChange={handleToggle}
        />
        <span className="absolute left-0 inline-block w-12 h-12 rounded-full shadow-lg transform transition-transform duration-300 flex items-center justify-center bg-slate-50 dark:translate-x-full dark:bg-gray-900">
          <Icon className="h-8 w-8 text-yellow-500 dark:text-slate-100" />
        </span>
      </label>
    </div>
  );
}
