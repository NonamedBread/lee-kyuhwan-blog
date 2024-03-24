import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Post = {
  slug: string;
  title: string;
  date: string;
  content: string;
  tags: {
    name: string;
    count: number;
  }[];
};

type Series = Post[];

export type Tag = {
  name: string;
  count: number;
};

export type PostsState = {
  series: Series;
  // posts: {
  //   allPosts: Post[];
  //   filteredPosts: Post[];
  // };
  // tags: {
  //   allTags: Tag[];
  //   topTags: Tag[];
  // };
};

const initialState: PostsState = {
  series: [],
  // posts: {
  //   allPosts: [],
  //   filteredPosts: [],
  // },
  // tags: {
  //   allTags: [],
  //   topTags: [],
  // },
};

const data = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    setAllSeries(state, action: PayloadAction<Series>) {
      state.series = action.payload;
    },

    // setAllPosts(state, action: PayloadAction<Post[]>) {
    //   state.posts.allPosts = action.payload;
    //   state.posts.filteredPosts = action.payload;
    // },
    // setAllTags(state, action: PayloadAction<Tag[]>) {
    //   state.tags.allTags = action.payload;
    //   state.tags.topTags = action.payload.slice(0, 10);
    // },
    // setSearchResults(state, action: PayloadAction<string>) {
    //   const searchTerm = action.payload.toLowerCase();
    //   state.posts.filteredPosts = state.posts.allPosts.filter((post) => {
    //     if (!searchTerm) return true;
    //     return post.tags.some((tag) => {
    //       return tag.name.toLowerCase().includes(searchTerm);
    //     });
    //   });

    //   state.tags.topTags = state.tags.allTags
    //     .filter((tag) => {
    //       return tag.name.toLowerCase().includes(searchTerm);
    //     })
    //     .slice(0, 10);
    // },
  },
});

export const { setAllSeries } = data.actions;

export default data;
