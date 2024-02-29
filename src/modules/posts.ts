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
  },
});

export const { setPosts, setTags } = posts.actions;

export default posts;
