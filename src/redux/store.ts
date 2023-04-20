import { configureStore } from "@reduxjs/toolkit";
import articlesViewReducer from "./features/articlesViewSlice";
import articlesNumberReducer from "./features/articlesNumberSlice";

export const store = configureStore({
  reducer: {
    articlesView: articlesViewReducer,
    articlesNumber: articlesNumberReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
