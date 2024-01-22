import Link from "next/link";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@/modules/rootReducer";
import HomeHeader from "@/components/home/HomeHeader";

const store = configureStore({
  reducer: rootReducer,
});

const posts = [
  { id: "1", title: "첫 번째 포스트", summary: "이것은 첫 번째 포스트입니다." },
  { id: "2", title: "두 번째 포스트", summary: "이것은 두 번째 포스트입니다." },
  // 실제 애플리케이션에서는 API 호출 등을 통해 데이터를 가져옵니다.
];

function Home() {
  return (
    <div>
      <HomeHeader />
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

// Home 컴포넌트를 export하는 대신, Provider 컴포넌트를 사용하여 Home 컴포넌트에 store를 제공합니다.
export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
