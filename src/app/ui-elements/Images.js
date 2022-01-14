import React, { Component } from "react";
import ComponentsSidebar from "../shared/ComponentsSidebar";

export class Images extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar />
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>UI Elements</span>
              <span>Images</span>
            </div>
            <h2 className="az-content-title">Images</h2>

            <div className="az-content-label mg-b-5">Responsive icon</div>
            <p className="mg-b-20">
              Images in Bootstrap are made responsive with .img-fluid.
              max-width: 100%; and height: auto; are applied to the image so
              that it scales with the parent element.
            </p>

            <div>
              <img
                src={require("../../assets/images/img11.jpg")}
                className="img-fluid"
                alt="Responsive thumb"
              />
            </div>

            <hr className="mg-y-40" />

            <div className="az-content-label mg-b-5">Image Thumbnail</div>
            <p className="mg-b-20">
              In addition to our border-radius utilities, you can use{" "}
              <code>.img-thumbnail</code> to give an image a rounded 1px border
              appearance.
            </p>

            <img
              src={require("../../assets/images/img11.jpg")}
              className="img-thumbnail wd-100p wd-sm-200"
              alt="Responsive icon"
            />

            <hr className="mg-y-40" />

            <div className="az-content-label mg-b-5">Aligning Images</div>
            <p className="mg-b-20">
              Align images with the helper float classes or text alignment
              classes.
            </p>

            <div className="bd pd-20 clearfix">
              <img
                src={require("../../assets/images/img11.jpg")}
                className="rounded float-sm-left wd-100p wd-sm-200"
                alt=""
              />
              <img
                src={require("../../assets/images/img12.jpg")}
                className="rounded float-sm-right wd-100p wd-sm-200 mg-t-10 mg-sm-t-0"
                alt=""
              />
            </div>

            <hr className="mg-y-40" />

            <div className="az-content-label mg-b-5">Background Image</div>
            <p className="mg-b-20">
              Make image as background to your content using the helper or
              utilities classes.
            </p>

            <figure className="pos-relative mg-b-0 wd-sm-80p wd-md-50p">
              <img
                src={require("../../assets/images/img11.jpg")}
                className="img-fit-cover"
                alt="Responsive icon"
              />
              <figcaption className="pos-absolute a-0 pd-25 bg-black-5 tx-white-8">
                <h6 className="tx-14 tx-sm-16 tx-white tx-semibold mg-b-15 mg-sm-b-20">
                  What Does Royalty-Free Mean?
                </h6>
                <p className="mg-b-0">
                  Royalty free means you just need to pay for rights to use the
                  item once per end product. You don't need to pay additional or
                  ongoing fees for each person who sees or uses it.
                </p>
              </figcaption>
            </figure>

            <div className="ht-40"></div>
          </div>
          {/* az-content-body */}
        </div>
        {/* container */}
      </div>
    );
  }
}

export default Images;
