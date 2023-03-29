import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface ArticlesNumberState {
  value: number;
}

const initialState: ArticlesNumberState = {
  value: 0,
};

export const articlesNumberSlice = createSlice({
  name: "articlesNumber",
  initialState,
  reducers: {
    getArticlesNumber: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { getArticlesNumber } = articlesNumberSlice.actions;

export const selectArticlesNumber = (state: RootState) =>
  state.articlesNumber.value;

export default articlesNumberSlice.reducer;
