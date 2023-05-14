import React from "react";
import GenericLayout from "../layouts/Generic";
import products from "../data/products.json";
import ProductList from "../components/ProductList";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartSize } from "../slices/ShoppingCart";

const Products = () => {
  const navigate = useNavigate();
  const cartSize = useSelector(selectCartSize);

  return (
    <GenericLayout title="Products">
      {cartSize > 0 && <button onClick={() => navigate("/cart")}>Cart</button>}
      <ProductList products={products} />
    </GenericLayout>
  );
};

export default Products;
