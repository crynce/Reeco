// counterSlice.js
import { createSlice, current } from "@reduxjs/toolkit";
const initialState = [
  {
    productName: "Product 1",
    brand: "Brand A",
    price: "$20",
    quantity: "2",
    total: "$40",
    status: "",
  },
  {
    productName: "Product 2",
    brand: "Brand B",
    price: "$30",
    quantity: "3",
    total: "$90",
    status: "",
  },
  {
    productName: "Product 3",
    brand: "Brand C",
    price: "$25",
    quantity: "1",
    total: "$25",
    status: "",
  },
  {
    productName: "Product 4",
    brand: "Brand D",
    price: "$15",
    quantity: "5",
    total: "$75",
    status: "",
  },
  {
    productName: "Product 5",
    brand: "Brand E",
    price: "$40",
    quantity: "2",
    total: "$80",
    status: "",
  },
  {
    productName: "Product 6",
    brand: "Brand F",
    price: "$22",
    quantity: "3",
    total: "$66",
    status: "",
  },
  {
    productName: "Product 7",
    brand: "Brand G",
    price: "$18",
    quantity: "4",
    total: "$72",
    status: "",
  },
  {
    productName: "Product 8",
    brand: "Brand H",
    price: "$35",
    quantity: "2",
    total: "$70",
    status: "",
  },
  {
    productName: "Product 9",
    brand: "Brand I",
    price: "$28",
    quantity: "3",
    total: "$84",
    status: "",
  },
  {
    productName: "Product 10",
    brand: "Brand J",
    price: "$50",
    quantity: "1",
    total: "$50",
    status: "",
  },
];
console.log(initialState);

const statusUpdateSlice = createSlice({
  name: "counter",
  initialState: initialState,

  reducers: {
    updateStatus: (state, action) => {
      console.log(current(state), "state");
      console.log(action.payload, "payload");
      const itemIndex = state.findIndex(
        (curr) => curr.productName === action.payload.productName
      );
      if (action.payload.status == "approved") {
        state[itemIndex].status = "approved";
      }
      if (action.payload.status == "missing") {
        state[itemIndex].status = "missing";
      }
      if (action.payload.status == "edit") {
        state[itemIndex].status = "edit";
      }
    },
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // Add other actions as needed
  },
});

export const { updateStatus } = statusUpdateSlice.actions;
export default statusUpdateSlice.reducer;
