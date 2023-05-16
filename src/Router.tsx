import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Products from "./pages/Products";
import Page404 from "./pages/Page404";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/products" element={<Products />} />
        {/* Since we don't really have a home page, products used instead */}
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
