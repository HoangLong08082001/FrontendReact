import React, { Component } from "react";

import { Link } from "react-router-dom";
export default class Menu extends Component {
  render() {
    return (
      <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a
              className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
              data-toggle="collapse"
              href="#navbar-vertical"
              style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}
            >
              <h6 className="m-0">Thương hiệu</h6>
              <i className="fa fa-angle-down text-dark" />
            </a>
            <nav
              className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
              id="navbar-vertical"
            >
              <div
                className="navbar-nav w-100 overflow-hidden"
                style={{ height: "410px" }}
              >
                <div className="nav-item dropdown">
                  <a href="#/" className="nav-link" data-toggle="dropdown">
                    APPLE <i className="fa fa-angle-down float-right mt-1" />
                  </a>
                  <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                    <Link to="/thuonghieu" className="dropdown-item">
                      Điện thoại
                    </Link>
                    <a href="/thuonghieu" className="dropdown-item">
                      Phụ kiện
                    </a>
                  </div>
                </div>
                <div
                  className="navbar-nav w-100 overflow-hidden"
                  style={{ height: "410px" }}
                >
                  <div className="nav-item dropdown">
                    <a href="#/" className="nav-link" data-toggle="dropdown">
                      SAMSUNG{" "}
                      <i className="fa fa-angle-down float-right mt-1" />
                    </a>
                    <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                      <Link to="/thuonghieu" className="dropdown-item">
                        Điện thoại
                      </Link>
                      <a href="/thuonghieu" className="dropdown-item">
                        Phụ kiện
                      </a>
                    </div>
                  </div>
                  <div
                    className="navbar-nav w-100 overflow-hidden"
                    style={{ height: "410px" }}
                  >
                    <div className="nav-item dropdown">
                      <a href="#/" className="nav-link" data-toggle="dropdown">
                        OPPO <i className="fa fa-angle-down float-right mt-1" />
                      </a>
                      <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                        <Link to="/thuonghieu" className="dropdown-item">
                          Điện thoại
                        </Link>
                        <a href="/thuonghieu" className="dropdown-item">
                          Phụ kiện
                        </a>
                      </div>
                    </div>
                    <div
                      className="navbar-nav w-100 overflow-hidden"
                      style={{ height: "410px" }}
                    >
                      <div className="nav-item dropdown">
                        <a
                          href="#/"
                          className="nav-link"
                          data-toggle="dropdown"
                        >
                          XIAOMI{" "}
                          <i className="fa fa-angle-down float-right mt-1" />
                        </a>
                        <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                          <Link to="/thuonghieu" className="dropdown-item">
                            Điện thoại
                          </Link>
                          <a href="/thuonghieu" className="dropdown-item">
                            Phụ kiện
                          </a>
                        </div>
                      </div>
                      <div
                        className="navbar-nav w-100 overflow-hidden"
                        style={{ height: "410px" }}
                      >
                        <div className="nav-item dropdown">
                          <a
                            href="#/"
                            className="nav-link"
                            data-toggle="dropdown"
                          >
                            LG{" "}
                            <i className="fa fa-angle-down float-right mt-1" />
                          </a>
                          <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                            <Link to="/thuonghieu" className="dropdown-item">
                              Điện thoại
                            </Link>
                            <a href="/thuonghieu" className="dropdown-item">
                              Phụ kiện
                            </a>
                          </div>
                        </div>
                        <div
                          className="navbar-nav w-100 overflow-hidden"
                          style={{ height: "410px" }}
                        >
                          <div className="nav-item dropdown">
                            <a
                              href="#/"
                              className="nav-link"
                              data-toggle="dropdown"
                            >
                              SONY{" "}
                              <i className="fa fa-angle-down float-right mt-1" />
                            </a>
                            <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                              <Link to="/thuonghieu" className="dropdown-item">
                                Điện thoại
                              </Link>
                              <a href="/thuonghieu" className="dropdown-item">
                                Phụ kiện
                              </a>
                            </div>
                          </div>
                          <div
                            className="navbar-nav w-100 overflow-hidden"
                            style={{ height: "410px" }}
                          >
                            <div className="nav-item dropdown">
                              <a
                                href="#/"
                                className="nav-link"
                                data-toggle="dropdown"
                              >
                                ASUSU{" "}
                                <i className="fa fa-angle-down float-right mt-1" />
                              </a>
                              <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                <Link
                                  to="/thuonghieu"
                                  className="dropdown-item"
                                >
                                  Điện thoại
                                </Link>
                                <a href="/thuonghieu" className="dropdown-item">
                                  Phụ kiện
                                </a>
                              </div>
                            </div>
                            <div
                              className="navbar-nav w-100 overflow-hidden"
                              style={{ height: "410px" }}
                            >
                              <div className="nav-item dropdown">
                                <a
                                  href="#/"
                                  className="nav-link"
                                  data-toggle="dropdown"
                                >
                                  LENEVO{" "}
                                  <i className="fa fa-angle-down float-right mt-1" />
                                </a>
                                <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                  <Link
                                    to="/thuonghieu"
                                    className="dropdown-item"
                                  >
                                    Điện thoại
                                  </Link>
                                  <a
                                    href="/thuonghieu"
                                    className="dropdown-item"
                                  >
                                    Phụ kiện
                                  </a>
                                </div>
                              </div>
                              <div
                                className="navbar-nav w-100 overflow-hidden"
                                style={{ height: "410px" }}
                              >
                                <div className="nav-item dropdown">
                                  <a
                                    href="#/"
                                    className="nav-link"
                                    data-toggle="dropdown"
                                  >
                                    BPHONE{" "}
                                    <i className="fa fa-angle-down float-right mt-1" />
                                  </a>
                                  <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                    <Link
                                      to="/thuonghieu"
                                      className="dropdown-item"
                                    >
                                      Điện thoại
                                    </Link>
                                    <a
                                      href="/thuonghieu"
                                      className="dropdown-item"
                                    >
                                      Phụ kiện
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="navbar-nav w-100 overflow-hidden"
                                  style={{ height: "410px" }}
                                >
                                  <Link
                                    to="/thuonghieu"
                                    className="dropdown-item"
                                  >
                                    Điện thoại SẢN PHẨM KHÁC{" "}
                                    <i className="fa  float-right mt-1" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <a href className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-weight-semi-bold">
                  <span className="text-primary font-weight-bold border px-3 mr-1">
                    STU
                  </span>
                  Mobile
                </h1>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              ></div>
            </nav>
            <div
              id="header-carousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div
                  className="carousel-item active"
                  style={{ height: "410px" }}
                >
                  <img className="img-fluid" src="img/km1.png" alt="author" />
                  <div className="p-3" style={{ maxWidth: "700px" }}>
                    <a href className="btn btn-light py-2 px-3">
                      Shop Now
                    </a>
                  </div>
                </div>
                <div className="carousel-item" style={{ height: "410px" }}>
                  <img className="img-fluid" src="img/km2.png" alt="author" />
                  <div className="p-3" style={{ maxWidth: "700px" }}>
                    <a href className="btn btn-light py-2 px-3">
                      Shop Now
                    </a>
                  </div>
                </div>
                <div className="carousel-item" style={{ height: "410px" }}>
                  <img className="img-fluid" src="img/km4.jpeg" alt="author" />

                  <div className="p-3" style={{ maxWidth: "700px" }}>
                    <a href className="btn btn-light py-2 px-3">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#header-carousel"
                data-slide="prev"
              >
                <div
                  className="btn btn-dark"
                  style={{ width: "45px", height: "45px" }}
                >
                  <span className="carousel-control-prev-icon mb-n2" />
                </div>
              </a>
              <a
                className="carousel-control-next"
                href="#header-carousel"
                data-slide="next"
              >
                <div
                  className="btn btn-dark"
                  style={{ width: "45px", height: "45px" }}
                >
                  <span className="carousel-control-next-icon mb-n2" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
