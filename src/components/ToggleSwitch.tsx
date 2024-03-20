import React, { useState, useEffect } from 'react';

interface ToggleSwitchProps {
  id: string;
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
      labelColor = 'bg-yellow-500 dark:bg-customBlue-100';
      spanColor = 'bg-slate-50 dark:bg-customGreay-600';
      iconColor = 'text-yellow-500 dark:text-customBlue-200';
      break;
    case 'sideTap':
      labelColor = 'bg-customGreay-300 dark:bg-customGreay-100';
      spanColor = 'bg-customGreay-100 dark:bg-customGreay-600';
      iconColor = 'text-customGreay-700 dark:text-customGreay-100';
      break;
    default:
      labelColor = 'bg-yellow-500';
      iconColor = 'text-yellow-500';
      spanColor = 'bg-yellow-500';
  }
  return { labelColor, iconColor, spanColor };
};

export default function ToggleSwitch({ id, icons, checked, toggleAction, iconTheme }: ToggleSwitchProps) {
  const [mounted, setMounted] = useState<boolean>(false);

  const Icon = checked ? icons.checked : icons.unChecked;

  useEffect(() => {
    setMounted(true);
  }, []);

  const { labelColor, spanColor, iconColor } = getThemeColors(iconTheme);

  return (
    <div className="flex items-center justify-center">
      {/* 라벨 id가 같으면 해당 input과 label은 연결되므로 fixedHeader에서는 id를 다르게 설정해야함 */}
      <label htmlFor={id} className={`relative h-12 w-24 cursor-pointer rounded-full ${labelColor}`}>
        <input type="checkbox" id={id} className="cusror-pointer sr-only" checked={checked} onChange={toggleAction} />
        {/* TODO : https://velog.io/@yijaee/serverside-html-matching */}
        <span
          className={`absolute ${spanColor} left-0 flex h-12 w-12 transform items-center justify-center rounded-full  shadow-lg transition-transform duration-300 ${checked ? 'translate-x-full' : ''}`}
        >
          {mounted && <Icon className={`h-8 w-8 ${iconColor}`} />}
        </span>
      </label>
    </div>
  );
}
