import React, { Component } from "react";
import DetailProduct from "./DetailProduct";
import ProductInfo from "./ProductInfo";

export default class IndexDetail extends Component {
  render() {
    return (
      <div className="container-fluid py-5">
        <DetailProduct />
        <ProductInfo />
      </div>
    );
  }
}
