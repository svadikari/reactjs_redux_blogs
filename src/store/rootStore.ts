import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../blogs/blogSlice";

export const store = configureStore({
  reducer: {
    // Add your reducers here
    blog: blogsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
