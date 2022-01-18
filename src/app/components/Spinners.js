import React, { Component } from 'react';
import ComponentsSidebar from '../shared/ComponentsSidebar';

export class Spinners extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>UI Elements</span>
              <span>Spinners</span>
            </div>
            <h2 className="az-content-title">Spinners</h2>

            <div className="az-content-label mg-b-5">Border Spinners</div>
            <p className="mg-b-20">Use the border spinners for a lightweight loading indicator.</p>

            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>

            <hr className="mg-y-40"/>

            <div className="az-content-label mg-b-5">Border Colors</div>
            <p className="mg-b-20">You can use any of our text color utilities on the standard spinner.</p>

            <div>
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-border text-secondary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-border text-danger" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-border text-warning" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-border text-info" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-border text-light" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-border text-dark" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>

            <hr className="mg-y-40"/>

            <div className="az-content-label mg-b-5">Growing Spinner</div>
            <p className="mg-b-20">If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!</p>

            <div className="spinner-grow" role="status">
              <span className="sr-only">Loading...</span>
            </div>

            <hr className="mg-y-40"/>

            <div className="az-content-label mg-b-5">Growing Color</div>
            <p className="mg-b-20">If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!</p>

            <div>
              <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-secondary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-danger" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-warning" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-info" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-light" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-dark" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>

            <hr className="mg-y-40"/>

            <div className="az-content-label mg-b-5">Alignment</div>
            <p className="mg-b-20">Use flexbox utilities or text alignment utilities to place spinners exactly where you need them in any situation.</p>

            <div>
              <div className="text-center mg-b-20">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>

              <div className="text-right">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>

            <hr className="mg-y-40"/>

            <div className="az-content-label mg-b-5">Size</div>
            <p className="mg-b-20">Add <code>.spinner-border-sm</code> and <code>.spinner-grow-sm</code> to make a smaller spinner that can quickly be used within other components.</p>

            <div>
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow spinner-grow-sm" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>

            <hr className="mg-y-40"/>

            <div className="az-content-label mg-b-5">Button</div>
            <p className="mg-b-20">Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.</p>

            <div>
              <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span className="sr-only">Loading...</span>
              </button>
              <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
              </button>
            </div>

            <div className="ht-40"></div>

          </div>{/* az-content-body */}
        </div>{/* container */}
      </div>
    )
  }
}

export default Spinners
