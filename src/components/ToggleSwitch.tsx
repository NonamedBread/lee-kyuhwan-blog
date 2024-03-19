import React, { useState, useEffect } from 'react';

interface ToggleSwitchProps {
  toggleAction: () => void;
  icons: {
    [key: string]: React.ElementType;
  };
  checked: boolean;
  iconTheme?: string;
}

const getThemeColors = (theme: string | undefined) => {
  let labelColor, spanColor, iconColor;
  switch (theme) {
    case 'darkMode':
      labelColor = 'bg-yellow-500 dark:bg-customGreay-800';
      spanColor = 'bg-slate-50 dark:bg-customGreay-600';
      iconColor = 'text-yellow-500 dark:text-slate-100';
      break;
    case 'sideTap':
      labelColor = 'bg-customGreay-200 dark:bg-customGreay-800';
      spanColor = 'bg-customGreay-100 dark:bg-customGreay-600';
      iconColor = 'text-customBlue-300 dark:text-slate-100';
      break;
    default:
      labelColor = 'bg-yellow-500';
      iconColor = 'text-yellow-500';
      spanColor = 'bg-yellow-500';
  }
  return { labelColor, iconColor, spanColor };
};

export default function ToggleSwitch({ icons, checked, toggleAction, iconTheme }: ToggleSwitchProps) {
  const [mounted, setMounted] = useState<boolean>(false);

  const Icon = checked ? icons.checked : icons.unChecked;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    toggleAction();
  };

  const { labelColor, spanColor, iconColor } = getThemeColors(iconTheme);

  return (
    <div className="flex items-center justify-center">
      <label htmlFor="toggle" className={`relative h-12 w-24 cursor-pointer rounded-full ${labelColor}`}>
        <input type="checkbox" id="toggle" className="sr-only  cursor-none" checked={checked} onChange={handleToggle} />
        {/* TODO : https://velog.io/@yijaee/serverside-html-matching */}
        <span
          className={`absolute ${spanColor} left-0 flex h-12 w-12 transform items-center justify-center rounded-full  shadow-lg transition-transform duration-300 dark:translate-x-full`}
        >
          {mounted && <Icon className={`h-8 w-8 ${iconColor}`} />}
        </span>
      </label>
    </div>
  );
}
