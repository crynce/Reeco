// store.js
import { configureStore } from "@reduxjs/toolkit";
import statusUpdateReducer from "./statusUpdateSlice";
import overlayReducer from "./overlayModal";

const store = configureStore({
  reducer: {
    statusUpdate: statusUpdateReducer,
    overlay: overlayReducer,
    // Add your slice reducers here
    // Add other slices if available
  },
  // Add middleware or other store configurations if needed
});

export default store;
