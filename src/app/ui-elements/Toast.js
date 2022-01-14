import React, { Component } from 'react';
import ComponentsSidebar from '../shared/ComponentsSidebar';

export class Toast extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>UI Elements</span>
              <span>Toast</span>
            </div>
            <h2 className="az-content-title">Toast</h2>

            <div className="az-content-label mg-b-5">Basic Example</div>
            <p className="mg-b-20">Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.</p>

            <div className="demo-static-toast">
              <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                  <h6 className="tx-inverse tx-14 mg-b-0 mg-r-auto">Notification</h6>
                  <small>11 mins ago</small>
                  <button type="button" className="ml-2 mb-1 close tx-normal" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="toast-body">
                  Hello, world! This is a toast message.
                </div>
              </div>
            </div>{/* demo-static-toast */}

            <hr className="mg-y-40"/>

            <div className="az-content-label mg-b-5">Translucent</div>
            <p className="mg-b-20">Toasts are slightly translucent, too, so they blend over whatever they might appear over.</p>

            <div className="bg-dark pd-20">
              <div className="demo-static-toast">
                <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                  <div className="toast-header">
                    <h6 className="tx-inverse tx-14 mg-b-0 mg-r-auto">Notification</h6>
                    <small>11 mins ago</small>
                    <button type="button" className="ml-2 mb-1 close tx-normal" data-dismiss="toast" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="toast-body">
                    Hello, world! This is a toast message.
                  </div>
                </div>
              </div>{/* demo-static-toast */}
            </div>

            <hr className="mg-y-40"/>

            <div className="az-content-label mg-b-5">Stacking</div>
            <p className="mg-b-20">When you have multiple toasts, we default to vertiaclly stacking them in a readable manner.</p>

            <div className="pd-20 bg-dark">
              <div className="demo-static-toast">
                <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                  <div className="toast-header">
                    <h6 className="tx-inverse tx-14 mg-b-0 mg-r-auto">Notification</h6>
                    <small className="text-muted">Just now</small>
                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="toast-body">
                    See? Just like this.
                  </div>
                </div>{/* toast */}

                <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                  <div className="toast-header">
                    <h6 className="tx-inverse tx-14 mg-b-0 mg-r-auto">Notification</h6>
                    <small>11 mins ago</small>
                    <button type="button" className="ml-2 mb-1 close tx-normal" data-dismiss="toast" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="toast-body">
                    Hello, world! This is a toast message.
                  </div>
                </div>
              </div>{/* demo-static-toast */}
            </div>

            <hr className="mg-y-40"/>

            <div className="az-content-label mg-b-5">Placement</div>
            <p className="mg-b-20">Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle.</p>

            <div className="bg-dark pd-20 ht-150 pos-relative">
              <div className="demo-static-toast pos-absolute t-10 r-10">
                <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                  <div className="toast-header">
                    <h6 className="tx-inverse tx-14 mg-b-0 mg-r-auto">Notification</h6>
                    <small>11 mins ago</small>
                    <button type="button" className="ml-2 mb-1 close tx-normal" data-dismiss="toast" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="toast-body">
                    Hello, world! This is a toast message.
                  </div>
                </div>
              </div>{/* demo-static-toast */}
            </div>

            <div className="ht-40"></div>

          </div>{/* az-content-body */}
        </div>{/* container */}
      </div>
    )
  }
}

export default Toast
