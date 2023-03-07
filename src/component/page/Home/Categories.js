import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Categories extends Component {
  render() {
    return (
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Thương hiệu bán chạy</span>
          </h2>
        </div>
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: "30px" }}
            >
              <p className="text-right">15 sản phẩm</p>
              <Link
                to="/thuonghieu"
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img className="img-fluid" src="img/apple3.jpeg" alt="" />
              </Link>
              <h5 className="font-weight-semi-bold m-0">APPLE</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: "30px" }}
            >
              <p className="text-right">15 sản phẩm</p>
              <Link
                to="/thuonghieu"
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img className="img-fluid" src="img/samsung.jpeg" alt="" />
              </Link>
              <h5 className="font-weight-semi-bold m-0">SAMSUNG</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="cat-item d-flex flex-column border mb-4"
              style={{ padding: "30px" }}
            >
              <p className="text-right">15 sản phẩm</p>
              <Link
                to="/thuonghieu"
                className="cat-img position-relative overflow-hidden mb-3"
              >
                <img className="img-fluid" src="img/oppo.png" alt="" />
              </Link>
              <h5 className="font-weight-semi-bold m-0">OPPO</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
