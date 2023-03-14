import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a href className="text-decoration-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  STU
                </span>
                Mobile
              </h1>
            </a>
          </div>
          <div className="col-lg-6 col-6 text-left">
            <form action>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập tên sản phẩm"
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search" />
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-3 col-6 text-right">
            <Link to={"/cart"} className="btn border">
              CART (0)
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
