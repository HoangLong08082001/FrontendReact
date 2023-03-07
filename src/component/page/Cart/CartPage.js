import React, { Component } from 'react'

export default class CartPage extends Component {
  render() {
    return (
        <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-bordered text-center mb-0">
              <thead className="bg-secondary text-dark">
                <tr>
                  <th>Sản phẩm</th>
                  <th>Giá tiền</th>
                  <th>Số tiền</th>
                  <th>Tổng</th>
                  <th>Xoá sản phẩm khỏi giỏ hàng</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                <tr>
                  <td className="align-middle">
                    <img src="img/product-1.jpg" alt="" style={{width: '50px'}} />
                    Colorful Stylish Shirt
                  </td>
                  <td className="align-middle">$150</td>
                  <td className="align-middle">
                    <div className="input-group quantity mx-auto" style={{width: '100px'}}>
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-minus">
                          <i className="fa fa-minus" />
                        </button>
                      </div>
                      <input type="text" className="form-control form-control-sm bg-secondary text-center" defaultValue={1} />
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-plus">
                          <i className="fa fa-plus" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">$150</td>
                  <td className="align-middle">
                    <button className="btn btn-sm btn-primary">
                      <i className="fa fa-times" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <img src="img/product-2.jpg" alt="" style={{width: '50px'}} />
                    Colorful Stylish Shirt
                  </td>
                  <td className="align-middle">$150</td>
                  <td className="align-middle">
                    <div className="input-group quantity mx-auto" style={{width: '100px'}}>
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-minus">
                          <i className="fa fa-minus" />
                        </button>
                      </div>
                      <input type="text" className="form-control form-control-sm bg-secondary text-center" defaultValue={1} />
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-plus">
                          <i className="fa fa-plus" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">$150</td>
                  <td className="align-middle">
                    <button className="btn btn-sm btn-primary">
                      <i className="fa fa-times" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <img src="img/product-3.jpg" alt="" style={{width: '50px'}} />
                    Colorful Stylish Shirt
                  </td>
                  <td className="align-middle">$150</td>
                  <td className="align-middle">
                    <div className="input-group quantity mx-auto" style={{width: '100px'}}>
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-minus">
                          <i className="fa fa-minus" />
                        </button>
                      </div>
                      <input type="text" className="form-control form-control-sm bg-secondary text-center" defaultValue={1} />
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-plus">
                          <i className="fa fa-plus" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">$150</td>
                  <td className="align-middle">
                    <button className="btn btn-sm btn-primary">
                      <i className="fa fa-times" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <img src="img/product-4.jpg" alt="" style={{width: '50px'}} />
                    Colorful Stylish Shirt
                  </td>
                  <td className="align-middle">$150</td>
                  <td className="align-middle">
                    <div className="input-group quantity mx-auto" style={{width: '100px'}}>
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-minus">
                          <i className="fa fa-minus" />
                        </button>
                      </div>
                      <input type="text" className="form-control form-control-sm bg-secondary text-center" defaultValue={1} />
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-plus">
                          <i className="fa fa-plus" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">$150</td>
                  <td className="align-middle">
                    <button className="btn btn-sm btn-primary">
                      <i className="fa fa-times" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <img src="img/product-5.jpg" alt="" style={{width: '50px'}} />
                    Colorful Stylish Shirt
                  </td>
                  <td className="align-middle">$150</td>
                  <td className="align-middle">
                    <div className="input-group quantity mx-auto" style={{width: '100px'}}>
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-minus">
                          <i className="fa fa-minus" />
                        </button>
                      </div>
                      <input type="text" className="form-control form-control-sm bg-secondary text-center" defaultValue={1} />
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-plus">
                          <i className="fa fa-plus" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">$150</td>
                  <td className="align-middle">
                    <button className="btn btn-sm btn-primary">
                      <i className="fa fa-times" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <div className="card border-secondary mb-5">
              <div className="card-header bg-secondary border-0">
                <h4 className="font-weight-semi-bold m-0">Hoá đơn</h4>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3 pt-1">
                  <h6 className="font-weight-medium">Tổng tiền</h6>
                  <h6 className="font-weight-medium">$150</h6>
                </div>
              </div>
              <div className="card-footer border-secondary bg-transparent">
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="font-weight-bold">Tổng</h5>
                  <h5 className="font-weight-bold">$160</h5>
                </div>
                <button className="btn btn-block btn-primary my-3 py-3">
                  Xử Lý Đơn Hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
