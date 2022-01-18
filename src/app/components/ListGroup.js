import React, { Component } from "react";
import ComponentsSidebar from "../shared/ComponentsSidebar";

export class ListGroup extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar />
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>UI Elements</span>
              <span>List Group</span>
            </div>
            <h2 className="az-content-title">List Group</h2>

            <div className="az-content-label mg-b-5">Basic Example</div>
            <p className="mg-b-20">
              The most basic list group is an unordered list with list items and
              the proper classes. Build upon it with the options that follow, or
              with your own CSS as needed.
            </p>

            <div className="wd-lg-50p">
              <ul className="list-group">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>

            <hr className="mg-y-40" />

            <div className="az-content-label mg-b-5">Active Item</div>
            <p className="mg-b-20">
              Add active class to a <code>.list-group-item</code> to indicate
              the current active selection.
            </p>

            <div className="wd-lg-50p">
              <ul className="list-group">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item active">
                  Dapibus ac facilisis in
                </li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>

            <hr className="mg-y-40" />

            <div className="az-content-label mg-b-5">Disabled Item</div>
            <p className="mg-b-20">
              Add disabled class to a <code>.list-group-item</code> to indicate
              the current active selection.
            </p>

            <div className="wd-lg-50p">
              <ul className="list-group">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item disabled">
                  Dapibus ac facilisis in
                </li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>

            <hr className="mg-y-40" />

            <div className="az-content-label mg-b-5">Link and Buttons</div>
            <p className="mg-b-20">
              Use link tag or button to create actionable list group items with
              hover, disabled, and active states by adding{" "}
              <code>.list-group-item-action</code>.
            </p>

            <div className="wd-lg-50p">
              <div className="list-group">
                <a
                  href="#/"
                  className="list-group-item list-group-item-action active"
                >
                  Cras justo odio
                </a>
                <a href="#/" className="list-group-item list-group-item-action">
                  Dapibus ac facilisis in
                </a>
                <a href="#/" className="list-group-item list-group-item-action">
                  Morbi leo risus
                </a>
                <a href="#/" className="list-group-item list-group-item-action">
                  Porta ac consectetur ac
                </a>
                <a href="#/" className="list-group-item list-group-item-action">
                  Vestibulum at eros
                </a>
              </div>
            </div>

            <hr className="mg-y-40" />

            <div className="az-content-label mg-b-5">Using Image</div>
            <p className="mg-b-20">
              A list that contain an image with the help of utility classes.
            </p>

            <div className="wd-lg-50p">
              <ul className="list-group wd-md-50p">
                <li className="list-group-item d-flex align-items-center">
                  <img
                    src={require("../../assets/images/img6.jpg")}
                    className="wd-30 rounded-circle mg-r-15"
                    alt=""
                  />
                  <div>
                    <h6 className="tx-13 tx-inverse tx-semibold mg-b-0">
                      Adrian Monino
                    </h6>
                    <span className="d-block tx-11 text-muted">
                      Premium Member
                    </span>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <img
                    src={require("../../assets/images/img7.jpg")}
                    className="wd-30 rounded-circle mg-r-15"
                    alt=""
                  />
                  <div>
                    <h6 className="tx-13 tx-inverse tx-semibold mg-b-0">
                      Joel Mendez
                    </h6>
                    <span className="d-block tx-11 text-muted">
                      Premium Member
                    </span>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <img
                    src={require("../../assets/images/img8.jpg")}
                    className="wd-30 rounded-circle mg-r-15"
                    alt=""
                  />
                  <div>
                    <h6 className="tx-13 tx-inverse tx-semibold mg-b-0">
                      Marianne Audrey
                    </h6>
                    <span className="d-block tx-11 text-muted">
                      Premium Member
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="ht-40"></div>
          </div>
          {/* az-content-body */}
        </div>
        {/* container */}
      </div>
    );
  }
}

export default ListGroup;
