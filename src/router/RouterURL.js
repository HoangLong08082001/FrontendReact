import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexCart from "../component/page/Cart/IndexCart";
import IndexContract from "../component/page/Contract/IndexContract";
import IndexDetail from "../component/page/Detail/IndexDetail";
import IndexHome from "../component/page/Home/IndexHome";
import IndexShop from "../component/page/Shop/IndexShop";

function RouterURL() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<IndexHome />} />
        <Route path="/thuonghieu" element={<IndexShop />} />
        <Route path="/cart" element={<IndexCart />} />
        <Route path="/contract" element={<IndexContract />} />
        <Route path="/chitiet" element={<IndexDetail />} />
      </Routes>
    </div>
  );
}
export default RouterURL;
