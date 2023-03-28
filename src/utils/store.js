import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../components/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
export default store;
