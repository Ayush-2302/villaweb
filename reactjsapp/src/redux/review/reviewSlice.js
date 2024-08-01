import { createSlice } from "@reduxjs/toolkit";
import { getReviewsOfVilla } from "../../utils/apiSerice";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    fetchAllReviews: async (state, action) => {
      const response = await getReviewsOfVilla(action.payload);
      state.value = await response.result;
      console.log(response,"redddddddddddd");
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchAllReviews } = counterSlice.actions;

export default counterSlice.reducer;
