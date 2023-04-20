import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface ArticlesViewState {
  isGridView: boolean;
}

const initialState: ArticlesViewState = {
  isGridView: false,
};

export const articlesViewSlice = createSlice({
  name: "articlesView",
  initialState,
  reducers: {
    toggle: (state) => {
      return { isGridView: !state.isGridView };
    },
  },
});

export const { toggle } = articlesViewSlice.actions;

export const selectView = (state: RootState) => state.articlesView.isGridView;

export default articlesViewSlice.reducer;
