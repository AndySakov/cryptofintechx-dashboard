import React, { Component } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

export class Invoice extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex az-content-app p-0">
          <div className="az-content-left az-content-left-invoice">
            <div className="az-content-breadcrumb lh-1 mg-b-10">
              <span>Apps &amp; Pages</span>
              <span>Invoice</span>
            </div>
            <h2 className="az-content-title tx-24 mg-b-20">My Invoices</h2>

            <PerfectScrollbar id="azInvoiceList" className="az-invoice-list">
              <div className="media">
                <div className="media-icon"><i className="far fa-file-alt"></i></div>
                <div className="media-body">
                  <h6>
                    <span>Invoice002300</span>
                    <span>$25</span>
                  </h6>
                  <div>
                    <p><span>Date:</span> Oct 25</p>
                    <p><span>Product:</span> 921021</p>
                  </div>
                </div>{/* media-body */}
              </div>{/* media */}
              <div className="media selected">
                <div className="media-icon"><i className="far fa-file-alt"></i></div>
                <div className="media-body">
                  <h6>
                    <span>Invoice002299</span>
                    <span>$16</span>
                  </h6>
                  <div>
                    <p><span>Date:</span> Oct 25</p>
                    <p><span>Product:</span> 435423</p>
                  </div>
                </div>{/* media-body */}
              </div>{/* media */}
              <div className="media">
                <div className="media-icon"><i className="far fa-file-alt"></i></div>
                <div className="media-body">
                  <h6>
                    <span>Invoice002300</span>
                    <span>$32</span>
                  </h6>
                  <div>
                    <p><span>Date:</span> Oct 25</p>
                    <p><span>Product:</span> 921021</p>
                  </div>
                </div>{/* media-body */}
              </div>{/* media */}
              <div className="media">
                <div className="media-icon"><i className="far fa-file-alt"></i></div>
                <div className="media-body">
                  <h6>
                    <span>Invoice002300</span>
                    <span>$18</span>
                  </h6>
                  <div>
                    <p><span>Date:</span> Oct 25</p>
                    <p><span>Product:</span> 921021</p>
                  </div>
                </div>{/* media-body */}
              </div>{/* media */}
              <div className="media">
                <div className="media-icon"><i className="far fa-file-alt"></i></div>
                <div className="media-body">
                  <h6>
                    <span>Invoice002300</span>
                    <span>$25</span>
                  </h6>
                  <div>
                    <p><span>Date:</span> Oct 25</p>
                    <p><span>Product:</span> 921021</p>
                  </div>
                </div>{/* media-body */}
              </div>{/* media */}
              <div className="media">
                <div className="media-icon"><i className="far fa-file-alt"></i></div>
                <div className="media-body">
                  <h6>
                    <span>Invoice002299</span>
                    <span>$16</span>
                  </h6>
                  <div>
                    <p><span>Date:</span> Oct 25</p>
                    <p><span>Product:</span> 435423</p>
                  </div>
                </div>{/* media-body */}
              </div>{/* media */}
              <div className="media">
                <div className="media-icon"><i className="far fa-file-alt"></i></div>
                <div className="media-body">
                  <h6>
                    <span>Invoice002300</span>
                    <span>$32</span>
                  </h6>
                  <div>
                    <p><span>Date:</span> Oct 25</p>
                    <p><span>Product:</span> 921021</p>
                  </div>
                </div>{/* media-body */}
              </div>{/* media */}
              <div className="media">
                <div className="media-icon"><i className="far fa-file-alt"></i></div>
                <div className="media-body">
                  <h6>
                    <span>Invoice002300</span>
                    <span>$18</span>
                  </h6>
                  <div>
                    <p><span>Date:</span> Oct 25</p>
                    <p><span>Product:</span> 921021</p>
                  </div>
                </div>{/* media-body */}
              </div>{/* media */}
              <div className="media">
                <div className="media-icon"><i className="far fa-file-alt"></i></div>
                <div className="media-body">
                  <h6>
                    <span>Invoice002300</span>
                    <span>$25</span>
                  </h6>
                  <div>
                    <p><span>Date:</span> Oct 25</p>
                    <p><span>Product:</span> 921021</p>
                  </div>
                </div>{/* media-body */}
              </div>{/* media */}
              <div className="media">
                <div className="media-icon"><i className="far fa-file-alt"></i></div>
                <div className="media-body">
                  <h6>
                    <span>Invoice002299</span>
                    <span>$16</span>
                  </h6>
                  <div>
                    <p><span>Date:</span> Oct 25</p>
                    <p><span>Product:</span> 435423</p>
                  </div>
                </div>{/* media-body */}
              </div>{/* media */}
              <div className="media">
                <div className="media-icon"><i className="far fa-file-alt"></i></div>
                <div className="media-body">
                  <h6>
                    <span>Invoice002300</span>
                    <span>$32</span>
                  </h6>
                  <div>
                    <p><span>Date:</span> Oct 25</p>
                    <p><span>Product:</span> 921021</p>
                  </div>
                </div>{/* media-body */}
              </div>{/* media */}
              <div className="media">
                <div className="media-icon"><i className="far fa-file-alt"></i></div>
                <div className="media-body">
                  <h6>
                    <span>Invoice002300</span>
                    <span>$18</span>
                  </h6>
                  <div>
                    <p><span>Date:</span> Oct 25</p>
                    <p><span>Product:</span> 921021</p>
                  </div>
                </div>{/* media-body */}
              </div>{/* media */}
            </PerfectScrollbar>{/* az-invoice-list */}
          </div>{/* az-content-left */}
          <PerfectScrollbar className="az-content-body az-content-body-invoice">
            <div className="card card-invoice">
              <div className="card-body">
                <div className="invoice-header">
                  <h1 className="invoice-title">Invoice</h1>
                  <div className="billed-from">
                    <h6>BootstrapDash, Inc.</h6>
                    <p>201 Something St., Something Town, YT 242, Country 6546<br/>
                    Tel No: 324 445-4544<br/>
                    Email: youremail@companyname.com</p>
                  </div>{/* billed-from */}
                </div>{/* invoice-header */}

                <div className="row mg-t-20">
                  <div className="col-md">
                    <label className="tx-gray-600">Billed To</label>
                    <div className="billed-to">
                      <h6>Juan Dela Cruz</h6>
                      <p>4033 Patterson Road, Staten Island, NY 10301 <br/>
                      Tel No: 324 445-4544<br/>
                      Email: youremail@companyname.com</p>
                    </div>
                  </div>{/* col */}
                  <div className="col-md">
                    <label className="tx-gray-600">Invoice Information</label>
                    <p className="invoice-info-row">
                      <span>Invoice No</span>
                      <span>GHT-673-00</span>
                    </p>
                    <p className="invoice-info-row">
                      <span>Project ID</span>
                      <span>32334300</span>
                    </p>
                    <p className="invoice-info-row">
                      <span>Issue Date:</span>
                      <span>November 21, 2017</span>
                    </p>
                    <p className="invoice-info-row">
                      <span>Due Date:</span>
                      <span>November 30, 2017</span>
                    </p>
                  </div>{/* col */}
                </div>{/* row */}

                <div className="table-responsive mg-t-40">
                  <table className="table table-invoice">
                    <thead>
                      <tr>
                        <th className="wd-20p">Type</th>
                        <th className="wd-40p">Description</th>
                        <th className="tx-center">QNTY</th>
                        <th className="tx-right">Unit Price</th>
                        <th className="tx-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Website Design</td>
                        <td className="tx-12">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...</td>
                        <td className="tx-center">2</td>
                        <td className="tx-right">$150.00</td>
                        <td className="tx-right">$300.00</td>
                      </tr>
                      <tr>
                        <td>Firefox Plugin</td>
                        <td className="tx-12">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque...</td>
                        <td className="tx-center">1</td>
                        <td className="tx-right">$1,200.00</td>
                        <td className="tx-right">$1,200.00</td>
                      </tr>
                      <tr>
                        <td>iPhone App</td>
                        <td className="tx-12">Et harum quidem rerum facilis est et expedita distinctio</td>
                        <td className="tx-center">2</td>
                        <td className="tx-right">$850.00</td>
                        <td className="tx-right">$1,700.00</td>
                      </tr>
                      <tr>
                        <td>Android App</td>
                        <td className="tx-12">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut</td>
                        <td className="tx-center">3</td>
                        <td className="tx-right">$850.00</td>
                        <td className="tx-right">$2,550.00</td>
                      </tr>
                      <tr>
                        <td colSpan="2" rowSpan="4" className="valign-middle">
                          <div className="invoice-notes">
                            <label className="az-content-label tx-13">Notes</label>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                          </div>{/* invoice-notes */}
                        </td>
                        <td className="tx-right">Sub-Total</td>
                        <td colSpan="2" className="tx-right">$5,750.00</td>
                      </tr>
                      <tr>
                        <td className="tx-right">Tax (5%)</td>
                        <td colSpan="2"  className="tx-right">$287.50</td>
                      </tr>
                      <tr>
                        <td className="tx-right">Discount</td>
                        <td colSpan="2" className="tx-right">-$50.00</td>
                      </tr>
                      <tr>
                        <td className="tx-right tx-uppercase tx-bold tx-inverse">Total Due</td>
                        <td colSpan="2" className="tx-right"><h4 className="tx-primary tx-bold">$5,987.50</h4></td>
                      </tr>
                    </tbody>
                  </table>
                </div>{/* table-responsive */}

                <hr className="mg-b-40"/>

                <a href="#/" className="btn btn-primary btn-block">Pay Now</a>

              </div>{/* card-body */}
            </div>{/* card */}
          </PerfectScrollbar>{/* az-content-body */}
        </div>
      </div>
    )
  }
}

export default Invoice
