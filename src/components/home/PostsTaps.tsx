const POST_TAPS = [
  { key: "A", name: "All", path: "/posts" },
  { key: "T", name: "Tags", path: "/tags" },
];

const Tap = ({
  item,
  index,
}: {
  item: {
    key: string;
    name: string;
    path: string;
  };
  index: number;
}) => {
  const { key, name, path } = item;

  return (
    <div
      key={key}
      className={`text-gray-500 bg-gray-300 w-20 p-0.5 relative group hover:text-gray-800 hover:bg-gray-500 hover:z-10 [clip-path:polygon(17%_5%,_83%_5%,_97%_100%,_3%_100%)] ${index > 0 ? "right-8" : ""}`}
    >
      <div
        className="w-full h-full bg-white flex items-center justify-center [clip-path:polygon(17%_5%,_83%_5%,_97%_100%,_3%_100%)]
            hover:bg-gray-500
          "
      >
        {name}
      </div>
    </div>
  );
};

export default function PostsTaps() {
  //TODO : clip path tailwindcss로 이동
  return (
    <div className="flex justify-start items-center  space-x-4 px-5 ">
      {POST_TAPS.map((item, index) => (
        <Tap item={item} index={index} />
      ))}
    </div>
  );
}
