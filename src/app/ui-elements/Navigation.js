import React, { Component } from "react";
import ComponentsSidebar from "../shared/ComponentsSidebar";
import { Tabs, Tab } from "react-bootstrap";

export class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar />
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>UI Elements</span>
              <span>Navigation</span>
            </div>
            <h2 className="az-content-title">Navigation</h2>

            <div className="az-content-label mg-b-5">Basic Navigation</div>
            <p className="mg-b-20">
              Below is an example of a basic navigation for both light and dark.
            </p>

            <div className="pd-20 bg-gray-200">
              <nav className="nav az-nav flex-column flex-md-row">
                <a className="nav-link active" data-toggle="tab" href="#/">
                  Home
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  About
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Features
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Services
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Blog
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Contact
                </a>
              </nav>
            </div>
            {/* pd-10 */}

            <div className="pd-20 mg-t-20 bg-gray-800">
              <nav className="nav az-nav az-nav-dark flex-column flex-md-row">
                <a className="nav-link active" data-toggle="tab" href="#/">
                  Home
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  About
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Features
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Services
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Blog
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Contact
                </a>
              </nav>
            </div>
            {/* pd-10 */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Vertical Navigation</div>
            <p className="mg-b-20">
              Below is an example of a basic navigation in a vertical mode.
            </p>

            <div className="row row-sm">
              <div className="col-md-4 col-lg-3">
                <div className="pd-20 bg-gray-200">
                  <nav className="nav az-nav-column">
                    <a className="nav-link active" data-toggle="tab" href="#/">
                      Home
                    </a>
                    <a className="nav-link" data-toggle="tab" href="#/">
                      About
                    </a>
                    <a className="nav-link" data-toggle="tab" href="#/">
                      Features
                    </a>
                    <a className="nav-link" data-toggle="tab" href="#/">
                      Services
                    </a>
                    <a className="nav-link" data-toggle="tab" href="#/">
                      Blog
                    </a>
                    <a className="nav-link" data-toggle="tab" href="#/">
                      Contact
                    </a>
                  </nav>
                </div>
                {/* pd-10 */}
              </div>
              {/* col-3 */}
              <div className="col-md-4 col-lg-3 mg-t-20 mg-md-t-0">
                <div className="pd-20 bg-gray-800">
                  <nav className="nav az-nav-column az-nav-dark">
                    <a className="nav-link active" data-toggle="tab" href="#/">
                      Home
                    </a>
                    <a className="nav-link" data-toggle="tab" href="#/">
                      About
                    </a>
                    <a className="nav-link" data-toggle="tab" href="#/">
                      Features
                    </a>
                    <a className="nav-link" data-toggle="tab" href="#/">
                      Services
                    </a>
                    <a className="nav-link" data-toggle="tab" href="#/">
                      Blog
                    </a>
                    <a className="nav-link" data-toggle="tab" href="#/">
                      Contact
                    </a>
                  </nav>
                </div>
              </div>
              {/* col-3 */}
            </div>
            {/* row */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Pills Navigation</div>
            <p className="mg-b-20">
              Below is an example of a pill navigation in both light and dark.
            </p>

            <div className="pd-20 bg-gray-200">
              <nav className="nav nav-pills flex-column flex-md-row">
                <a className="nav-link active" data-toggle="tab" href="#/">
                  Home
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  About
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Features
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Services
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Blog
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Contact
                </a>
              </nav>
            </div>
            {/* pd-10 */}

            <div className="pd-20 mg-t-20 bg-gray-800">
              <nav className="nav nav-pills nav-dark flex-column flex-md-row">
                <a className="nav-link active" data-toggle="tab" href="#/">
                  Home
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  About
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Features
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Services
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Blog
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Contact
                </a>
              </nav>
            </div>
            {/* pd-10 */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">
              Vertical Pills Navigation
            </div>
            <p className="mg-b-20">
              Below is an example of a pill navigation in vertical mode.
            </p>

            <div className="row row-sm">
              <div className="col-md-4 col-lg-3">
                <div className="pd-20 bg-gray-200">
                  <nav className="nav nav-pills flex-column">
                    <a className="nav-link active" data-toggle="tab" href="#/">
                      Home
                    </a>
                    <a className="nav-link" data-toggle="tab" href="#/">
                      About
                    </a>
                    <a className="nav-link" data-toggle="tab" href="#/">
                      Features
                    </a>
                    <a className="nav-link" data-toggle="tab" href="#/">
                      Services
                    </a>
                    <a className="nav-link" data-toggle="tab" href="#/">
                      Blog
                    </a>
                    <a className="nav-link" data-toggle="tab" href="#/">
                      Contact
                    </a>
                  </nav>
                </div>
                {/* pd-10 */}
              </div>
              {/* col-3 */}
              <div className="col-md-4 col-lg-3 mg-t-20 mg-md-t-0">
                <div className="pd-20 bg-gray-800">
                  <nav className="nav nav-pills nav-dark flex-column">
                    <a className="nav-link active" data-toggle="tab" href="#/">
                      Home
                    </a>
                    <a className="nav-link" data-toggle="tab" href="#/">
                      About
                    </a>
                    <a className="nav-link" data-toggle="tab" href="#/">
                      Features
                    </a>
                    <a className="nav-link" data-toggle="tab" href="#/">
                      Services
                    </a>
                    <a className="nav-link" data-toggle="tab" href="#/">
                      Blog
                    </a>
                    <a className="nav-link" data-toggle="tab" href="#/">
                      Contact
                    </a>
                  </nav>
                </div>
              </div>
              {/* col-3 */}
            </div>
            {/* row */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Horizontal Alignment</div>
            <p className="mg-b-20">
              A navigation with center and right in which left is the default.
            </p>

            <div className="pd-20 bg-gray-200">
              <nav className="nav az-nav flex-column flex-md-row justify-content-center">
                <a className="nav-link active" data-toggle="tab" href="#/">
                  Home
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  About
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Features
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Services
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Blog
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Contact
                </a>
              </nav>
            </div>
            {/* pd-10 */}

            <div className="pd-20 mg-t-20 bg-gray-200">
              <nav className="nav az-nav flex-column flex-md-row justify-content-end">
                <a className="nav-link active" data-toggle="tab" href="#/">
                  Home
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  About
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Features
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Services
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Blog
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Contact
                </a>
              </nav>
            </div>
            {/* pd-10 */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">
              Colored Bar Variations
            </div>
            <p className="mg-b-20">
              A navigation with colored bar that wrapped the navigation.
            </p>

            <div className="pd-20 bg-indigo">
              <nav className="nav az-nav az-nav-dark az-nav-colored-bg flex-column flex-md-row">
                <a className="nav-link active" data-toggle="tab" href="#/">
                  Home
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  About
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Features
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Services
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Blog
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Contact
                </a>
              </nav>
            </div>
            {/* pd-10 */}
            <div className="pd-20 mg-t-10 bg-gray-800">
              <nav className="nav az-nav az-nav-dark az-nav-colored-bg flex-column flex-md-row">
                <a className="nav-link active" data-toggle="tab" href="#/">
                  Home
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  About
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Features
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Services
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Blog
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Contact
                </a>
              </nav>
            </div>
            {/* pd-10 */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Underline Navigation</div>
            <p className="mg-b-20">
              Below is a type of navigation that have a line at the bottom of
              active link.
            </p>

            <div className="pd-20 bg-gray-200">
              <nav className="nav az-nav-line flex-column flex-md-row">
                <a className="nav-link active" data-toggle="tab" href="#/">
                  Home
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  About
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Features
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Services
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Blog
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Contact
                </a>
              </nav>
            </div>
            {/* pd-10 */}

            <div className="pd-20 bg-gray-800 mg-t-20">
              <nav className="nav az-nav-line az-nav-dark flex-column flex-md-row">
                <a className="nav-link active" data-toggle="tab" href="#/">
                  Home
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  About
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Features
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Services
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Blog
                </a>
                <a className="nav-link" data-toggle="tab" href="#/">
                  Contact
                </a>
              </nav>
            </div>
            {/* pd-10 */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Simple Tab Navigation</div>
            <p className="mg-b-20">
              Below is a tab navigation that have only few links.
            </p>

            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="home" title="Home">
                This is a tab content 1...
              </Tab>
              <Tab eventKey="profile" title="Profile">
                This is a tab content 2...
              </Tab>
              <Tab eventKey="contact" title="Contact">
                This is a tab content 3...
              </Tab>
            </Tabs>

            <div className="mg-lg-b-30"></div>
          </div>
          {/* az-content-body */}
        </div>
        {/* container */}
      </div>
    );
  }
}

export default Navigation;
