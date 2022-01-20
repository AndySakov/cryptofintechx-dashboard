import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
import Select from "react-select";
import countries from "country-list-js";
import { Button, Form, InputGroup } from "react-bootstrap";
import axios from "../axiosInstance"

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const form = event.target;
    event.preventDefault();
    event.stopPropagation();

    this.setState({ validated: true });

    setTimeout(() => {
      this.setState({ validated: false });
    }, 5000);

    axios.post("/user/create", {
      email: form.email.value,
      country: form.country.value,
      full_name: form.full_name.value,
      password: form.password.value,
      category: form.category.value,
      dob: form.dob.value,
    })
    .then((res) => {
      alert("User created successfully!")
    })
    .catch((err) => {
      if (err.response) {
        alert(
          `Error: ${err.response.status}\nSee contact for more information.`
        );
        console.log(err.response.data);
      } else if (err.request) {
        console.log(err.request);
      } else {
        // alert("Unknown error: " + err)
        console.log(err)
      }
      // console.log(err.config);
    })
  }
  render() {
    return (
      <div>
        <div className="az-signup-wrapper">
          <div className="az-column-signup-left">
            <div>
              <i className="typcn typcn-chart-bar-outline"></i>
              <h1 className="az-logo">CRYPTOFINTECHX</h1>
              <h5>Responsive Modern Dashboard &amp Admin Template</h5>
              <p>
                We are excited to launch our new company and product Azia. After
                being featured in too many magazines to mention and having
                created an online stir, we know that BootstrapDash is going to
                be big. We also hope to win Startup Fictional Business of the
                Year this year.
              </p>
              <p>Browse our site and see for yourself why you need Azia.</p>
              <Link
                to="https://cryptofintechx.com/#about"
                target="_blank"
                className="btn btn-az-outline-primary"
              >
                Learn More
              </Link>
            </div>
          </div>
          {/* az-column-signup-left */}
          <div className="az-column-signup">
            <div className="az-signup-header">
              <h2>
                Welcome to the world of <span>CRYPTOFINTECHX!</span>
              </h2>
              <br />
              <Form
                noValidate
                validated={this.state.validated}
                onSubmit={this.handleSubmit}
                // method="POST"
              >
                <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter your fullname"
                    name="full_name"
                    feedback="Looks Good!"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please input your fullname.
                  </Form.Control.Feedback>
                </Form.Group>
                {/* form-group */}
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
                {/* form-group */}
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a password to continue.
                  </Form.Control.Feedback>
                </Form.Group>
                {/* form-group */}
                <Form.Group>
                  <Form.Label>Country</Form.Label>
                  <Select
                    required
                    name="country"
                    className="select2-example"
                    options={countries
                      .names()
                      .sort((b, a) => {
                        a = a.toLowerCase();
                        b = b.toLowerCase();

                        return a > b ? -1 : b > a ? 1 : 0;
                      })
                      .map((country) => ({ value: country, label: country }))}
                  />
                </Form.Group>
                {/* form-group */}
                <Form.Group>
                  <Form.Label>Investment Category</Form.Label>
                  <Select
                    required
                    name="category"
                    options={[
                      { value: "Normal", label: "Normal" },
                      { value: "Silver", label: "Silver" },
                      { value: "Gold", label: "Gold" },
                      { value: "Diamond", label: "Diamond" },
                    ]}
                  />
                </Form.Group>
                {/* form-group */}
                <Form.Group>
                  <Form.Label>Date of Birth</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <InputMask
                      required
                      mask="9999-99-99"
                      name="dob"
                      className="form-control"
                      placeholder="YYYY-MM-DD"
                      feedback="Please provide your date of birth"
                    />
                  </InputGroup>
                  {/* input-group */}
                </Form.Group>
                {/* form-group */}
                <Form.Group>
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                  />
                </Form.Group>
                {/* form-group */}
                <Button className="btn btn-az-primary btn-block" type="submit">
                  Get Started!
                </Button>
                {/* <div className="row row-xs">
                  <div className="col-sm-6"><button className="btn btn-block"><i className="fab fa-facebook-f"></i> Signup with Facebook</button></div>
                  <div className="col-sm-6 mg-t-10 mg-sm-t-0"><button className="btn btn-primary btn-block"><i className="fab fa-twitter"></i> Signup with Twitter</button></div>
                </div>row */}
              </Form>
            </div>
            {/* az-signup-header */}
            <div className="az-signup-footer">
              <p>
                Already have an account? <Link to="/login">Sign In</Link>
              </p>
            </div>
            {/* az-signin-footer */}
          </div>
          {/* az-column-signup */}
        </div>
        {/* az-signup-wrapper */}
      </div>
    );
  }
}

export default Signup;
