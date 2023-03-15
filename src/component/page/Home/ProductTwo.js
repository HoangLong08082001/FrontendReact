import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SanPhamGiamGia from "./Product-giamgia/SanPhamGiamGia";
const getDataProductSale = () =>
  axios.get("http://localhost:5000/test2").then((res) => res.data);
export default class ProductTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentWillMount = () => {
    if (this.state.data === null) {
      getDataProductSale().then((res) => {
        this.setState({
          data: res,
        });
      });
    }
  };

  printDataProductSale = () => {
    if (this.state.data !== null) {
      return this.state.data.map((value, key) => {
        return (
          <SanPhamGiamGia
            key={key}
            id_sp={value.id_sp}
            hinh_sp={value.hinh_sp}
            ten_sp={value.ten_sp}
            gia_cu={value.gia_cu}
            gia_moi={value.gia_moi}
          />
        );
      });
    }
  };
  render() {
    return (
      <div>
        <div className="container-fluid pt-5">
          <div className="text-center mb-4">
            <h2 className="section-title px-5">
              <span className="px-2">Sản phẩm đang giảm giá mạnh</span>
            </h2>
          </div>
        </div>
        <div className="row px-xl-5 pb-3">{this.printDataProductSale()}</div>
      </div>
    );
  }
}
