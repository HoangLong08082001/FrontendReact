import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexCart from "../component/page/Cart/IndexCart";
import IndexContract from "../component/page/Contract/IndexContract";
import IndexDetail from "../component/page/Detail/IndexDetail";
import IndexHome from "../component/page/Home/IndexHome";
import IndexShop from "../component/page/Shop/IndexShop";
import NoMatch from "./NoMatch";

function RouterURL() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<IndexHome />} />
        <Route path="/thuonghieu" element={<IndexShop />} />
        <Route path="/cart" element={<IndexCart />} />
        <Route path="/contract" element={<IndexContract />} />
        <Route path="/chitiet/:id_sp.html" element={<IndexDetail />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}
export default RouterURL;
