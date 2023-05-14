import React, { useState } from "react";
import GenericLayout from "../layouts/Generic";
import products from "../data/products.json";
import ProductList from "../components/ProductList";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [cart, setCart] = useState<number[]>([]);
  const navigate = useNavigate();

  return (
    <GenericLayout title="Products">
      {cart.length > 0 && (
        <button onClick={() => navigate("/cart")}>Cart</button>
      )}
      <ProductList
        products={products}
        onAddToCart={(productID) =>
          setCart((products) => [...products, productID])
        }
      />
    </GenericLayout>
  );
};

export default Products;
