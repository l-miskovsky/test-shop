import React from "react";
import GenericLayout from "../layouts/Generic";
import { useNavigate } from "react-router-dom";
import CartItemTable from "../components/CartItemTable";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  deleteAll,
  selectCartSize,
} from "../slices/ShoppingCart";
import { setOrder } from "../slices/Order";
import Button from "../components/Button";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartSize = useSelector(selectCartSize);

  const handleFinishOrder = () => {
    console.log({ cartItems });
    dispatch(setOrder(cartItems));
    dispatch(deleteAll());
    navigate("/order");
  };
  return (
    <GenericLayout title="Cart">
      <CartItemTable cartItems={cartItems} />
      <div className="w-full pt-4">
        <div className="flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-indigo-500 hover:underline"
          >
            <KeyboardBackspaceOutlinedIcon /> Back
          </button>
          <Button
            onClick={handleFinishOrder}
            disabled={cartSize === 0 || isNaN(cartSize)}
          >
            Send order
          </Button>
        </div>
      </div>
    </GenericLayout>
  );
};

export default Cart;
