import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
        <Route path="/" element={<Products />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
