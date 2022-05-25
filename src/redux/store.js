import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import authReducer from "./auth-slice";
import cartReducer from "../components/Cart/cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});
