import React, { Component } from 'react';
import ComponentsSidebar from '../shared/ComponentsSidebar';

export class MediaObject extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>UI Elements</span>
              <span>Media Object</span>
            </div>
            <h2 className="az-content-title">Media Object</h2>

            <div className="az-content-label mg-b-5">Basic Example</div>
            <p className="mg-b-20">The media object helps build complex and repetitive components where some media is positioned alongside content that doesn’t wrap around said media. Plus, it does this with only two required classes thanks to flexbox.</p>

            <div className="bd pd-20">
              <div className="media d-block d-sm-flex">
                <img src={ require("../../assets/images/img14.jpg") } className="wd-100p wd-sm-200 rounded mg-sm-r-20 mg-b-20 mg-sm-b-0" alt=""/>
                <div className="media-body">
                  <h5 className="mg-b-15 tx-inverse">Media heading</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
              </div>
            </div>

            <hr className="mg-y-40"/>

            <div className="az-content-label mg-b-5">Nesting</div>
            <p className="mg-b-20">Media objects can be infinitely nested, though we suggest you stop at some point. Place nested <code>.media</code> within the <code>.media-body</code> of a parent media object.</p>

            <div className="pd-20 bd">
              <div className="media d-block d-sm-flex">
                <img src={ require("../../assets/images/img14.jpg") } className="wd-100p wd-sm-100 rounded mg-sm-r-20 mg-b-20 mg-sm-b-0" alt=""/>
                <div className="media-body">
                  <h5 className="mg-b-15 tx-inverse">Media heading</h5>
                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

                  <div className="media d-block d-sm-flex mg-t-25">
                    <img src={ require("../../assets/images/img13.jpg") } className="wd-100p wd-sm-100 rounded mg-sm-r-20 mg-b-20 mg-sm-b-0" alt=""/>
                    <div className="media-body">
                      <h5 className="mg-b-15 tx-inverse">Media heading</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="mg-y-40"/>

            <div className="az-content-label mg-b-5">Alignment</div>
            <p className="mg-b-20">Media in a media object can be aligned with flexbox utilities to the top (default), middle, or end of your .media-body content.</p>

            <div className="bd pd-20">
              <div className="media d-block d-sm-flex">
                <img src={ require("../../assets/images/img14.jpg") } className="wd-100p wd-sm-100 rounded mg-sm-r-20 mg-b-20 mg-sm-b-0 align-self-center" alt=""/>
                <div className="media-body">
                  <h5 className="mg-b-15 tx-inverse">Media heading</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
              </div>
            </div>

            <hr className="mg-y-40"/>

            <div className="az-content-label mg-b-5">Order</div>
            <p className="mg-b-20">Change the order of content in media objects by modifying the HTML itself, or by adding some custom flexbox CSS to set the order property (to an integer of your choosing).</p>

            <div className="bd pd-20">
              <div className="media d-block d-sm-flex">
                <div className="media-body">
                  <h5 className="mg-b-15 tx-inverse">Media heading</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
                <img src={ require("../../assets/images/img14.jpg") } className="wd-100p wd-sm-200 rounded mg-sm-l-20 mg-t-20 mg-sm-t-0" alt=""/>
              </div>
            </div>

            <hr className="mg-y-40"/>

            <div className="az-content-label mg-b-5">Media List</div>
            <p className="mg-b-20">Because the media object has so few structural requirements, you can also use these classes on list HTML elements.</p>

            <div className="bd pd-20">
              <ul className="list-unstyled">
                <li className="media d-block d-sm-flex">
                  <img src={ require("../../assets/images/img12.jpg") } className="wd-100p wd-sm-100 rounded mg-sm-r-20 mg-b-20 mg-sm-b-0" alt=""/>
                  <div className="media-body">
                    <h5 className="mg-b-10 tx-inverse">Media heading</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </div>
                </li>
                <li className="media  d-block d-sm-flex mg-t-25">
                  <img src={ require("../../assets/images/img15.jpg") } className="wd-100p wd-sm-100 rounded mg-sm-r-20 mg-b-20 mg-sm-b-0" alt=""/>
                  <div className="media-body">
                    <h5 className="mg-b-10 tx-inverse">Media heading</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </div>
                </li>
                <li className="media  d-block d-sm-flex mg-t-25">
                  <img src={ require("../../assets/images/img14.jpg") } className="wd-100p wd-sm-100 rounded mg-sm-r-20 mg-b-20 mg-sm-b-0" alt=""/>
                  <div className="media-body">
                    <h5 className="mg-b-10 tx-inverse">Media heading</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </div>
                </li>
              </ul>
            </div>

            <div className="ht-40"></div>

          </div>{/* az-content-body */}
        </div>{/* container */}
      </div>
    )
  }
}

export default MediaObject
