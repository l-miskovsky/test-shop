import React from "react";
import GenericLayout from "../layouts/Generic";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAll,
  selectCartItems,
  selectCartTotal,
} from "../slices/ShoppingCart";
import OrderSummaryList from "../components/OrderSummaryList";
import Price from "../components/Price";

const Order = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const orderTotal = useSelector(selectCartTotal);

  const handleContinueShopping = () => {
    dispatch(deleteAll());
    navigate("/");
  };
  return (
    <GenericLayout title="Thank you for your order">
      <OrderSummaryList cartItems={items} />
      <p>
        Please send us the payment of <Price value={orderTotal} bold /> to our
        bitcoin address
      </p>
      <button onClick={handleContinueShopping}>Continue shopping</button>
    </GenericLayout>
  );
};

export default Order;
