import Link from "next/link";

import { wrapper } from "@/modules/store";

import HomeHeader from "@/components/home/HomeHeader";

const posts = [
  { id: "1", title: "첫 번째 포스트", summary: "이것은 첫 번째 포스트입니다." },
  { id: "2", title: "두 번째 포스트", summary: "이것은 두 번째 포스트입니다." },
  // 실제 애플리케이션에서는 API 호출 등을 통해 데이터를 가져옵니다.
];

function Home() {
  return (
    <div>
      <HomeHeader />
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
          <Link href={`/post/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default wrapper.withRedux(Home);
