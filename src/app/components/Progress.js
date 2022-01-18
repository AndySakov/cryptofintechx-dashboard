import React, { Component } from 'react'
import ComponentsSidebar from '../shared/ComponentsSidebar';
import {ProgressBar} from 'react-bootstrap';

export class Progress extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>UI Elements</span>
              <span>Progress</span>
            </div>
            <h2 className="az-content-title">Progress</h2>

            <div className="az-content-label mg-b-5">Basic Progress</div>
            <p className="mg-b-20">A basic progress in all different colors.</p>

            <ProgressBar now={25} className="mg-b-20"/>
            <ProgressBar now={35} variant="success" className="mg-b-20"/>
            <ProgressBar now={50} variant="warning" className="mg-b-20"/>
            <ProgressBar now={65} variant="danger" className="mg-b-20"/>
            <ProgressBar now={75} variant="indigo" className="mg-b-20"/>


            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Striped Progress</div>
            <p className="mg-b-20">A basic progress in all different colors.</p>

            <ProgressBar now={25} striped className="mg-b-20"/>
            <ProgressBar now={35} striped variant="success" className="mg-b-20"/>
            <ProgressBar now={50} striped variant="warning" className="mg-b-20"/>
            <ProgressBar now={65} striped variant="danger" className="mg-b-20"/>
            <ProgressBar now={75} striped variant="indigo" className="mg-b-20"/>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Progress Sizes</div>
            <p className="mg-b-20">A basic progress in different sizes.</p>

            <span className="tx-uppercase tx-11 d-block mg-b-5">Size Super Extra Small</span>
            <ProgressBar now={25} className="mg-b-10 ht-2"/>
            <ProgressBar now={35} variant="success" className="mg-b-10 ht-2"/>
            <ProgressBar now={65} variant="danger" className="mg-b-10 ht-2"/>

            <span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">Size Extra Small</span>
            <ProgressBar now={25} className="progress-bar-xs mg-b-10"/>
            <ProgressBar now={35} variant="success" className="progress-bar-xs mg-b-10"/>
            <ProgressBar now={65} variant="danger" className="progress-bar-xs mg-b-10"/>

            <span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">Size Small</span>
            <ProgressBar now={25} className="progress-bar-sm mg-b-10"/>
            <ProgressBar now={35} variant="success" className="progress-bar-sm mg-b-10"/>
            <ProgressBar now={65} variant="danger" className="progress-bar-sm mg-b-10"/>


            <span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">Size Normal</span>
            <ProgressBar now={25} className="mg-b-10"/>
            <ProgressBar now={35} variant="success" className="mg-b-10"/>
            <ProgressBar now={65} variant="danger" className="mg-b-10"/>

            <span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">Size Large</span>
            <ProgressBar now={25} className="progress-bar-lg mg-b-10"/>
            <ProgressBar now={35} variant="success" className="progress-bar-lg mg-b-10"/>
            <ProgressBar now={65} variant="danger" className="progress-bar-lg mg-b-10"/>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Progress Label</div>
            <p className="mg-b-20">A basic progress in different sizes.</p>
            <ProgressBar now={50} label={50} className="progress-bar-lg mg-b-10"/>
            <ProgressBar now={60} label={60} variant="success" className="progress-bar-lg mg-b-10"/>
            <ProgressBar now={95} label={95} variant="danger" className="progress-bar-lg mg-b-10"/>

            <div className="mg-lg-b-30"></div>


          </div>{/* az-content-body */}
        </div>{/* container */}
      </div>
    )
  }
}

export default Progress
