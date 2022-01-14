import React, { Component } from 'react';
import ComponentsSidebar from '../shared/ComponentsSidebar';
import {Button, Popover, OverlayTrigger} from 'react-bootstrap';

export class Popovers extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>UI Elements</span>
              <span>Popover</span>
            </div>
            <h2 className="az-content-title">Popover</h2>

            <div className="az-content-label mg-b-5">Default Popover</div>
            <p className="mg-b-20">Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site.</p>

            <div className="az-content-label az-content-label-sm mg-b-10">Live Example</div>
            <div className="pd-20 bg-gray-200">
              <div className="row row-sm tx-center">
                <div className="col-sm-6 col-lg-3">
                  <OverlayTrigger
                    trigger="click"
                    placement="top"
                    overlay={
                      <Popover id="popover-basic">
                        <Popover.Title as="h3">Popover Top</Popover.Title>
                        <Popover.Content>
                          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <Button variant="secondary">Click me</Button>
                  </OverlayTrigger>
                </div>{/* col-3 */}
                <div className="col-sm-6 col-lg-3 mg-t-30 mg-sm-t-0">
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={
                      <Popover id="popover-basic">
                        <Popover.Title as="h3">Popover Bottom</Popover.Title>
                        <Popover.Content>
                          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <Button variant="secondary">Click me</Button>
                  </OverlayTrigger>
                </div>{/* col-3 */}
                <div className="col-sm-6 col-lg-3 mg-t-30 mg-lg-t-0">
                  <OverlayTrigger
                    trigger="click"
                    placement="left"
                    overlay={
                      <Popover id="popover-basic">
                        <Popover.Title as="h3">Popover Left</Popover.Title>
                        <Popover.Content>
                          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <Button variant="secondary">Click me</Button>
                  </OverlayTrigger>
                </div>{/* col-3 */}
                <div className="col-sm-6 col-lg-3 mg-t-30 mg-lg-t-0">
                  <OverlayTrigger
                    trigger="click"
                    placement="right"
                    overlay={
                      <Popover id="popover-basic">
                        <Popover.Title as="h3">Popover Right</Popover.Title>
                        <Popover.Content>
                          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <Button variant="secondary">Click me</Button>
                  </OverlayTrigger>
                </div>{/* col-3 */}
              </div>{/* row */}
            </div>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Colored Head Popover</div>
            <p className="mg-b-20">A demonstration of colored title background of popover available in all four directions.</p>

            <div className="az-content-label az-content-label-sm mg-b-10">Live Example</div>
            <div className="pd-20 bg-gray-200">
              <div className="row row-sm tx-center">
                <div className="col-sm-6 col-lg-3">
                  <OverlayTrigger
                    trigger="click"
                    placement="top"
                    overlay={
                      <Popover id="popover-basic" className="popover-head-primary">
                        <Popover.Title as="h3">Popover</Popover.Title>
                        <Popover.Content>
                          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <Button variant="secondary">Click me</Button>
                  </OverlayTrigger>
                </div>{/* col-3 */}
                <div className="col-sm-6 col-lg-3 mg-t-30 mg-sm-t-0">
                  <OverlayTrigger
                    trigger="click"
                    placement="top"
                    overlay={
                      <Popover id="popover-basic" className="popover-head-secondary">
                        <Popover.Title as="h3">Popover</Popover.Title>
                        <Popover.Content>
                          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <Button variant="secondary">Click me</Button>
                  </OverlayTrigger>
                </div>{/* col-3 */}
              </div>{/* row */}
            </div>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Full Colored Popover</div>
            <p className="mg-b-20">A demonstration of colored body background of popover available in all four directions.</p>

            <div className="az-content-label az-content-label-sm mg-b-10">Live Example</div>
            <div className="pd-20 bg-gray-200">
              <div className="row row-sm tx-center">
                <div className="col-sm-6 col-lg-3">
                  <OverlayTrigger
                    trigger="click"
                    placement="top"
                    overlay={
                      <Popover id="popover-basic" className="popover-primary">
                        <Popover.Title as="h3">Popover</Popover.Title>
                        <Popover.Content>
                          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <Button variant="secondary">Click me</Button>
                  </OverlayTrigger>
                </div>{/* col-3 */}
                <div className="col-sm-6 col-lg-3 mg-t-30 mg-sm-t-0">
                  <OverlayTrigger
                    trigger="click"
                    placement="top"
                    overlay={
                      <Popover id="popover-basic" className="popover-secondary">
                        <Popover.Title as="h3">Popover</Popover.Title>
                        <Popover.Content>
                          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <Button variant="secondary">Click me</Button>
                  </OverlayTrigger>
                </div>{/* col-3 */}
              </div>{/* row */}
            </div>

            <div className="mg-lg-b-30"></div>

          </div>{/* az-content-body */}
        </div>{/* container */}
      </div>
    )
  }
}

export default Popovers
