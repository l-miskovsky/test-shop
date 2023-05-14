import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CartItem } from "../types/CartItem";
import { OrderItem } from "../types/OrderItem";

interface OrderState {
  items: OrderItem[];
  total: number;
}

const initialState: OrderState = {
  items: [],
  total: 0,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<CartItem[]>) => {
      state.total = action.payload.reduce(
        (total, item) =>
          total + item.product.unit_price_incl_vat * item.quantity,
        0
      );
      state.items = action.payload.map(({ product, quantity }) => ({
        product: product.name,
        quantity: quantity,
      }));
    },
  },
});

export const selectOrderSummary = (state: RootState) => state.order.items;
export const selectOrderTotal = (state: RootState) => state.order.total;

export const { setOrder } = orderSlice.actions;

export default orderSlice.reducer;
