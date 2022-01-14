import React, { Component } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

export class Contacts extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex app-contacts az-content-app az-content-contacts p-0">
          <div className="az-content-left az-content-left-contacts">

            <div className="az-content-breadcrumb lh-1 mg-b-10">
              <span>Apps &amp; Pages</span>
              <span>Contacts</span>
            </div>
            <h2 className="az-content-title tx-24 mg-b-30">My Contacts</h2>

            <nav className="nav az-nav-line az-nav-line-chat">
              <a href="#/" data-toggle="tab" className="nav-link active">All Contacts</a>
              <a href="#/" data-toggle="tab" className="nav-link">Groups</a>
            </nav>

            <PerfectScrollbar id="azContactList" className="az-contacts-list">
              <div className="az-contact-label">A</div>
              <div className="az-contact-item selected">
                <div className="az-img-user online"><img src={ require("../../assets/images/img20.jpg") } alt=""/></div>
                <div className="az-contact-body">
                  <h6>Abigail Johnson</h6>
                  <span className="phone">+1-234-567-890</span>
                </div>{/* az-contact-body */}
                <a href="#/" className="az-contact-star active"><i className="typcn typcn-star"></i></a>
              </div>{/* az-contact-item */}
              <div className="az-contact-item">
                <div className="az-img-user"><img src={ require("../../assets/images/img9.jpg") } alt=""/></div>
                <div className="az-contact-body">
                  <h6>Archie Cantones</h6>
                  <span>archie@cantones.com</span>
                </div>{/* az-contact-body */}
                <a href="#/" className="az-contact-star"><i className="typcn typcn-star"></i></a>
              </div>{/* az-contact-item */}
              <div className="az-contact-item">
                <div className="az-avatar bg-gray-600 online">A</div>
                <div className="az-contact-body">
                  <h6>Allan Rey Palban</h6>
                  <span>allanr@palban.com</span>
                </div>{/* az-contact-body */}
                <a href="#/" className="az-contact-star"><i className="typcn typcn-star"></i></a>
              </div>{/* az-contact-item */}
              <div className="az-contact-item">
                <div className="az-avatar bg-gray-700">A</div>
                <div className="az-contact-body">
                  <h6>Aileen Mante</h6>
                  <span>+1-234-567-890</span>
                </div>{/* az-contact-body */}
                <a href="#/" className="az-contact-star"><i className="typcn typcn-star"></i></a>
              </div>{/* az-contact-item */}
              <div className="az-contact-label">B</div>
              <div className="az-contact-item">
                <div className="az-img-user"><img src={ require("../../assets/images/img5.jpg") } alt=""/></div>
                <div className="az-contact-body">
                  <h6>Brandon Dilao</h6>
                  <span>+1-234-567-890</span>
                </div>{/* az-contact-body */}
                <a href="#/" className="az-contact-star"><i className="typcn typcn-star"></i></a>
              </div>{/* az-contact-item */}
              <div className="az-contact-item">
                <div className="az-img-user online"><img src={ require("../../assets/images/img21.jpg") } alt=""/></div>
                <div className="az-contact-body">
                  <h6>Britney Labares</h6>
                  <span>+1-234-567-890</span>
                </div>{/* az-contact-body */}
                <a href="#/" className="az-contact-star"><i className="typcn typcn-star"></i></a>
              </div>{/* az-contact-item */}
              <div className="az-contact-item">
                <div className="az-avatar bg-gray-700">B</div>
                <div className="az-contact-body">
                  <h6>Brateyley Cruz</h6>
                  <span>+1-234-567-890</span>
                </div>{/* az-contact-body */}
                <a href="#/" className="az-contact-star"><i className="typcn typcn-star"></i></a>
              </div>{/* az-contact-item */}
              <div className="az-contact-label">C</div>
              <div className="az-contact-item">
                <div className="az-img-user"><img src={ require("../../assets/images/img18.jpg") } alt=""/></div>
                <div className="az-contact-body">
                  <h6>Camille Audrey</h6>
                  <span>+1-234-567-890</span>
                </div>{/* az-contact-body */}
                <a href="#/" className="az-contact-star"><i className="typcn typcn-star"></i></a>
              </div>{/* az-contact-item */}
              <div className="az-contact-item">
                <div className="az-img-user online"><img src={ require("../../assets/images/img16.jpg") } alt=""/></div>
                <div className="az-contact-body">
                  <h6>Christian Lerio</h6>
                  <span>+1-234-567-890</span>
                </div>{/* az-contact-body */}
                <a href="#/" className="az-contact-star"><i className="typcn typcn-star"></i></a>
              </div>{/* az-contact-item */}
              <div className="az-contact-item">
                <div className="az-img-user online"><img src={ require("../../assets/images/img17.jpg") } alt=""/></div>
                <div className="az-contact-body">
                  <h6>Christopher Segovia</h6>
                  <span>+1-234-567-890</span>
                </div>{/* az-contact-body */}
                <a href="#/" className="az-contact-star"><i className="typcn typcn-star"></i></a>
              </div>{/* az-contact-item */}
              <div className="az-contact-label">D</div>
              <div className="az-contact-item">
                <div className="az-img-user online"><img src={ require("../../assets/images/img3.jpg") } alt=""/></div>
                <div className="az-contact-body">
                  <h6>Darius Clayton</h6>
                  <span>+1-234-567-890</span>
                </div>{/* az-contact-body */}
                <a href="#/" className="az-contact-star"><i className="typcn typcn-star"></i></a>
              </div>{/* az-contact-item */}
              <div className="az-contact-item">
                <div className="az-img-user"><img src={ require("../../assets/images/img2.jpg") } alt=""/></div>
                <div className="az-contact-body">
                  <h6>Dyanne Aceron</h6>
                  <span>+1-234-567-890</span>
                </div>{/* az-contact-body */}
                <a href="#/" className="az-contact-star"><i className="typcn typcn-star"></i></a>
              </div>{/* az-contact-item */}
              <div className="az-contact-item">
                <div className="az-img-user online"><img src={ require("../../assets/images/img22.jpg") } alt=""/></div>
                <div className="az-contact-body">
                  <h6>Divina Gracia</h6>
                  <span>+1-234-567-890</span>
                </div>{/* az-contact-body */}
                <a href="#/" className="az-contact-star"><i className="typcn typcn-star"></i></a>
              </div>{/* az-contact-item */}
            </PerfectScrollbar>{/* az-contacts-list */}

          </div>{/* az-content-left */}
          <div className="az-content-body az-content-body-contacts">
            <div className="az-contact-info-header">
              <div className="media">
                <div className="az-img-user">
                  <img src={ require("../../assets/images/img20.jpg") } alt=""/>
                  <a href="#/"><i className="typcn typcn-camera-outline"></i></a>
                </div>
                <div className="media-body">
                  <h4>Abigail Johnson</h4>
                  <p>Product Designer</p>
                  <nav className="nav">
                    <a href="#/" className="nav-link"><i className="typcn typcn-device-phone"></i> Call</a>
                    <a href="#/" className="nav-link"><i className="typcn typcn-messages"></i> Message</a>
                    <a href="#/" className="nav-link"><i className="typcn typcn-user-add-outline"></i> Add to Group</a>
                    <a href="#/" className="nav-link"><i className="typcn typcn-cancel"></i> Block</a>
                  </nav>
                </div>{/* media-body */}
              </div>{/* media */}
              <div className="az-contact-action">
                <a href="#/"><i className="typcn typcn-edit"></i> Edit Contact</a>
                <a href="#/"><i className="typcn typcn-trash"></i> Delete Contact</a>
              </div>{/* az-contact-action */}

            </div>{/* az-contact-info-header */}
            <div className="az-contact-info-body">
              <PerfectScrollbar className="media-list">
                <div className="media">
                  <div className="media-icon"><i className="fas fa-mobile-alt"></i></div>
                  <div className="media-body">
                    <div>
                      <label>Work</label>
                      <span className="tx-medium">+1 (234) 567 8901</span>
                    </div>
                    <div>
                      <label>Personal</label>
                      <span className="tx-medium">+1 (498) 021 0090</span>
                    </div>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-icon align-self-start"><i className="far fa-envelope"></i></div>
                  <div className="media-body">
                    <div>
                      <label>Gmail Account</label>
                      <span className="tx-medium">abigail.johnson@gmail.com</span>
                    </div>
                    <div>
                      <label>Other Account</label>
                      <span className="tx-medium">me@bootstrapdash.me</span>
                    </div>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-icon"><i className="far fa-map"></i></div>
                  <div className="media-body">
                    <div>
                      <label>Current Address</label>
                      <span className="tx-medium">012 Dashboard Apartments, San Francisco, California 13245</span>
                    </div>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-icon"><i className="far fa-clock"></i></div>
                  <div className="media-body">
                    <div>
                      <label>Call History</label>
                      <a href="#/" className="tx-13">Duration of last call: 2m 32sec</a>
                    </div>
                  </div>{/* media-body */}
                </div>{/* media */}
              </PerfectScrollbar>{/* media-list */}
            </div>{/* az-contact-info-body */}
          </div>{/* az-content-body */}
        </div>
      </div>
    )
  }
}

export default Contacts
