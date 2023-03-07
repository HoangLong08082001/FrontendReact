import React, { Component } from "react";
import ContractMail from "./ContractMail";
import HeaderContract from "./HeaderContract";

export default class IndexContract extends Component {
  render() {
    return (
      <div>
        <HeaderContract />
        <ContractMail />
      </div>
    );
  }
}
