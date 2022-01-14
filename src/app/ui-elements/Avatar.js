import React, { Component } from 'react'
import ComponentsSidebar from '../shared/ComponentsSidebar'

export class Avatar extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>UI Elements</span>
              <span>Avatar</span>
            </div>
            <h2 className="az-content-title">Avatar</h2>

            <div className="az-content-label mg-b-5">Sizes</div>
            <p className="mg-b-20">An avatar can have different sizes like larger and smaller avatar.</p>

            <div className="demo-avatar-group">
              <div className="az-img-user avatar-xs"><img src={ require("../../assets/images/img1.jpg") } className="rounded-circle" alt="" /></div>
              <div className="az-img-user avatar-sm"><img src={ require("../../assets/images/img1.jpg") } className="rounded-circle" alt="" /></div>
              <div className="az-img-user"><img src={ require("../../assets/images/img1.jpg") } className="rounded-circle" alt="" /></div>
              <div className="az-img-user avatar-md"><img src={ require("../../assets/images/img1.jpg") } className="rounded-circle" alt="" /></div>
              <div className="az-img-user avatar-lg"><img src={ require("../../assets/images/img1.jpg") } className="rounded-circle" alt="" /></div>
              <div className="az-img-user avatar-xl d-none d-sm-block"><img src={ require("../../assets/images/img1.jpg") } className="rounded-circle" alt="" /></div>
              <div className="az-img-user avatar-xxl d-none d-sm-block"><img src={ require("../../assets/images/img1.jpg") } className="rounded-circle" alt="" /></div>
            </div>{/* demo-avatar-group */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Initials</div>
            <p className="mg-b-20">An avatar can have a temporary use of user's initial name while their photos are not yet available.</p>
            <div className="demo-avatar-group">
              <div className="az-avatar avatar-xs">az</div>
              <div className="az-avatar avatar-sm">az</div>
              <div className="az-avatar">az</div>
              <div className="az-avatar avatar-md">az</div>
              <div className="az-avatar avatar-lg">az</div>
              <div className="az-avatar avatar-xl d-none d-sm-flex">az</div>
              <div className="az-avatar avatar-xxl d-none d-sm-flex">az</div>
            </div>{/* demo-avatar-group */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Status Indicator</div>
            <p className="mg-b-20">An avatar can have a status indicator to indicate users availability.</p>

            <div className="demo-avatar-group">
              <div className="az-img-user avatar-md online"><img src={ require("../../assets/images/img1.jpg") } className="rounded-circle" alt="" /></div>
              <div className="az-avatar avatar-md offline">az</div>
            </div>{/* demo-avatar-group */}

          </div>{/* az-content-body */}
        </div>{/* container */}
      </div>
    )
  }
}

export default Avatar
