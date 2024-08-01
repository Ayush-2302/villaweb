import { configureStore } from "@reduxjs/toolkit";
import ReviewReducer from "./review/reviewSlice";

export const store = configureStore({
  reducer: {
    review: ReviewReducer,
  },
});
