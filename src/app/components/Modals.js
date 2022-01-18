import React, { Component } from "react";
import ComponentsSidebar from "../shared/ComponentsSidebar";
import { Button, Modal } from "react-bootstrap";

export class Modals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBasicModal: false,
      showSmallModal: false,
      showLargeModal: false,
      showAlertModal1: false,
      showAlertModal2: false,
      animationModal: {
        show: false,
        className: ""
      }
    };
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(type) {
    if (type === "basic") {
      this.setState({ showBasicModal: false });
    } else if (type === "small") {
      this.setState({ showSmallModal: false });
    } else if (type === "large") {
      this.setState({ showLargeModal: false });
    } else if (type === "alert1") {
      this.setState({ showAlertModal1: false });
    } else if (type === "alert2") {
      this.setState({ showAlertModal2: false });
    }
  }

  showAnimationModal(animClassName) {
    console.log("clicked");
    // this.state.animationModal.className = animClassName;
    this.setState({
      animationModal: { ...this.state.animationModal, show: true }
    });
  }

  closeAnimationModal() {
    this.setState({
      animationModal: { ...this.state.animationModal, show: false }
    });
  }

  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar />
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>UI Elements</span>
              <span>Modals</span>
            </div>
            <h2 className="az-content-title">Modals</h2>

            <div className="az-content-label mg-b-5">Basic Modal</div>
            <p className="mg-b-20">
              Below is the static example of the basic modal.
            </p>

            <div className="pd-20 bg-gray-800">
              {/* this modal is static modal for presentation purpose. */}
              <Modal.Dialog>
                <Modal.Header closeButton>
                  <Modal.Title>Message Preview</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <h6>Why We Use Electoral College, Not Popular Vote</h6>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.{" "}
                  </p>
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="indigo">Save changes</Button>
                  <Button variant="outline-light">Close</Button>
                </Modal.Footer>
              </Modal.Dialog>
            </div>
            {/* pd-y-50 */}
            <div className="tx-center pd-y-20 bg-gray-200">
              <Button
                onClick={() => this.setState({ showBasicModal: true })}
                variant="primary"
                className="btn-sm"
              >
                View Live Demo
              </Button>
              <Modal
                show={this.state.showBasicModal}
                onHide={() => this.closeModal("basic")}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Message Preview</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <h6>Why We Use Electoral College, Not Popular Vote</h6>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.{" "}
                  </p>
                </Modal.Body>

                <Modal.Footer>
                  <Button
                    variant="indigo"
                    onClick={() => this.closeModal("basic")}
                  >
                    Save changes
                  </Button>
                  <Button
                    variant="outline-light"
                    onClick={() => this.closeModal("basic")}
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            {/* pd-y-30 */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Small Modal</div>
            <p className="mg-b-20">
              Below is the static example of small modal.
            </p>

            <div className="pd-20 bg-gray-800">
              <Modal.Dialog size={"sm"}>
                <Modal.Header closeButton>
                  <Modal.Title>Message Preview</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <h6>Why We Use Electoral College, Not Popular Vote</h6>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.{" "}
                  </p>
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="indigo">Save changes</Button>
                  <Button variant="outline-light">Close</Button>
                </Modal.Footer>
              </Modal.Dialog>
            </div>
            {/* modal-wrapper-demo */}
            <div className="tx-center pd-y-20 bg-gray-200">
              <Button
                onClick={() => this.setState({ showSmallModal: true })}
                variant="primary"
                className="btn-sm"
              >
                View Live Demo
              </Button>
              <Modal
                show={this.state.showSmallModal}
                size={"sm"}
                onHide={() => this.closeModal("small")}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Message Preview</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <h6>Why We Use Electoral College, Not Popular Vote</h6>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.{" "}
                  </p>
                </Modal.Body>

                <Modal.Footer>
                  <Button
                    variant="indigo"
                    onClick={() => this.closeModal("small")}
                  >
                    Save changes
                  </Button>
                  <Button
                    variant="outline-light"
                    onClick={() => this.closeModal("small")}
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            {/* pd-y-30 */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Large Modal</div>
            <p className="mg-b-20">
              Below is the static example of large modal.
            </p>

            <div className="pd-20 bg-gray-800">
              {/* this modal is static modal for presentation purpose. */}
              <Modal.Dialog size={"lg"}>
                <Modal.Header closeButton>
                  <Modal.Title>Message Preview</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <h6>Why We Use Electoral College, Not Popular Vote</h6>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.{" "}
                  </p>
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="indigo">Save changes</Button>
                  <Button variant="outline-light">Close</Button>
                </Modal.Footer>
              </Modal.Dialog>
            </div>
            {/* modal-wrapper-demo */}
            <div className="tx-center pd-y-20 bg-gray-200">
              <Button
                onClick={() => this.setState({ showLargeModal: true })}
                variant="primary"
                className="btn-sm"
              >
                View Live Demo
              </Button>
              <Modal
                show={this.state.showLargeModal}
                size={"lg"}
                onHide={() => this.closeModal("large")}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Message Preview</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <h6>Why We Use Electoral College, Not Popular Vote</h6>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.{" "}
                  </p>
                </Modal.Body>

                <Modal.Footer>
                  <Button
                    variant="indigo"
                    onClick={() => this.closeModal("large")}
                  >
                    Save changes
                  </Button>
                  <Button
                    variant="outline-light"
                    onClick={() => this.closeModal("large")}
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            {/* pd-y-30 */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Modal Alert Messages</div>
            <p className="mg-b-20">
              Below is the static example of modal alert messages.
            </p>

            <div className="pd-20 bg-gray-800">
              <Modal.Dialog>
                <Modal.Body className="tx-center">
                  <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <i className="icon ion-ios-checkmark-circle-outline tx-100 tx-success lh-1 mg-t-20 d-inline-block"></i>
                  <h4 className="tx-success mg-b-20">Congratulations!</h4>
                  <p className="mg-b-20 mg-x-20">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                  <button type="button" className="btn btn-success pd-x-25">
                    Continue
                  </button>
                </Modal.Body>
              </Modal.Dialog>
            </div>
            {/* modal-wrapper-demo */}
            <div className="tx-center pd-y-20 bg-gray-200">
              <Button
                onClick={() => this.setState({ showAlertModal1: true })}
                variant="primary"
                className="btn-sm"
              >
                View Live Demo
              </Button>
              <Modal
                show={this.state.showAlertModal1}
                onHide={() => this.closeModal("alert1")}
              >
                <Modal.Body className="tx-center">
                  <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={() => this.closeModal("alert1")}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <i className="icon ion-ios-checkmark-circle-outline tx-100 tx-success lh-1 mg-t-20 d-inline-block"></i>
                  <h4 className="tx-success mg-b-20">Congratulations!</h4>
                  <p className="mg-b-20 mg-x-20">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                  <button
                    type="button"
                    className="btn btn-success pd-x-25"
                    onClick={() => this.closeModal("alert1")}
                  >
                    Continue
                  </button>
                </Modal.Body>
              </Modal>
            </div>
            {/* modal-footer-demo */}

            <div className="pd-20 bg-gray-800 mg-t-20">
              <Modal.Dialog>
                <Modal.Body className="tx-center">
                  <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <i className="icon icon ion-ios-close-circle-outline tx-100 tx-danger lh-1 mg-t-20 d-inline-block"></i>
                  <h4 className="tx-danger mg-b-20">
                    Error: Cannot process your entry!
                  </h4>
                  <p className="mg-b-20 mg-x-20">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                  <button type="button" className="btn btn-danger pd-x-25">
                    Continue
                  </button>
                </Modal.Body>
              </Modal.Dialog>
            </div>
            {/* modal-wrapper-demo */}
            <div className="tx-center pd-y-20 bg-gray-200">
              <Button
                onClick={() => this.setState({ showAlertModal2: true })}
                variant="primary"
                className="btn-sm"
              >
                View Live Demo
              </Button>
              <Modal
                show={this.state.showAlertModal2}
                onHide={() => this.closeModal("alert2")}
              >
                <Modal.Body className="tx-center">
                  <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={() => this.closeModal("alert2")}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <i className="icon icon ion-ios-close-circle-outline tx-100 tx-danger lh-1 mg-t-20 d-inline-block"></i>
                  <h4 className="tx-danger mg-b-20">
                    Error: Cannot process your entry!
                  </h4>
                  <p className="mg-b-20 mg-x-20">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                  <button
                    type="button"
                    className="btn btn-danger pd-x-25"
                    onClick={() => this.closeModal("alert2")}
                  >
                    Continue
                  </button>
                </Modal.Body>
              </Modal>
            </div>
            {/* modal-footer-demo */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">
              Modal Animation Effects
            </div>
            <p className="mg-b-20">
              Below are different kind of effects to choose from.
            </p>

            <div className="row row-sm">
              <div className="col-sm-6 col-md-4 col-xl-3">
                <Button
                  onClick={() => this.showAnimationModal("effect-scale")}
                  variant="dark btn-block"
                >
                  Scale
                </Button>
              </div>
              {/* col-3 */}
              <div className="col-sm-6 col-md-4 col-xl-3">
                <Button
                  onClick={() =>
                    this.showAnimationModal("effect-slide-in-right")
                  }
                  variant="dark btn-block"
                >
                  Slide In Right
                </Button>
              </div>
              {/* col-3 */}
              <div className="col-sm-6 col-md-4 col-xl-3 mg-t-20 mg-md-t-0">
                <Button
                  onClick={() => {
                    this.showAnimationModal("effect-slide-in-bottom");
                  }}
                  variant="dark btn-block"
                >
                  Slide In Bottom
                </Button>
              </div>
              {/* col-3 */}
              <div className="col-sm-6 col-md-4 col-xl-3 mg-t-20 mg-xl-t-0">
                <Button
                  onClick={() => {
                    this.showAnimationModal("effect-newspaper");
                  }}
                  variant="dark btn-block"
                >
                  Newspaper
                </Button>
              </div>
              {/* col-3 */}
              <div className="col-sm-6 col-md-4 col-xl-3 mg-t-20">
                <Button
                  onClick={() => {
                    this.showAnimationModal("effect-fall");
                  }}
                  variant="dark btn-block"
                >
                  Fall
                </Button>
              </div>
              {/* col-3 */}
              <div className="col-sm-6 col-md-4 col-xl-3 mg-t-20">
                <Button
                  onClick={() => {
                    this.showAnimationModal("effect-flip-horizontal");
                  }}
                  variant="dark btn-block"
                >
                  Flip Horizontal
                </Button>
              </div>
              {/* col-3 */}
              <div className="col-sm-6 col-md-4 col-xl-3 mg-t-20">
                <Button
                  onClick={() => {
                    this.showAnimationModal("effect-flip-vertical");
                  }}
                  variant="dark btn-block"
                >
                  Flip Vertical
                </Button>
              </div>
              {/* col-3 */}
              <div className="col-sm-6 col-md-4 col-xl-3 mg-t-20">
                <Button
                  onClick={() => {
                    this.showAnimationModal("effect-super-scaled");
                  }}
                  variant="dark btn-block"
                >
                  Super Scaled
                </Button>
              </div>
              {/* col-3 */}
              <div className="col-sm-6 col-md-4 col-xl-3 mg-t-20">
                <Button
                  onClick={() => {
                    this.showAnimationModal("effect-sign");
                  }}
                  variant="dark btn-block"
                >
                  Sign
                </Button>
              </div>
              {/* col-3 */}
              <div className="col-sm-6 col-md-4 col-xl-3 mg-t-20">
                <Button
                  onClick={() => {
                    this.showAnimationModal("effect-rotate-bottom");
                  }}
                  variant="dark btn-block"
                >
                  Rotate Bottom
                </Button>
              </div>
              {/* col-3 */}
              <div className="col-sm-6 col-md-4 col-xl-3 mg-t-20">
                <Button
                  onClick={() => {
                    this.showAnimationModal("effect-rotate-left");
                  }}
                  variant="dark btn-block"
                >
                  Rotate Left
                </Button>
              </div>
              {/* col-3 */}
              <div className="col-sm-6 col-md-4 col-xl-3 mg-t-20">
                <Button
                  onClick={() => {
                    this.showAnimationModal("effect-just-me");
                  }}
                  variant="dark btn-block"
                >
                  Just Me
                </Button>
              </div>
              {/* col-3 */}
            </div>
            {/* row */}

            {/* Animation Modal */}
            <Modal
              show={this.state.animationModal.show}
              className={this.state.animationModal.className}
              onHide={() => this.closeAnimationModal()}
            >
              <Modal.Header closeButton>
                <Modal.Title>Message Preview</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.{" "}
                </p>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  variant="indigo"
                  onClick={() => this.closeAnimationModal()}
                >
                  Save changes
                </Button>
                <Button
                  variant="outline-light"
                  onClick={() => this.closeAnimationModal()}
                >
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            {/* Animation Modal */}

            <table className="table az-table-reference">
              <thead>
                <tr>
                  <th className="wd-40p">Class Reference</th>
                  <th className="wd-60p">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code className="pd-0 bg-transparent">
                      className="modal fade effect-[value]"
                    </code>
                  </td>
                  <td>
                    scale | slide-in-right | slide-in-bottom | newspaper | fall
                    | flip-horizontal | flip-vertical | super-scaled | sign |
                    rotate-bottom | rotate-left | just-me
                  </td>
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

export default Modals;
