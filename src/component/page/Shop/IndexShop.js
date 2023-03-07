import React, { Component } from "react";
import Body from "./Body";
import Header from "./Header";
import MenuShop from "./MenuShop";

export default class IndexShop extends Component {
  render() {
    return (
      <div>
        <MenuShop />
        <Header />
        <Body />
      </div>
    );
  }
}
