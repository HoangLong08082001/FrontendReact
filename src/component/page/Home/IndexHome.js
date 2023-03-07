import React, { Component } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import ProductOne from "./ProductOne";
import ProductTwo from "./ProductTwo";
import Service from "./Service";

export default class IndexHome extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Categories />
        <Service />
        <ProductOne />
        <ProductTwo />
      </div>
    );
  }
}
