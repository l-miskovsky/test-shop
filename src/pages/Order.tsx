import React from "react";
import GenericLayout from "../layouts/Generic";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "../slices/ShoppingCart";
import OrderSummaryList from "../components/OrderSummaryList";
import Price from "../components/Price";
import { selectOrderSummary, selectOrderTotal } from "../slices/Order";
import Button from "../components/Button";

const Order = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderSummary = useSelector(selectOrderSummary);
  const orderTotal = useSelector(selectOrderTotal);

  const handleContinueShopping = () => {
    dispatch(deleteAll());
    navigate("/products");
  };
  return (
    <GenericLayout title="Thank you for your order">
      <OrderSummaryList items={orderSummary} />
      <p className="py-16">
        Please send us the payment of <Price value={orderTotal} bold large /> to
        our bitcoin address.
      </p>
      <Button onClick={handleContinueShopping}>Continue shopping</Button>
    </GenericLayout>
  );
};

export default Order;
