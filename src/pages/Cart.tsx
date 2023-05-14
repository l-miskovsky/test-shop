import React from "react";
import GenericLayout from "../layouts/Generic";
import { useNavigate } from "react-router-dom";
import CartItemList from "../components/CartItemList";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../slices/ShoppingCart";
import { setOrder } from "../slices/Order";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleFinishOrder = () => {
    console.log({ cartItems });
    dispatch(setOrder(cartItems));
    navigate("/order");
  };
  return (
    <GenericLayout title="Cart">
      <CartItemList cartItems={cartItems} />
      {/* //TODO: order sums&taxes */}
      <button onClick={() => navigate(-1)}>{"<- Back"}</button>
      <button onClick={handleFinishOrder} disabled={cartItems.length === 0}>
        Send order
      </button>
    </GenericLayout>
  );
};

export default Cart;
