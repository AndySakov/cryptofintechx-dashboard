import React, { Component } from "react";
import ComponentsSidebar from "../shared/ComponentsSidebar";
import { Breadcrumb } from "react-bootstrap";

export class Breadcrumbs extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar />
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>UI Elements</span>
              <span>Breadcrumbs</span>
            </div>
            <h2 className="az-content-title">Breadcrumbs</h2>

            <div className="az-content-label mg-b-5">Basic Styling</div>
            <p className="mg-b-20">
              The example below is the basic styling of the breadcrumb from
              Bootstrap.
            </p>

            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mg-b-0">
                <li className="breadcrumb-item">
                  <a href="#/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#/">Library</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Data
                </li>
              </ol>
            </nav>

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Custom Styling</div>
            <p className="mg-b-20">
              The example below is the custom styling of the breadcrumb used by
              this template.
            </p>

            <Breadcrumb className="breadcrumb-style1">
              <Breadcrumb.Item href="#/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Library
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Custom Divider</div>
            <p className="mg-b-20">
              The example below is the custom styling of the breadcrumb using
              different divider.
            </p>

            <Breadcrumb className="breadcrumb-style2">
              <Breadcrumb.Item href="#/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Library
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          {/* az-content-body */}
        </div>
        {/* container */}
      </div>
    );
  }
}

export default Breadcrumbs;
