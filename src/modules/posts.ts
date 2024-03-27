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

type Series = {
  seriesName: string;
  posts: Post[];
}[];

export type Tag = {
  name: string;
  count: number;
};

export type PostsState = {
  series: Series;
  filteredSeries: Series;
};

const initialState: PostsState = {
  series: [],
  filteredSeries: [],
};

const data = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    setAllSeries(state, action: PayloadAction<Series>) {
      state.series = action.payload;
      state.filteredSeries = action.payload;
    },
    setFilteredSeries(state, action: PayloadAction<string>) {
      const selectedTag = action.payload.toLowerCase();
      state.filteredSeries = state.series
        .map((series) => {
          const filteredPosts = series.posts.filter((post) => {
            return post.tags.some((tag) => {
              return tag.name.toLowerCase().includes(selectedTag);
            });
          });
          return { ...series, posts: filteredPosts };
        })
        .filter((series) => series.posts.length > 0); // 게시물이 없는 시리즈는 제거
    },
  },
});

export const { setAllSeries, setFilteredSeries } = data.actions;

export default data;
