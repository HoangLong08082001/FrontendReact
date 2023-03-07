import React, { Component } from "react";
import CartHeader from "./CartHeader";
import CartPage from "./CartPage";

export default class IndexCart extends Component {
  render() {
    return (
      <div>
        <CartHeader />
        <CartPage />
      </div>
    );
  }
}
