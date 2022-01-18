import React, { Component } from 'react'
import ComponentsSidebar from '../shared/ComponentsSidebar';
import {Badge} from 'react-bootstrap';

export class Badges extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>UI Elements</span>
              <span>Badge</span>
            </div>
            <h2 className="az-content-title">Badge</h2>

            <div className="az-content-label mg-b-5">Contextual Variations</div>
            <p className="mg-b-20">Add any of the below mentioned modifier classes to change the appearance of a badge.</p>

            <div>
              <Badge variant="primary">Primary</Badge> {' '}
              <Badge variant="secondary">Secondary</Badge> {' '}
              <Badge variant="success">Success</Badge> {' '}
              <Badge variant="danger">Danger</Badge> {' '}
              <Badge variant="warning">Warning</Badge> {' '}
              <Badge variant="info">Info</Badge> {' '}
              <Badge variant="light">Light</Badge> {' '}
              <Badge variant="dark">Dark</Badge> {' '}
            </div>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Pill Badges</div>
            <p className="mg-b-20">Use the <code>pill</code> modifier variant to make badges more rounded.</p>

            <div>
              <Badge variant="pill badge-primary">Primary</Badge> {' '}
              <Badge variant="pill badge-secondary">Secondary</Badge> {' '}
              <Badge variant="pill badge-success">Success</Badge> {' '}
              <Badge variant="pill badge-danger">Danger</Badge> {' '}
              <Badge variant="pill badge-warning">Warning</Badge> {' '}
              <Badge variant="pill badge-info">Info</Badge> {' '}
              <Badge variant="pill badge-light">Light</Badge> {' '}
              <Badge variant="pill badge-dark">Dark</Badge> {' '}
            </div>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Link Badges</div>
            <p className="mg-b-20">Using the contextual badge classes on an element quickly provide actionable badges with hover and focus states.</p>

            <div>
              <Badge as={'a'} href="#/" variant="primary">Primary</Badge> {' '}
              <Badge as={'a'} href="#/" variant="secondary">Secondary</Badge> {' '}
              <Badge as={'a'} href="#/" variant="success">Success</Badge> {' '}
              <Badge as={'a'} href="#/" variant="danger">Danger</Badge> {' '}
              <Badge as={'a'} href="#/" variant="warning">Warning</Badge> {' '}
              <Badge as={'a'} href="#/" variant="info">Info</Badge> {' '}
              <Badge as={'a'} href="#/" variant="light">Light</Badge> {' '}
              <Badge as={'a'} href="#/" variant="dark">Dark</Badge> {' '}
            </div>

            <div className="ht-30"></div>

          </div>{/* az-content-body */}
        </div>{/* container */}
      </div>
    )
  }
}

export default Badges
