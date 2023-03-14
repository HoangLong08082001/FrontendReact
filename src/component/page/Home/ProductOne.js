import React, { Component } from "react";
import { Link } from "react-router-dom";
import SanPham from "./product-list/SanPham";
import axios from "axios";
const getDataProduct = () =>
  axios.get("http://localhost:5000/test").then((res) => res.data);
export default class ProductOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentWillMount = () => {
    if (this.state.data === null) {
      getDataProduct().then((res) => {
        this.setState({
          data: res,
        });
      });
    }
  };

  printData = () => {
    if (this.state.data !== null) {
      return this.state.data.map((value, key) => {
        return (
          <SanPham
            key={key}
            hinh_sp={value.hinh_sp}
            ten_sp={value.ten_sp}
            gia_sp={value.gia_sp}
          />
        );
      });
    }
  };
  render() {
    console.log(this.state.data);
    return (
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Sản phẩm bán chạy</span>
          </h2>
        </div>
        <div className="row px-xl-5 pb-3">
          {this.printData()}
          {/* <SanPham />
          <SanPham />
          <SanPham />
          <SanPham /> */}
        </div>
      </div>
    );
  }
}
