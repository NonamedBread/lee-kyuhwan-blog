export default function HomeTags({ allTags }: { allTags: string[] }) {
  const handleTagClick = (tag: string) => {
    // 여기에 태그를 검색하는 로직을 추가하세요.
    console.log(`Searching for: ${tag}`);
  };

  return (
    <div>
      {allTags.map((tag) => (
        <button key={tag} onClick={() => handleTagClick(tag)} className="m-1 rounded-full bg-blue-500 px-4 py-2 text-white">
          {tag}
        </button>
      ))}
    </div>
  );
}
