import React, { Component } from "react";
import ComponentsSidebar from "../shared/ComponentsSidebar";
import { Form } from "react-bootstrap";
import Select from "react-select";

export class FormLayouts extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar />
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>Forms</span>
              <span>Form Layouts</span>
            </div>
            <h2 className="az-content-title">Form Layouts</h2>

            <div className="az-content-label mg-b-5">Horizontal Alignment</div>
            <p className="mg-b-20">
              A form control layout using row to create horizontal alignment.
            </p>

            <div className="pd-30 pd-sm-40 bg-gray-200 wd-xl-75p">
              <div className="row row-xs">
                <div className="col-md-5">
                  <Form.Control type="text" placeholder="Enter your username" />
                </div>
                {/* col */}
                <div className="col-md-5 mg-t-10 mg-md-t-0">
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
                {/* col */}
                <div className="col-md mg-t-10 mg-md-t-0">
                  <button className="btn btn-az-primary btn-block">
                    Sign In
                  </button>
                </div>
                {/* col */}
              </div>
              {/* row */}
            </div>

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Vertical Alignment</div>
            <p className="mg-b-20">
              A form control layout using flex-column to create vertical
              alignment.
            </p>

            <div className="d-flex flex-column wd-md-400 pd-30 pd-sm-40 bg-gray-200">
              <div className="form-group">
                <Form.Control type="text" placeholder="Enter your username" />
              </div>
              {/* form-group */}
              <div className="form-group">
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              {/* form-group */}
              <button className="btn btn-az-primary pd-x-20">Sign In</button>
            </div>

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Left Label Alignment</div>
            <p className="mg-b-20">
              A form control layout using row with left label alignment.
            </p>

            <div className="pd-30 pd-sm-40 bg-gray-200 wd-xl-50p">
              <div className="row row-xs align-items-center mg-b-20">
                <div className="col-md-4">
                  <label className="form-label mg-b-0">Firstname</label>
                </div>
                {/* col */}
                <div className="col-md-8 mg-t-5 mg-md-t-0">
                  <Form.Control
                    type="text"
                    placeholder="Enter your firstname"
                  />
                </div>
                {/* col */}
              </div>
              {/* row */}

              <div className="row row-xs align-items-center mg-b-20">
                <div className="col-md-4">
                  <label className="form-label mg-b-0">Lastnane</label>
                </div>
                {/* col */}
                <div className="col-md-8 mg-t-5 mg-md-t-0">
                  <Form.Control type="text" placeholder="Enter your lastname" />
                </div>
                {/* col */}
              </div>
              {/* row */}

              <div className="row row-xs align-items-center mg-b-20">
                <div className="col-md-4">
                  <label className="form-label mg-b-0">Email</label>
                </div>
                {/* col */}
                <div className="col-md-8 mg-t-5 mg-md-t-0">
                  <Form.Control type="email" placeholder="Enter your email" />
                </div>
                {/* col */}
              </div>
              {/* row */}

              <button className="btn btn-az-primary pd-x-30 mg-r-5">
                Register
              </button>
              <button className="btn btn-dark pd-x-30">Cancel</button>
            </div>

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Form Group Wrapper</div>
            <p className="mg-b-20">
              A form group layout with label and input wrap in one element.
            </p>

            <div className="wd-xl-75p">
              <div className="row row-xs">
                <div className="col-md-5">
                  <div className="az-form-group">
                    <label className="form-label">Email</label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      defaultValue="me@bootstrapdash.com"
                    />
                  </div>
                  {/* az-form-group */}
                </div>
                {/* col */}
                <div className="col-md-5 mg-t-20 mg-md-t-0">
                  <div className="az-form-group">
                    <label className="form-label">Password</label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      defaultValue="thisismypassword"
                    />
                  </div>
                  {/* az-form-group */}
                </div>
                {/* col */}
              </div>
              {/* row */}
            </div>

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Form in Dropdown</div>
            <p className="mg-b-20">
              A form group layout inside a dropdown panel.
            </p>

            <div className="az-content-label az-content-label-sm mg-b-10">
              Static Example
            </div>
            <div className="az-dropdown-form-demo">
              <div className="static-dropdown">
                <div className="dropdown-menu">
                  <h6 className="dropdown-title">Subscribe</h6>
                  <p className="mg-b-20">Don't miiss any update from us.</p>
                  <div className="form-group">
                    <Form.Control
                      type="text"
                      placeholder="Enter your fullname"
                    />
                  </div>
                  {/* form-group */}
                  <div className="form-group">
                    <Form.Control type="email" placeholder="Enter your email" />
                  </div>
                  {/* form-group */}
                  <button className="btn btn-primary btn-block">
                    Subscribe
                  </button>
                </div>
                {/* dropdown-menu */}
              </div>
              {/* static-dropdown */}

              <div className="mg-t-20">
                <button
                  className="btn btn-az-primary pd-x-20"
                  data-toggle="dropdown"
                >
                  Live Example{" "}
                  <i className="icon ion-ios-arrow-down mg-l-5 tx-12"></i>
                </button>
                <div className="dropdown-menu">
                  <h6 className="dropdown-title">Subscribe</h6>
                  <p className="mg-b-20">Don't miss any update from us.</p>
                  <div className="form-group">
                    <Form.Control
                      type="text"
                      placeholder="Enter your fullname"
                    />
                  </div>
                  {/* form-group */}
                  <div className="form-group">
                    <Form.Control type="email" placeholder="Enter your email" />
                  </div>
                  {/* form-group */}
                  <button className="btn btn-primary btn-block">
                    Subscribe
                  </button>
                </div>
                {/* dropdown-menu */}
              </div>
            </div>
            {/* az-dropdown-demo */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Form in Modal</div>
            <p className="mg-b-20">A form group layout inside a modal panel.</p>

            <div className="pd-10 pd-sm-20 bg-gray-800">
              {/* this modal is static modal for presentation purpose. */}
              {/* class .d-block annd .pos-relative in .modal is for demo only */}
              <div className="modal d-block pos-static">
                <div className="modal-dialog wd-xl-400" role="document">
                  <div className="modal-content">
                    <div className="modal-body pd-sm-40">
                      <button
                        type="button"
                        className="close pos-absolute t-15 r-20 tx-26"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>

                      <h5 className="modal-title mg-b-5">Create New Account</h5>
                      <p className="mg-b-20">
                        Let's get you all setup so you can begin using our app.
                      </p>

                      <div className="form-group">
                        <Form.Control type="text" placeholder="Firstname" />
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Firstname"
                        />
                      </div>
                      {/* form-group */}
                      <div className="form-group">
                        <Form.Control type="text" placeholder="Lastname" />
                      </div>
                      {/* form-group */}
                      <div className="form-group">
                        <Form.Control type="text" placeholder="Phone" />
                      </div>
                      {/* form-group */}
                      <div className="form-group">
                        <Form.Control type="email" placeholder="Email" />
                      </div>
                      {/* form-group */}
                      <div className="form-group mg-b-25">
                        <Form.Check
                          id="privacyCheckbox"
                          type={"checkbox"}
                          label={"I agree to and Privacy Policy"}
                          className={"ckbox mg-b-10"}
                        />
                        <Form.Check
                          id="newsletterCheckbox"
                          type={"checkbox"}
                          label={
                            "Yes, I want to receive email from your newsletter."
                          }
                          className={"ckbox"}
                        />
                      </div>
                      {/* form-group */}
                      <button className="btn btn-primary btn-block">
                        Continue
                      </button>
                    </div>
                    {/* modal-body */}
                  </div>
                  {/* modal-content */}
                </div>
                {/* modal-dialog */}
              </div>
              {/* modal */}
            </div>
            {/* pd-y-50 */}
            <div className="tx-center pd-y-20 bg-gray-200">
              <a
                href="#/"
                className="btn btn-az-primary"
                data-toggle="modal"
                data-target="#modaldemo1"
              >
                View Live Demo
              </a>
            </div>
            {/* pd-y-30 */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Credit Card Form</div>
            <p className="mg-b-20">
              A form group layout for entering card information upon checkout.
            </p>

            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-6">
                <div className="card card-body pd-40">
                  <h5 className="card-title mg-b-20">Your Payment Details</h5>

                  <div className="form-group">
                    <label className="az-content-label tx-11 tx-medium tx-gray-600">
                      Name on Card
                    </label>
                    <Form.Control type="text" required />
                  </div>
                  {/* form-group */}

                  <div className="form-group">
                    <label className="az-content-label tx-11 tx-medium tx-gray-600">
                      Card Number
                    </label>
                    <div className="pos-relative">
                      <Form.Control type="text" className="pd-r-80" required />
                      <div className="d-flex pos-absolute t-5 r-10">
                        <img
                          src={require("../../assets/images/visa.png")}
                          className="wd-30 mg-r-5"
                          alt=""
                        />
                        <img
                          src={require("../../assets/images/mastercard.png")}
                          className="wd-30"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  {/* form-group */}

                  <div className="form-group">
                    <div className="row row-sm">
                      <div className="col-sm-9">
                        <label className="az-content-label tx-11 tx-medium tx-gray-600">
                          Expiration Date
                        </label>
                        <div className="row row-sm">
                          <div className="col-sm-7">
                            <Select
                              options={[
                                { value: "january", label: "January" },
                                { value: "february", label: "February" },
                                { value: "march", label: "March" },
                                { value: "april", label: "April" },
                                { value: "may", label: "May" }
                              ]}
                            />
                          </div>
                          {/* col */}
                          <div className="col-sm-5 mg-t-10 mg-sm-t-0">
                            <Select
                              options={[
                                { value: "2018", label: "2018" },
                                { value: "2019", label: "2019" },
                                { value: "2020", label: "2020" },
                                { value: "2021", label: "2021" },
                                { value: "2020", label: "2020" }
                              ]}
                            />
                          </div>
                          {/* col */}
                        </div>
                        {/* row */}
                      </div>
                      {/* col */}
                      <div className="col-sm-3 mg-t-20 mg-sm-t-0">
                        <label className="az-content-label tx-11 tx-medium tx-gray-600">
                          CVC
                        </label>
                        <input type="text" className="form-control" required />
                      </div>
                      {/* col */}
                    </div>
                    {/* row */}
                  </div>
                  {/* form-group */}
                  <div className="form-group mg-b-20">
                    <Form.Check
                      id="cardCheckbox"
                      type={"checkbox"}
                      label={"Save my card for future purchases"}
                      className={"ckbox"}
                    />
                  </div>
                  {/* form-group */}
                  <button className="btn btn-az-primary btn-block">
                    Complete Payment
                  </button>
                </div>
                {/* card */}
              </div>
              {/* col */}
            </div>
            {/* row */}

            <div className="ht-40"></div>
          </div>
          {/* az-content-body */}
        </div>
        {/* container */}
      </div>
    );
  }
}

export default FormLayouts;
