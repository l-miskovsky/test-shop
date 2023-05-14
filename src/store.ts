import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slices/ShoppingCart";
import OrderReducer from "./slices/Order";

const store = configureStore({
  reducer: {
    cart: CartReducer,
    order: OrderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
