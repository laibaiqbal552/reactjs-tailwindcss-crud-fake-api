import { configureStore } from "@reduxjs/toolkit";

// Import your reducers here
import myReducer from "./myReducer";

const store = configureStore({
  reducer: {
    // Add your reducers here
    myReducer: myReducer,
  },
});

export default store;
