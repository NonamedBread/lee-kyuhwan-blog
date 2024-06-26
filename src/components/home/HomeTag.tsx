import { Tooltip } from '@mui/material';

interface HomeTagsProps {
  tags: {
    name: string;
    count: number;
  }[];
  handleSideTap?: (value: boolean) => void;
  handleTagClick: (tag: string) => void;
  size?: 'sm' | 'md' | 'lg';
  bgColor?: 'blue' | 'red' | 'green' | 'slate';
  textColor?: 'white' | 'black' | 'gray';
}

const SIZE_CLASSES = {
  sm: 'px-3 py-2',
  md: 'px-4 py-2',
  lg: 'px-6 py-3',
};

const BG_COLOR_CLASSES = {
  blue: 'bg-customBlue-500 hover:bg-customBlue-600',
  red: 'bg-customRed-500 hover:bg-customRed-600',
  green: 'bg-customGreen-500 hover:bg-customGreen-600',
  slate: 'bg-slate-200 hover:bg-slate-300 ',
};

const TEXT_COLOR_CLASSES = {
  white: 'text-white',
  black: 'text-black dark:text-slate-100 dark:hover:text-slate-200',
  gray: 'text-gray-500 ',
};

const TEXT_SIZE_CLASSES = {
  sm: 'text-[13px]',
  md: 'text-[15px]',
  lg: 'text-lg',
};

export default function HomeTag({
  tags,
  handleTagClick,
  handleSideTap = () => {},
  size = 'md',
  bgColor = 'blue',
  textColor = 'white',
}: HomeTagsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {tags.map((tag) => (
        <button
          key={tag.name}
          onClick={() => {
            handleTagClick(tag.name);
            handleSideTap(true);
          }}
          className={[
            'w-max',
            'rounded-full',
            'transition-all',
            'duration-300',
            'ease-in-out',
            'hover:cursor-pointer',
            'dark:bg-customGreay-600',
            'dark:hover:bg-customGreay-700',
            SIZE_CLASSES[size],
            BG_COLOR_CLASSES[bgColor],
            TEXT_COLOR_CLASSES[textColor],
            TEXT_SIZE_CLASSES[size],
          ].join(' ')}
        >
          <Tooltip title={tag.name} arrow placement="top">
            <span>{tag.name.length > 12 ? `${tag.name.substring(0, 12)}...` : tag.name}</span>
          </Tooltip>
        </button>
      ))}
    </div>
  );
}
