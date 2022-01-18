import React, { Component } from 'react';
import ComponentsSidebar from '../shared/ComponentsSidebar';
import {Pagination} from 'react-bootstrap';

export class Paginations extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>UI Elements</span>
              <span>Pagination</span>
            </div>
            <h2 className="az-content-title">Pagination</h2>

            <div className="az-content-label mg-b-5">Basic Pagination</div>
            <p className="mg-b-20">Below are basic pagination navigation.</p>

            <Pagination>
              <Pagination.Prev><i className="icon ion-ios-arrow-back"></i></Pagination.Prev>
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Next><i className="icon ion-ios-arrow-forward"></i></Pagination.Next>
            </Pagination>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Pagination For Dark Background</div>
            <p className="mg-b-20">Below are basic pagination navigation for dark background.</p>

            <div className="pd-20 bg-gray-800">
              <Pagination className='pagination-dark mg-b-0'>
                <Pagination.Prev><i className="icon ion-ios-arrow-back"></i></Pagination.Prev>
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next><i className="icon ion-ios-arrow-forward"></i></Pagination.Next>
              </Pagination>
            </div>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Color Variant Pagination</div>
            <p className="mg-b-20">Below are the available colored pagination variants.</p>

            <div className="row row-sm">
              <div className="col-sm-6 col-lg-4">
                <Pagination className='pagination-primary'>
                  <Pagination.Prev><i className="icon ion-ios-arrow-back"></i></Pagination.Prev>
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Next><i className="icon ion-ios-arrow-forward"></i></Pagination.Next>
                </Pagination>
              </div>{/* col-4 */}
              <div className="col-sm-6 col-lg-4 mg-sm-t-0">
                <Pagination className='pagination-success'>
                  <Pagination.Prev><i className="icon ion-ios-arrow-back"></i></Pagination.Prev>
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Next><i className="icon ion-ios-arrow-forward"></i></Pagination.Next>
                </Pagination>
              </div>{/* col-4 */}
            </div>{/* row */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Circled Pagination</div>
            <p className="mg-b-20">Below are basic pagination navigation in circle.</p>

              <Pagination className='pagination-circled'>
                <Pagination.Prev><i className="icon ion-ios-arrow-back"></i></Pagination.Prev>
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next><i className="icon ion-ios-arrow-forward"></i></Pagination.Next>
              </Pagination>

            <div className="mg-lg-b-30"></div>

          </div>{/* az-content-body */}
        </div>{/* container */}
      </div>
    )
  }
}

export default Paginations
