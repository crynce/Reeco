// store.js
import { configureStore } from "@reduxjs/toolkit";
import statusUpdateReducer from "./statusUpdateSlice";

const store = configureStore({
  reducer: {
    statusUpdate: statusUpdateReducer, // Add your slice reducers here
    // Add other slices if available
  },
  // Add middleware or other store configurations if needed
});

export default store;
