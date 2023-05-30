import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Initial state properties here
};

const mySlice = createSlice({
  name: "myReducer",
  initialState,
  reducers: {
    // Define your actions here
    myAction: (state, action) => {
      // Update state based on the action
    },
  },
});

export const { myAction } = mySlice.actions;

export default mySlice.reducer;
