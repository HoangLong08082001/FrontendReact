import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class SanPham extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img className="img-fluid w-100" src={this.props.hinh_sp} alt="" />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">{this.props.ten_sp}</h6>
            <div className="d-flex justify-content-center">
              <h6>{this.props.gia_sp} đ</h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <Link
              to={
                "/chitiet/" +
                this.props.ten_sp +
                "." +
                this.props.id_sp +
                ".html"
              }
              className="btn btn-sm text-dark p-0"
            >
              <i className="fas fa-eye text-primary mr-1" />
              Chi tiết
            </Link>
            <a href="/cart" className="btn btn-sm text-dark p-0">
              <i className="fas fa-shopping-cart text-primary mr-1" />
              Thêm giỏ hàng
            </a>
          </div>
        </div>
      </div>
    );
  }
}
