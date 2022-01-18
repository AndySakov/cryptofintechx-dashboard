import React, { Component } from 'react';
import ComponentsSidebar from '../shared/ComponentsSidebar';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';

export class FormValidation extends Component {
  constructor(props){
    super(props);
    this.state = {
        validated: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({validated: true});

  }
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>Forms</span>
              <span>Form Validation</span>
            </div>
            <h2 className="az-content-title">Form Validation</h2>
            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  defaultValue="Mark"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  defaultValue="Otto"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                  />
                  <Form.Control.Feedback type="invalid">
                  Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" required />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State" required />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="" controlId="validationCustom05">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" placeholder="Zip" required />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          </div>{/* az-content-body */}
        </div>{/* container */}  
      </div>
    )
  }
}

export default FormValidation
