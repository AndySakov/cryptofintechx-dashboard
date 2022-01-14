import React, { Component } from 'react';
import ComponentsSidebar from '../shared/ComponentsSidebar';
import {Alert} from 'react-bootstrap';

export class Alerts extends Component {
  closeAlert() {
    console.log('hiii');
    
  }
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>UI Elements</span>
              <span>Alerts</span>
            </div>
            <h2 className="az-content-title">Alerts</h2>

            <div className="az-content-label mg-b-5">Basic Alerts</div>
            <p className="mg-b-20">Use one of the four required contextual classes.</p>

            <Alert variant="success">
              <strong>Well done!</strong> You successfully read this important alert message.
            </Alert>

            <Alert variant="info">
              <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
            </Alert>

            <Alert variant="warning">
              <strong>Warning!</strong> Better check yourself, you're not looking too good.
            </Alert>

            <Alert variant="danger">
              <strong>Oh snap!</strong> Change a few things up and try submitting again.
            </Alert>

            <table className="table az-table-reference">
              <thead>
                <tr>
                  <th className="wd-40p">variant Reference</th>
                  <th className="wd-60p">Values</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code className="pd-0 bg-transparent">variant="[value]"</code></td>
                  <td>success | info | warning | danger</td>
                </tr>
              </tbody>
            </table>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Outline Alerts</div>
            <p className="mg-b-20">Use one of the four required contextual classes.</p>

            <Alert variant="outline-success">
              <strong>Well done!</strong> You successfully read this important alert message.
            </Alert>

            <Alert variant="outline-info">
              <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
            </Alert>

            <Alert variant="outline-warning">
              <strong>Warning!</strong> Better check yourself, you're not looking too good.
            </Alert>

            <Alert variant="outline-danger">
              <strong>Oh snap!</strong> Change a few things up and try submitting again.
            </Alert>

            <table className="table az-table-reference">
              <thead>
                <tr>
                  <th className="wd-40p">Variant Reference</th>
                  <th className="wd-60p">Values</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code className="pd-0 bg-transparent">variant="outline-[value]"</code></td>
                  <td>success | info | warning | danger</td>
                </tr>
              </tbody>
            </table>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Solid Colored Alerts</div>
            <p className="mg-b-20">Use one of the four required contextual classes.</p>

            <Alert variant="solid-success">
              <strong>Well done!</strong> You successfully read this important alert message.
            </Alert>

            <Alert variant="solid-info">
              <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
            </Alert>

            <Alert variant="solid-warning">
              <strong>Warning!</strong> Better check yourself, you're not looking too good.
            </Alert>

            <Alert variant="solid-danger">
              <strong>Oh snap!</strong> Change a few things up and try submitting again.
            </Alert>

            <table className="table az-table-reference mg-b-40">
              <thead>
                <tr>
                  <th className="wd-40p">Variant Reference</th>
                  <th className="wd-60p">Values</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code className="pd-0 bg-transparent">variant="solid-[value]"</code></td>
                  <td>success | info | warning | danger</td>
                </tr>
              </tbody>
            </table>

          </div>{/* az-content-body */}
        </div>
      </div>
    )
  }
}

export default Alerts
