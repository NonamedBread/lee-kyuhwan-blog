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

export default function HomeTags({ tags, handleTagClick, handleSideTap, size = 'md', bgColor = 'blue', textColor = 'white' }: HomeTagsProps) {
  const sizeClasses = {
    sm: 'px-2 py-1',
    md: 'px-4 py-2',
    lg: 'px-6 py-3',
  };

  const bgColorClasses = {
    blue: 'bg-customBlue-500 hover:bg-customBlue-600',
    red: 'bg-customRed-500 hover:bg-customRed-600',
    green: 'bg-customGreen-500 hover:bg-customGreen-600',
    slate: 'bg-slate-200 hover:bg-slate-300 ',
  };

  const textColorClasses = {
    white: 'text-white',
    black: 'text-black dark:text-slate-100 dark:hover:text-slate-200',
    gray: 'text-gray-500 ',
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
  };

  return (
    <div>
      {tags.map((tag) => (
        <button
          key={tag.name}
          onClick={() => {
            handleTagClick(tag.name);
            handleSideTap && handleSideTap(true);
          }}
          className={`m-1 rounded-full transition-all duration-300 ease-in-out hover:cursor-pointer
          dark:bg-customGreay-600 dark:hover:bg-customGreay-700
          ${sizeClasses[size]} ${bgColorClasses[bgColor]} ${textColorClasses[textColor]} ${textSizeClasses[size]}
          `}
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
}
