import React, { Component } from "react";

export default class DetailProduct extends Component {
  render() {
    return (
      <div className="row px-xl-5">
        <div className="col-lg-5 pb-5">
          <div
            id="product-carousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner border">
              <div className="carousel-item active">
                <img
                  className="w-100 h-100"
                  src="img/product-1.jpg"
                  alt="author"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="w-100 h-100"
                  src="img/product-2.jpg"
                  alt="author"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="w-100 h-100"
                  src="img/product-3.jpg"
                  alt="author"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="w-100 h-100"
                  src="img/product-4.jpg"
                  alt="author"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#product-carousel"
              data-slide="prev"
            >
              <i className="fa fa-2x fa-angle-left text-dark" />
            </a>
            <a
              className="carousel-control-next"
              href="#product-carousel"
              data-slide="next"
            >
              <i className="fa fa-2x fa-angle-right text-dark" />
            </a>
          </div>
        </div>
        <div className="col-lg-7 pb-5">
          <h3 className="font-weight-semi-bold">Colorful Stylish Shirt</h3>
          <div className="d-flex mb-3">
            <div className="text-primary mr-2">
              <small className="fas fa-star" />
              <small className="fas fa-star" />
              <small className="fas fa-star" />
              <small className="fas fa-star-half-alt" />
              <small className="far fa-star" />
            </div>
          </div>
          <h3 className="font-weight-semi-bold mb-4">$150.00</h3>
          <div className="d-flex mb-3">
            <p className="text-dark font-weight-medium mb-0 mr-3">Phien Ban:</p>
            <form>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-1"
                  name="size"
                />
                <label className="custom-control-label" htmlFor="size-1">
                  16GB
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-2"
                  name="size"
                />
                <label className="custom-control-label" htmlFor="size-2">
                  32GB
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-3"
                  name="size"
                />
                <label className="custom-control-label" htmlFor="size-3">
                  64GB
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-4"
                  name="size"
                />
                <label className="custom-control-label" htmlFor="size-4">
                  128GB
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-5"
                  name="size"
                />
                <label className="custom-control-label" htmlFor="size-5">
                  1TB
                </label>
              </div>
            </form>
          </div>
          <div className="d-flex mb-4">
            <p className="text-dark font-weight-medium mb-0 mr-3">Mau:</p>
            <form>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-1"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-1">
                  Đen
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-2"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-2">
                  Trắng
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-3"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-3">
                  Đỏ
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-4"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-4">
                  Xanh Dương
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-5"
                  name="color"
                />
                <label className="custom-control-label" htmlFor="color-5">
                  Xanh Lá
                </label>
              </div>
            </form>
          </div>
          <div className="d-flex align-items-center mb-4 pt-2">
            <div
              className="input-group quantity mr-3"
              style={{ width: "130px" }}
            >
              <div className="input-group-btn">
                <button className="btn btn-primary btn-minus">
                  <i className="fa fa-minus" />
                </button>
              </div>
              <input
                type="text"
                className="form-control bg-secondary text-center"
                defaultValue={1}
              />
              <div className="input-group-btn">
                <button className="btn btn-primary btn-plus">
                  <i className="fa fa-plus" />
                </button>
              </div>
            </div>
            <button className="btn btn-primary px-3">
              <i className="fa fa-shopping-cart mr-1" /> Thêm Vào Giỏ Hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
