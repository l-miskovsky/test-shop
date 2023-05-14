import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from "../types/Product";
import { CartItem } from "../types/CartItem";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.productId
      );
      if (existingItem) {
        existingItem.quantity = action.payload.quantity;
      } else {
        console.error("Product not found in cart");
      }
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );
    },
    deleteAll: (state) => {
      state.items = [];
    },
  },
});

export const selectCartSize = (state: RootState) =>
  state.cart.items.reduce(
    (total: number, item: CartItem) => total + item.quantity,
    0
  );
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce(
    (total: number, item: CartItem) =>
      total + item.product.unit_price_incl_vat * item.quantity,
    0
  );

export const { addToCart, updateQuantity, deleteFromCart, deleteAll } =
  cartSlice.actions;

export default cartSlice.reducer;
