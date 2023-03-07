import React, { Component } from "react";
import LeftContent from "./Content/LeftContent";
import RightContent from "./Content/RightContent";

export default class Body extends Component {
  render() {
    return (
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          {/* Shop Sidebar Start */}
          <LeftContent />
          {/* Shop Sidebar End */}

          {/* Shop Product Start */}
          <RightContent />
          {/* Shop Product End */}
        </div>
      </div>
    );
  }
}
