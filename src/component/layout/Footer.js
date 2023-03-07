import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
          <div className="row px-xl-5 pt-5">
            <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
              <a href className="text-decoration-none">
                <h1 className="mb-4 display-5 font-weight-semi-bold">
                  <span className="text-primary font-weight-bold border border-white px-3 mr-1">
                    STU
                  </span>
                  Mobile
                </h1>
              </a>
              <p>Các chi nhánh ở TP.HCM:</p>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt text-primary mr-3" />
                180 Đ. Cao Lỗ, Phường 4, Quận 8, Thành phố Hồ Chí Minh
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope text-primary mr-3" />
                vpk.cntt@stu.edu.vn
              </p>
              <p className="mb-0">
                <i className="fa fa-phone-alt text-primary mr-3" />
                (028) 38 505 520
              </p>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-md-4 mb-5">
                  <div className="d-flex flex-column justify-content-start">
                    <a className="text-dark mb-2" href="index.html">
                      <i className="fa fa-angle-right mr-2" />
                      Trang chủ
                    </a>
                    <a className="text-dark mb-2" href="shop.html">
                      <i className="fa fa-angle-right mr-2" />
                      Giỏ hàng
                    </a>
                    <a className="text-dark mb-2" href="detail.html">
                      <i className="fa fa-angle-right mr-2" />
                      Checkout
                    </a>
                    <a className="text-dark mb-2" href="cart.html">
                      <i className="fa fa-angle-right mr-2" />
                      Liên hệ
                    </a>
                  </div>
                </div>
                {/* <div class="col-md-4 mb-5">
              <h5 class="font-weight-bold text-dark mb-4">Quick Links</h5>
              <div class="d-flex flex-column justify-content-start">
                <a class="text-dark mb-2" href="index.html"
                  ><i class="fa fa-angle-right mr-2"></i>Home</a
                >
                <a class="text-dark mb-2" href="shop.html"
                  ><i class="fa fa-angle-right mr-2"></i>Our Shop</a
                >
                <a class="text-dark mb-2" href="detail.html"
                  ><i class="fa fa-angle-right mr-2"></i>Shop Detail</a
                >
                <a class="text-dark mb-2" href="cart.html"
                  ><i class="fa fa-angle-right mr-2"></i>Shopping Cart</a
                >
                <a class="text-dark mb-2" href="checkout.html"
                  ><i class="fa fa-angle-right mr-2"></i>Checkout</a
                >
                <a class="text-dark" href="contact.html"
                  ><i class="fa fa-angle-right mr-2"></i>Contact Us</a
                >
              </div>
            </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
        {/* Back to Top */}
        <a href="#/" className="btn btn-primary back-to-top">
          <i className="fa fa-angle-double-up" />
        </a>
      </div>
    );
  }
}
