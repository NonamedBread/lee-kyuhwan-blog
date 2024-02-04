export default function PostsTaps() {
  return (
    <div className="flex justify-start items-center  space-x-4 px-5 bg-gray-200 dark:bg-customGreay-800">
      <div
        className="text-gray-500 bg-gray-300 w-20 p-0.5 relative group hover:text-gray-800 hover:bg-gray-500 hover:z-10"
        style={{
          clipPath: "polygon(17% 5%, 83% 5%, 97% 100%, 3% 100%)",
        }}
      >
        <div
          className="w-full h-full bg-white flex items-center justify-center"
          style={{
            clipPath: "polygon(17% 5%, 83% 5%, 97% 100%, 3% 100%)",
            zIndex: "-1",
          }}
        >
          All
        </div>
      </div>
      <div className="text-gray-500 bg-gray-300 px-2 py-1 relative group hover:text-gray-800 hover:bg-gray-500 hover:z-10">
        Tags
        {/* <div
          className="absolute top-0 left-0 w-full h-full bg-white"
          style={{
            clipPath: "polygon(17% 5%, 83% 5%, 97% 95%, 3% 95%)",
            zIndex: "-1",
          }}
        >
          tags2
        </div> */}
      </div>
    </div>
  );
}
