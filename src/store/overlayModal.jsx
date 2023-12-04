import { createSlice, current } from "@reduxjs/toolkit";

const overlayModalSlice = createSlice({
  name: "overlayModalSlice",
  initialState: {prod:{}, overlayStatus: false},
  reducers: {
    manageOverlay: (state, action) => {
      console.log(action.payload, "payload1");
      return state = {prod: action.payload.prod, overlayStatus:action.payload.overlayStatus};
    },
  },
});
export const {manageOverlay} = overlayModalSlice.actions;
export default overlayModalSlice.reducer;
