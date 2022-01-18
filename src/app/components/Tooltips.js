import React, { Component } from "react";
import ComponentsSidebar from "../shared/ComponentsSidebar";
import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";

export class Tooltips extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar />
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>UI Elements</span>
              <span>Tooltip</span>
            </div>
            <h2 className="az-content-title">Tooltip</h2>

            <div className="az-content-label mg-b-5">Default Tooltip</div>
            <p className="mg-b-20">
              Four options are available: top, right, bottom, and left aligned.
            </p>

            <div className="az-content-label az-content-label-sm mg-b-10">
              Live Example
            </div>
            <div className="bg-gray-200 pd-20">
              <div className="row row-sm tx-center">
                <div className="col-sm-6 col-lg-3">
                  <OverlayTrigger
                    key={"top"}
                    placement={"top"}
                    overlay={
                      <Tooltip id={`tooltip-${"top"}`}>
                        Tooltip on <strong>{"top"}</strong>.
                      </Tooltip>
                    }
                  >
                    <Button variant="secondary">Tooltip on {"top"}</Button>
                  </OverlayTrigger>
                </div>
                {/* col-3 */}
                <div className="col-sm-6 col-lg-3 mg-t-30 mg-sm-t-0">
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>
                        Tooltip on <strong>{"bottom"}</strong>.
                      </Tooltip>
                    }
                  >
                    <Button variant="secondary">Tooltip on {"bottom"}</Button>
                  </OverlayTrigger>
                </div>
                {/* col-3 */}
                <div className="col-sm-6 col-lg-3 mg-t-30 mg-lg-t-0">
                  <OverlayTrigger
                    key={"left"}
                    placement={"left"}
                    overlay={
                      <Tooltip id={`tooltip-${"left"}`}>
                        Tooltip on <strong>{"left"}</strong>.
                      </Tooltip>
                    }
                  >
                    <Button variant="secondary">Tooltip on {"left"}</Button>
                  </OverlayTrigger>
                </div>
                {/* col-3 */}
                <div className="col-sm-6 col-lg-3 mg-t-30 mg-lg-t-0">
                  <OverlayTrigger
                    key={"right"}
                    placement={"right"}
                    overlay={
                      <Tooltip id={`tooltip-${"right"}`}>
                        Tooltip on <strong>{"right"}</strong>.
                      </Tooltip>
                    }
                  >
                    <Button variant="secondary">Tooltip on {"right"}</Button>
                  </OverlayTrigger>
                </div>
                {/* col-3 */}
              </div>
              {/* row */}
            </div>

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Colored Tooltip</div>
            <p className="mg-b-20">
              Colored tooltip. Four options are available: top, right, bottom,
              and left aligned.
            </p>

            <div className="az-content-label az-content-label-sm mg-b-10">
              Live Example
            </div>
            <div className="bg-gray-200 pd-20">
              <div className="row row-sm tx-center">
                <div className="col-sm-6 col-lg-3">
                  <OverlayTrigger
                    key={"top"}
                    placement={"top"}
                    overlay={
                      <Tooltip
                        className="tooltip-primary"
                        id={`tooltip-${"top"}`}
                      >
                        Tooltip on <strong>{"top"}</strong>.
                      </Tooltip>
                    }
                  >
                    <Button variant="secondary">Tooltip on {"top"}</Button>
                  </OverlayTrigger>
                </div>
                {/* col-3 */}
                <div className="col-sm-6 col-lg-3 mg-t-30 mg-sm-t-0">
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={
                      <Tooltip
                        className="tooltip-primary"
                        id={`tooltip-${"bottom"}`}
                      >
                        Tooltip on <strong>{"bottom"}</strong>.
                      </Tooltip>
                    }
                  >
                    <Button variant="secondary">Tooltip on {"bottom"}</Button>
                  </OverlayTrigger>
                </div>
                {/* col-3 */}
                <div className="col-sm-6 col-lg-3 mg-t-30 mg-lg-t-0">
                  <OverlayTrigger
                    key={"left"}
                    placement={"left"}
                    overlay={
                      <Tooltip
                        className="tooltip-primary"
                        id={`tooltip-${"left"}`}
                      >
                        Tooltip on <strong>{"left"}</strong>.
                      </Tooltip>
                    }
                  >
                    <Button variant="secondary">Tooltip on {"left"}</Button>
                  </OverlayTrigger>
                </div>
                {/* col-3 */}
                <div className="col-sm-6 col-lg-3 mg-t-30 mg-lg-t-0">
                  <OverlayTrigger
                    key={"right"}
                    placement={"right"}
                    overlay={
                      <Tooltip
                        className="tooltip-primary"
                        id={`tooltip-${"right"}`}
                      >
                        Tooltip on <strong>{"right"}</strong>.
                      </Tooltip>
                    }
                  >
                    <Button variant="secondary">Tooltip on {"right"}</Button>
                  </OverlayTrigger>
                </div>
                {/* col-3 */}
              </div>
              {/* row */}
            </div>

            <table className="table az-table-reference">
              <thead>
                <tr>
                  <th className="wd-40p">className Reference</th>
                  <th className="wd-60p">Color</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code className="pd-0 bg-transparent">
                      className="tooltip-[color]"
                    </code>
                  </td>
                  <td>primary | secondary</td>
                </tr>
              </tbody>
            </table>

            <div className="mg-lg-b-30"></div>
          </div>
          {/* az-content-body */}
        </div>
        {/* container */}
      </div>
    );
  }
}

export default Tooltips;
