export default function HomeTags({ allTags, handleTagClick }: { allTags: string[]; handleTagClick: (tag: string) => void }) {
  return (
    <div>
      {allTags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className="m-1 rounded-full bg-blue-500 px-4 py-2 text-white hover:cursor-pointer hover:bg-blue-600 dark:bg-customGreay-600 dark:text-slate-100
          dark:hover:bg-customGreay-700
          "
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
