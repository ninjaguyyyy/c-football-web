import { createSlice } from '@reduxjs/toolkit';

import { AppState } from 'stores/index';

const REDUCER_NAME = 'layout';

type LayoutType = {
  openSidebar: boolean;
};

const initialState: LayoutType = {
  openSidebar: true,
};

export const layoutSlice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.openSidebar = !state.openSidebar;
    },
  },
});

export const layoutReducer = layoutSlice.reducer;

export const { toggleSidebar } = layoutSlice.actions;

export const getLayoutState = () => (state: AppState) => state.layout;
