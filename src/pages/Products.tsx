import React from "react";
import GenericLayout from "../layouts/Generic";
import products from "../data/products.json";
import ProductList from "../components/ProductList";

const Products = () => {
  return (
    <GenericLayout title="Products">
      <ProductList products={products} />
    </GenericLayout>
  );
};

export default Products;
