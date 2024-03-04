import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Post = {
  slug: string;
  title: string;
  date: string;
  content: string;
  tags: string[];
};

export type Tag = {
  name: string;
  count: number;
};

export type PostsState = {
  posts: Post[];
  tags: Tag[];
};

const initialState: PostsState = {
  posts: [],
  tags: [],
};

const posts = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    setPosts(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload;
    },
    setTags(state, action: PayloadAction<Tag[]>) {
      state.tags = action.payload;
    },
    setSearchedTags(state, action: PayloadAction<string>) {
      const searchTerm = action.payload;
      console.log('searchTerm:', searchTerm);
      state.tags = state.tags.map((tag) => {
        return {
          ...tag,
          count: state.posts.filter((post) => post.tags.includes(searchTerm)).length,
        };
      });
    },
  },
});

export const { setPosts, setTags, setSearchedTags } = posts.actions;

export default posts;
