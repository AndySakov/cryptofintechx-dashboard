import React, { Component } from 'react';
import ComponentsSidebar from '../shared/ComponentsSidebar';
import {Carousel} from 'react-bootstrap';

export class Carousels extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>UI Elements</span>
              <span>Carousel</span>
            </div>
            <h2 className="az-content-title">Carousel</h2>

            <div className="az-content-label mg-b-5">Slides Only</div>
            <p className="mg-b-20">Here’s a carousel with slides only. Note the presence of the .d-block and .w-100 on carousel images to prevent browser default image alignment.</p>

            <div className="wd-lg-80p">

              <Carousel controls={false} indicators={false}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={ require("../../assets/images/img11.jpg") }
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={ require("../../assets/images/img12.jpg") }
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={ require("../../assets/images/img13.jpg") }
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>

            <hr className="mg-t-50 mg-b-40"/>

            <div className="az-content-label mg-b-5">With Controls</div>
            <p className="mg-b-20">Adding in the previous and next controls.</p>

            <div className="wd-lg-80p">
              <Carousel controls={true} indicators={false}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={ require("../../assets/images/img11.jpg") }
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={ require("../../assets/images/img12.jpg") }
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={ require("../../assets/images/img13.jpg") }
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>

            <hr className="mg-t-50 mg-b-40"/>

            <div className="az-content-label mg-b-5">With Indicator</div>
            <p className="mg-b-20">You can also add the indicators to the carousel, alongside the controls, too.</p>

            <div className="wd-lg-80p">
              <Carousel controls={true} indicators={true}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={ require("../../assets/images/img11.jpg") }
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={ require("../../assets/images/img12.jpg") }
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={ require("../../assets/images/img13.jpg") }
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>

            <hr className="mg-t-50 mg-b-40"/>

            <div className="az-content-label mg-b-5">With Caption</div>
            <p className="mg-b-20">Add captions to your slides easily with the <code>.carousel-caption</code> element within any <code>.carousel-item.</code></p>

            <div className="wd-lg-80p">
              <Carousel>
                <Carousel.Item>
                  <img src={ require("../../assets/images/img11.jpg") } className="d-block w-100 op-3" alt="..."/>
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={ require("../../assets/images/img12.jpg") } className="d-block w-100 op-3" alt="..."/>
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={ require("../../assets/images/img13.jpg") } className="d-block w-100 op-3" alt="..."/>
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>

            <hr className="mg-t-50 mg-b-40"/>

            <div className="az-content-label mg-b-5">Crossfade</div>
            <p className="mg-b-20">Add fade transition to your carousel to animate slides with a fade transition instead of a slide.</p>

            <div className="wd-lg-80p">
              <Carousel fade={true}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={ require("../../assets/images/img11.jpg") }
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={ require("../../assets/images/img12.jpg") }
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={ require("../../assets/images/img13.jpg") }
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>

            <div className="ht-40"></div>

          </div>{/* az-content-body */}
        </div>{/* container */}
      </div>
    )
  }
}

export default Carousels
