import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Post = {
  slug: string;
  title: string;
  date: string;
  content: string;
  tags: {
    name: string;
    count: number;
  }[];
};

export type Tag = {
  name: string;
  count: number;
};

export type PostsState = {
  posts: Post[];
  tags: Tag[];
  filteredPosts: Post[];
};

const initialState: PostsState = {
  posts: [],
  tags: [],
  filteredPosts: [],
};

const data = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    setPosts(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload;
      state.filteredPosts = action.payload;
    },
    setTags(state, action: PayloadAction<Tag[]>) {
      state.tags = action.payload;
    },
    setSearchedTags(state, action: PayloadAction<string>) {
      const searchTerm = action.payload.toLowerCase();
      state.filteredPosts = state.posts.filter((post) => {
        if (!searchTerm) return true;
        return post.tags.some((tag) => {
          return tag.name.toLowerCase().includes(searchTerm);
        });
      });
    },
  },
});

export const { setPosts, setTags, setSearchedTags } = data.actions;

export default data;
