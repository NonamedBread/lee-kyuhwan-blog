interface HomeTagsProps {
  allTags: {
    name: string;
    count: number;
  }[];

  handleTagClick: (tag: string) => void;
  size?: 'sm' | 'md' | 'lg';
  bgColor?: 'blue' | 'red' | 'green' | 'slate';
  textColor?: 'white' | 'black' | 'gray';
}

export default function HomeTags({ allTags, handleTagClick, size = 'md', bgColor = 'blue', textColor = 'white' }: HomeTagsProps) {
  const sizeClasses = {
    sm: 'px-2 py-1',
    md: 'px-4 py-2',
    lg: 'px-6 py-3',
  };

  const bgColorClasses = {
    blue: 'bg-blue-500 hover:bg-blue-600 dark:bg-customGreay-600 dark:hover:bg-customGreay-700',
    red: 'bg-red-500 hover:bg-red-600 dark:bg-customGreay-600 dark:hover:bg-customGreay-700',
    green: 'bg-green-500 hover:bg-green-600 dark:bg-customGreay-600 dark:hover:bg-customGreay-700',
    slate: 'bg-slate-200 hover:bg-slate-300 dark:bg-customGreay-500 dark:hover:bg-customGreay-600',
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
      {allTags.map((tag) => (
        <button
          key={tag.name}
          onClick={() => handleTagClick(tag.name)}
          className={`m-1 rounded-full transition-all duration-300 ease-in-out hover:cursor-pointer
          ${sizeClasses[size]} ${bgColorClasses[bgColor]} ${textColorClasses[textColor]} ${textSizeClasses[size]}`}
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
}
