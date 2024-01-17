import Link from "next/link";

// 임시 블로그 데이터
const posts = [
  { id: "1", title: "첫 번째 포스트", summary: "이것은 첫 번째 포스트입니다." },
  { id: "2", title: "두 번째 포스트", summary: "이것은 두 번째 포스트입니다." },
  // 실제 애플리케이션에서는 API 호출 등을 통해 데이터를 가져옵니다.
];

export default function Home() {
  return (
    <div>
      <h1>블로그</h1>
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
