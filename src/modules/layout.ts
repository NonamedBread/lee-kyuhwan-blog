import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type LayoutState = {
  sideTap: boolean;
};

const initialState: LayoutState = {
  sideTap: false,
};

const layout = createSlice({
  name: 'layout',
  initialState: initialState,
  reducers: {
    toggleSideTap(state) {
      state.sideTap = !state.sideTap;
    },
    setSideTap(state, action: PayloadAction<boolean>) {
      state.sideTap = action.payload;
    },
  },
});

export default layout;
