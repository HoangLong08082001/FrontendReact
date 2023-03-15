import React, { Component } from "react";

export default class DetailList extends Component {
  render() {
    return (
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
                src={this.props.hinh_sp}
                alt="author"
              />
            </div>
          </div>
        </div>
        <h3 className="font-weight-semi-bold">{this.props.ten_sp}</h3>

        <h3 className="font-weight-semi-bold mb-4">{this.props.gia_sp}</h3>
      </div>
    );
  }
}
