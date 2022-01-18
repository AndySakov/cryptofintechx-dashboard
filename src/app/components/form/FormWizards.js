import React, { Component } from 'react';
import ComponentsSidebar from '../shared/ComponentsSidebar';
import MultiStep from 'react-multistep';

export class FormWizards extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>Forms</span>
              <span>Form Wizards</span>
            </div>
            <h2 className="az-content-title">Form Wizards</h2>

            <div className="az-content-label mg-b-5">Basic Content Wizard</div>
            <p className="mg-b-20">Below is an example of a basic horizontal form wizard.</p>

            <div className="form-wizard">
              <MultiStep showNavigation={true} className="my-class" steps={steps}/>
            </div>

            <hr className="mg-y-30 mg-lg-y-50 bd-transparent"/>

            <div className="az-content-label mg-b-5">Vertical Orientation Wizard</div>
            <p className="mg-b-20">A basic content wizard with vertical orientation.</p>

            <div className="form-wizard form-wizard-vertical">
              <MultiStep showNavigation={true} className="my-class" steps={steps}/>
            </div>

            <div className="ht-40"></div>

          </div>{/* az-content-body */}
        </div>{/* container */}
      </div>
    )
  }
}



export class Step1 extends Component {
  render() {
    return (
      <section className="content">
        <h3 className="mb-4">Account</h3>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Password"/>
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" className="form-control" placeholder="Confirm password"/>
        </div>
      </section>
    )
  }
}

export class Step2 extends Component {
  render() {
    return (
      <section className="content">
        <h3 className="mb-4">Profile</h3>
        <div className="form-group">
          <label>First name</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter first name"/>
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input type="password" className="form-control" placeholder="Last name"/>
        </div>
        <div className="form-group">
          <label>Profession</label>
          <input type="password" className="form-control" placeholder="Profession"/>
        </div>
      </section>
    )
  }
}

export class Step3 extends Component {
  render() {
    return (
      <section className="content">
        <h3 className="mb-4">Comments</h3>
        <div className="form-group">
          <label>Comments</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>
      </section>
    )
  }
}

export class Step4 extends Component {
  render() {
    return (
      <section className="content">
        <h3 className="mb-4">Finish</h3>
        <div className="form-check">
          <label className="form-check-label">
            <input className="checkbox" type="checkbox"/>
            <i className="input-helper"></i>
            I agree with the Terms and Conditions.
          </label>
        </div>
      </section>
    )
  }
}

const steps = [
  {name: '. Account', component: <Step1/>},
  {name: '. Profile', component: <Step2/>},
  {name: '. Comments', component: <Step3/>},
  {name: '. Finish', component: <Step4/>}
];

export default FormWizards
