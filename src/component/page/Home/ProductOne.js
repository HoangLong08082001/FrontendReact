import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class ProductOne extends Component {
  render() {
    return (
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Sản phẩm bán chạy</span>
          </h2>
        </div>
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  className="img-fluid w-100"
                  src="img/samsung_s23_ultra.jpeg"
                  alt=""
                />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">
                  Samsung Galaxy S23 Ultra 8/256GB
                </h6>
                <div className="d-flex justify-content-center">
                  <h6>26.990.000 đ</h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <Link to="/chitiet" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-eye text-primary mr-1" />
                  Chi tiết
                </Link>
                <Link to="/cart" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-shopping-cart text-primary mr-1" />
                  Thêm giỏ hàng
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  className="img-fluid w-100"
                  src="img/samsung_zflip.jpeg"
                  alt=""
                />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">
                  Samsung Galaxy Z Flip4 128GB
                </h6>
                <div className="d-flex justify-content-center">
                  <h6>26.990.000 đ</h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <Link to="/chitiet" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-eye text-primary mr-1" />
                  Chi tiết
                </Link>
                <Link to="/cart" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-shopping-cart text-primary mr-1" />
                  Thêm giỏ hàng
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  className="img-fluid w-100"
                  src="img/iphone11-promax.jpeg"
                  alt=""
                />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">iPhone 11 Pro Max 64GB </h6>
                <div className="d-flex justify-content-center">
                  <h6>26.990.000 đ</h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <Link to="/chitiet" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-eye text-primary mr-1" />
                  Chi tiết
                </Link>
                <Link to="/cart" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-shopping-cart text-primary mr-1" />
                  Thêm giỏ hàng
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  className="img-fluid w-100"
                  src="img/iphone13-promax.jpeg"
                  alt=""
                />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">iPhone 13 Pro Max 128GB</h6>
                <div className="d-flex justify-content-center">
                  <h6>26.990.000 đ</h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <Link to="/chitiet" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-eye text-primary mr-1" />
                  Chi tiết
                </Link>
                <Link to="/cart" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-shopping-cart text-primary mr-1" />
                  Thêm giỏ hàng
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  className="img-fluid w-100"
                  src="img/iphone14_promax.png"
                  alt=""
                />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">iPhone 14 Pro Max 128GB</h6>
                <div className="d-flex justify-content-center">
                  <h6>26.990.000 đ</h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <Link to="/chitiet" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-eye text-primary mr-1" />
                  Chi tiết
                </Link>
                <Link to="/cart" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-shopping-cart text-primary mr-1" />
                  Thêm giỏ hàng
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  className="img-fluid w-100"
                  src="img/oppo_reno8.jpeg"
                  alt=""
                />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">OPPO Reno 8 256GB 5G</h6>
                <div className="d-flex justify-content-center">
                  <h6>26.990.000 đ</h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <Link to="/chitiet" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-eye text-primary mr-1" />
                  Chi tiết
                </Link>
                <Link to="/cart" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-shopping-cart text-primary mr-1" />
                  Thêm giỏ hàng
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  className="img-fluid w-100"
                  src="img/oppo_reno8pro.jpeg"
                  alt=""
                />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">OPPO RENO8 T 5G 128GB</h6>
                <div className="d-flex justify-content-center">
                  <h6>26.990.000 đ</h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <Link to="/chitiet" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-eye text-primary mr-1" />
                  Chi tiết
                </Link>
                <Link to="/cart" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-shopping-cart text-primary mr-1" />
                  Thêm giỏ hàng
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  className="img-fluid w-100"
                  src="img/oppo_reno8T.jpeg"
                  alt=""
                />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">OPPO RENO8 T 5G 128GB</h6>
                <div className="d-flex justify-content-center">
                  <h6>26.990.000 đ</h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <Link to="/chitiet" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-eye text-primary mr-1" />
                  Chi tiết
                </Link>
                <Link to="/cart" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-shopping-cart text-primary mr-1" />
                  Thêm giỏ hàng
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
