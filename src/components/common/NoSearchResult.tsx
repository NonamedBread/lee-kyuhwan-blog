export default function NoSearchResult() {
  return (
    <div className="flex h-full w-full items-center text-2xl font-bold " data-testid="no-search-result">
      <div className="m-20 flex flex-col items-center">
        <span className="text-2xl font-bold">
          아쉽게도 검색 결과가 없네요.
          <span role="img" aria-label="Sad face" className="text-4xl">
            😅
          </span>
        </span>
      </div>
    </div>
  );
}
