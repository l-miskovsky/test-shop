import React from "react";
import GenericLayout from "../layouts/Generic";
import { useNavigate } from "react-router-dom";
import CartItemList from "../components/CartItemList";
import { useSelector } from "react-redux";
import { selectCartItems } from "../slices/ShoppingCart";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  const handleFinishOrder = () => {
    navigate("/order");
  };
  return (
    <GenericLayout title="Cart">
      <CartItemList cartItems={cartItems} />
      <button onClick={() => navigate(-1)}>{"<- Back"}</button>
      <button onClick={handleFinishOrder} disabled={cartItems.length === 0}>
        Send order
      </button>
    </GenericLayout>
  );
};

export default Cart;
