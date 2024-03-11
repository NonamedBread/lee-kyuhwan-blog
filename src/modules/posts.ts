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
  posts: {
    allPosts: Post[];
    filteredPosts: Post[];
  };
  tags: {
    allTags: Tag[];
    topTags: Tag[];
  };
};

const initialState: PostsState = {
  posts: {
    allPosts: [],
    filteredPosts: [],
  },
  tags: {
    allTags: [],
    topTags: [],
  },
};

const data = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    setPosts(state, action: PayloadAction<Post[]>) {
      state.posts.allPosts = action.payload;
      state.posts.filteredPosts = action.payload;
    },
    setTags(state, action: PayloadAction<Tag[]>) {
      state.tags.allTags = action.payload;
      state.tags.topTags = action.payload.slice(0, 10);
    },
    setSearchedTags(state, action: PayloadAction<string>) {
      const searchTerm = action.payload.toLowerCase();
      state.posts.filteredPosts = state.posts.allPosts.filter((post) => {
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
