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

const data = createSlice({
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
      state.tags = state.tags.map((tag) => {
        console.log('tag:', tag);
        return {
          ...tag,
        };
      });
    },
  },
});

export const { setPosts, setTags, setSearchedTags } = data.actions;

export default data;
