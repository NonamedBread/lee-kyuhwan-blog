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
      spanColor = 'bg-customGreay-100 dark:bg-customGreay-600';
      iconColor = 'text-yellow-500 dark:text-customBlue-200';
      break;
    case 'sideTap':
      labelColor = 'bg-customRed-300 dark:bg-customRed-200';
      spanColor = 'bg-customGreay-100 dark:bg-customGreay-600';
      iconColor = 'text-customRed-400 dark:text-customRed-200';
      break;
    // case 'sideTap':
    //   labelColor = 'bg-red-500 dark:bg-yellow-500';
    //   spanColor = 'bg-red-200 dark:bg-yellow-200';
    //   iconColor = 'text-red-700 dark:text-yellow-700';
    //   break;
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
      <label htmlFor={id} className={`relative flex h-12 w-24 cursor-pointer items-center justify-center rounded-full ${labelColor}`}>
        <input type="checkbox" id={id} className="cusror-pointer sr-only" checked={checked} onChange={toggleAction} />
        {/* TODO : https://velog.io/@yijaee/serverside-html-matching */}
        <span
          className={`absolute ${spanColor} -left-2 flex h-14 w-14 transform items-center justify-center rounded-full shadow-lg transition-transform duration-300 ${checked ? 'translate-x-full' : 'translate-x-0'}`}
        >
          {mounted && <Icon className={`h-8 w-8 ${iconColor}`} />}
        </span>
      </label>
    </div>
  );
}
