import React from "react";
import GenericLayout from "../layouts/Generic";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <GenericLayout title="Cart">
      <button onClick={() => navigate(-1)}>{"<- Back"}</button>
      <button onClick={() => navigate("/order")}>Send order</button>
    </GenericLayout>
  );
};

export default Cart;
