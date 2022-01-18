import React, { Component } from "react";
import ComponentsSidebar from "../shared/ComponentsSidebar";

export class Cards extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar />
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>UI Elements</span>
              <span>Cards</span>
            </div>
            <h2 className="az-content-title">Cards</h2>

            <div className="az-content-label mg-b-5">Card Body</div>
            <p className="mg-b-20">An example some text within a card body.</p>

            <div className="row row-sm">
              <div className="col-md">
                <div className="card card-body bg-gray-200 bd-0">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Lorem ipsum dolor sit
                    amet consictetur...
                  </p>
                </div>
                {/* card */}
              </div>
              {/* col */}
              <div className="col-md mg-t-20 mg-md-t-0">
                <div className="card card-body bg-indigo tx-white bd-0">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Lorem ipsum dolor sit
                    amet consictetur...
                  </p>
                </div>
                {/* card */}
              </div>
              {/* col */}
              <div className="col-md mg-t-20 mg-md-t-0">
                <div className="card card-body bg-primary tx-white bd-0">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Lorem ipsum dolor sit
                    amet consictetur...
                  </p>
                </div>
                {/* card */}
              </div>
              {/* col */}
            </div>
            {/* row */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">
              Card Titles, Text and Links
            </div>
            <p className="mg-b-20">
              An example of using card title. In the same way, links are added
              and placed next to each other by adding link tag.
            </p>

            <div className="row row-sm">
              <div className="col-md">
                <div className="card bg-gray-200 bd-0">
                  <div className="card-body">
                    <h5 className="card-title tx-dark tx-medium mg-b-10">
                      The Card Title
                    </h5>
                    <p className="card-subtitle mg-b-15">
                      This is the card subtitle
                    </p>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#/" className="card-link">
                      Card link
                    </a>
                    <a href="#/" className="card-link">
                      Another link
                    </a>
                  </div>
                </div>
                {/* card */}
              </div>
              {/* col */}
              <div className="col-md mg-t-20 mg-md-t-0">
                <div className="card bg-indigo tx-white bd-0">
                  <div className="card-body">
                    <h5 className="card-title tx-white tx-medium mg-b-10">
                      The Card Title
                    </h5>
                    <p className="card-subtitle mg-b-15 tx-white-8">
                      This is the card subtitle
                    </p>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#/" className="card-link tx-white-7 hover-white">
                      Card link
                    </a>
                    <a href="#/" className="card-link tx-white-7 hover-white">
                      Another link
                    </a>
                  </div>
                </div>
                {/* card */}
              </div>
              {/* col */}
              <div className="col-md mg-t-20 mg-md-t-0">
                <div className="card bg-gray-800 tx-white bd-0">
                  <div className="card-body">
                    <h5 className="card-title tx-white tx-medium mg-b-10">
                      The Card Title
                    </h5>
                    <p className="card-subtitle tx-white-8 mg-b-15">
                      This is the card subtitle
                    </p>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#/" className="card-link tx-white-7 hover-white">
                      Card link
                    </a>
                    <a href="#/" className="card-link tx-white-7 hover-white">
                      Another link
                    </a>
                  </div>
                </div>
                {/* card */}
              </div>
              {/* col */}
            </div>
            {/* row */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Top Image Card</div>
            <p className="mg-b-20">
              Places an image to the top, bottom or overlay of the card.
            </p>

            <div className="row row-sm">
              <div className="col-md-6 col-lg-4">
                <div className="card bd-0">
                  <img
                    className="img-fluid"
                    src={require("../../assets/images/img11.jpg")}
                    alt="icons"
                  />
                  <div className="card-body bd bd-t-0">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                {/* card */}
              </div>
              {/* col-4 */}
              <div className="col-md-6 col-lg-4 mg-t-20 mg-md-t-0">
                <div className="card bd-0">
                  <img
                    className="img-fluid"
                    src={require("../../assets/images/img12.jpg")}
                    alt="icons"
                  />
                  <div className="card-body bd bd-t-0">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                {/* card */}
              </div>
              {/* col-4 */}
            </div>
            {/* row */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Bottom Image Card</div>
            <p className="mg-b-20">
              Places an image to the top, bottom or overlay of the card.
            </p>

            <div className="row row-sm">
              <div className="col-md-6 col-lg-4">
                <div className="card bd-0">
                  <div className="card-body bd bd-b-0">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                  {/* card-body */}
                  <img
                    className="img-fluid"
                    src={require("../../assets/images/img11.jpg")}
                    alt="icons"
                  />
                </div>
                {/* card */}
              </div>
              {/* col-4 */}
              <div className="col-md-6 col-lg-4 mg-t-20 mg-md-t-0">
                <div className="card bd-0">
                  <div className="card-body bd bd-b-0">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                  {/* card-body */}
                  <img
                    className="img-fluid"
                    src={require("../../assets/images/img12.jpg")}
                    alt="icons"
                  />
                </div>
                {/* card */}
              </div>
              {/* col-4 */}
            </div>
            {/* row */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Image Content Overlay</div>
            <p className="mg-b-20">
              Turn an image into a card background and overlay your card’s text.
            </p>

            <div className="row row-sm">
              <div className="col-md">
                <div className="card bd-0">
                  <img
                    className="img-fluid"
                    src={require("../../assets/images/img13.jpg")}
                    alt="icons"
                  />
                  <div className="card-img-overlay pd-30 bg-black-4 d-flex flex-column justify-content-center">
                    <p className="tx-white tx-medium mg-b-15">
                      The Cat Prisoner
                    </p>
                    <p className="tx-white-7 tx-13">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. Lorem ipsum dolor
                      sit amet consictetur...
                    </p>
                    <p className="tx-13 mg-b-0">
                      <a href="#/" className="tx-white">
                        Read more
                      </a>
                    </p>
                  </div>
                  {/* card-img-overlay */}
                </div>
                {/* card */}
              </div>
              {/* col */}
              <div className="col-md mg-t-20 mg-md-t-0">
                <div className="card bd-0">
                  <img
                    className="card-img img-fluid"
                    src={require("../../assets/images/img14.jpg")}
                    alt="icons"
                  />
                  <div className="card-img-overlay pd-30 bg-black-4 d-flex flex-column justify-content-center">
                    <p className="tx-white tx-medium mg-b-15">The Ghost Town</p>
                    <p className="tx-white-7 tx-13">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. Lorem ipsum dolor
                      sit amet consictetur...
                    </p>
                    <p className="tx-13 mg-b-0">
                      <a href="#/" className="tx-white">
                        Read more
                      </a>
                    </p>
                  </div>
                  {/* card-img-overlay */}
                </div>
                {/* card */}
              </div>
              {/* col */}
              <div className="col-md mg-t-20 mg-md-t-0">
                <div className="card bd-0">
                  <img
                    className="card-img img-fluid"
                    src={require("../../assets/images/img15.jpg")}
                    alt="icons"
                  />
                  <div className="card-img-overlay pd-30 bg-black-4 d-flex flex-column justify-content-center">
                    <p className="tx-white tx-medium mg-b-15">
                      The Green Leaves
                    </p>
                    <p className="tx-white-7 tx-13">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. Lorem ipsum dolor
                      sit amet consictetur...
                    </p>
                    <p className="tx-13 mg-b-0">
                      <a href="#/" className="tx-white">
                        Read more
                      </a>
                    </p>
                  </div>
                  {/* card-img-overlay */}
                </div>
                {/* card */}
              </div>
              {/* col */}
            </div>
            {/* row */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Colored Card Header</div>
            <p className="mg-b-20">
              Add an optional color header within a card.
            </p>

            <div className="row row-sm">
              <div className="col-md-4">
                <div className="card bd-0">
                  <div className="card-header tx-medium bd-0 tx-white bg-indigo">
                    Description
                  </div>
                  {/* card-header */}
                  <div className="card-body bd bd-t-0">
                    <p className="mg-b-0">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. Lorem ipsum dolor
                      sit amet consictetur...
                    </p>
                  </div>
                  {/* card-body */}
                </div>
                {/* card */}
              </div>
              {/* col */}
              <div className="col-md-4 mg-t-20 mg-md-t-0">
                <div className="card bd-0">
                  <div className="card-header tx-medium bd-0 tx-white bg-primary">
                    Description
                  </div>
                  {/* card-header */}
                  <div className="card-body bd bd-t-0">
                    <p className="mg-b-0">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. Lorem ipsum dolor
                      sit amet consictetur...
                    </p>
                  </div>
                  {/* card-body */}
                </div>
                {/* card */}
              </div>
              {/* col */}
              <div className="col-md-4 mg-t-20 mg-md-t-0">
                <div className="card bd-0">
                  <div className="card-header tx-medium bd-0 tx-white bg-gray-800">
                    Description
                  </div>
                  {/* card-header */}
                  <div className="card-body bd bd-t-0">
                    <p className="mg-b-0">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. Lorem ipsum dolor
                      sit amet consictetur...
                    </p>
                  </div>
                  {/* card-body */}
                </div>
                {/* card */}
              </div>
              {/* col */}
            </div>
            {/* row */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Card with Footer</div>
            <p className="mg-b-20">Add an optional footer within a card.</p>

            <div className="row row-sm">
              <div className="col-md">
                <div className="card">
                  <div className="card-body">
                    <p className="mg-b-0">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. Lorem ipsum dolor
                      sit amet consictetur...
                    </p>
                  </div>
                  {/* card-body */}
                  <div className="card-footer bd-t">
                    January, 20, 2017 4:30am
                  </div>
                  {/* card-footer */}
                </div>
                {/* card */}
              </div>
              {/* col */}
              <div className="col-md mg-t-20 mg-md-t-0">
                <div className="card">
                  <div className="card-body">
                    <p className="mg-b-0">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. Lorem ipsum dolor
                      sit amet consictetur...
                    </p>
                  </div>
                  {/* card-body */}
                  <div className="card-footer bd-t tx-center">
                    <a href="#/">Read more</a>
                  </div>
                  {/* card-footer */}
                </div>
                {/* card */}
              </div>
              {/* col */}
              <div className="col-md mg-t-20 mg-md-t-0">
                <div className="card">
                  <div className="card-body">
                    <p className="mg-b-0">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. Lorem ipsum dolor
                      sit amet consictetur...
                    </p>
                  </div>
                  {/* card-body */}
                  <div className="card-footer bd-t tx-right">
                    Share
                    <i className="icon ion-logo-facebook mg-l-5 mg-r-5"></i>
                    <i className="icon ion-logo-twitter"></i>
                  </div>
                  {/* card-footer */}
                </div>
                {/* card */}
              </div>
              {/* col */}
            </div>
            {/* row */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">
              Colored Background Variant
            </div>
            <p className="mg-b-20">
              Cards include their own variant classes for quickly changing card
              background.
            </p>

            <div className="row row-sm">
              <div className="col-md">
                <div className="card card-body tx-white-8 bg-primary bd-0">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Lorem ipsum dolor sit amet
                  consictetur.
                </div>
                {/* card */}
              </div>
              {/* col */}
              <div className="col-md mg-t-20 mg-md-t-0">
                <div className="card card-body tx-white-8 bg-indigo bd-0">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Lorem ipsum dolor sit amet
                  consictetur.
                </div>
                {/* card */}
              </div>
              {/* col */}
              <div className="col-md mg-t-20 mg-md-t-0">
                <div className="card card-body tx-white-8 bg-gray-800 bd-0">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Lorem ipsum dolor sit amet
                  consictetur.
                </div>
                {/* card */}
              </div>
              {/* col */}
            </div>
            {/* row */}

            <div className="mg-lg-b-30"></div>
          </div>
          {/* az-content-body */}
        </div>
        {/* container */}
      </div>
    );
  }
}

export default Cards;
