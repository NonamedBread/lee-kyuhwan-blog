import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type LayoutState = {
  sideTap: boolean;
  fixed: boolean;
};

const initialState: LayoutState = {
  sideTap: false,
  fixed: false,
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
      return state;
    },
    toggleFixedButton(state) {
      state.fixed = !state.fixed;
    },
  },
});

export const { toggleSideTap, setSideTap } = layout.actions;

export default layout;
