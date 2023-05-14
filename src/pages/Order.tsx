import React from "react";
import GenericLayout from "../layouts/Generic";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();

  return (
    <GenericLayout title="Thank you for your order">
      <button onClick={() => navigate("/")}>Continue shopping</button>
    </GenericLayout>
  );
};

export default Order;
