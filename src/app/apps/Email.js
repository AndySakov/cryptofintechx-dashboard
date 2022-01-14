import React, { Component } from 'react'

export class Email extends Component {
  render() {
    return (
      <div>
        <div className="az-content az-content-mail">
          <div className="container">
            <div className="az-content-left az-content-left-mail">

              <div className="az-content-header">
                <a href="#/" id="azMenuShow" className="az-header-menu-icon"><span></span></a>
                <a href="index.html" className="az-logo">az<span>i</span>a</a>
                <a href="#/" id="azContentLeftHide" className="az-header-arrow">
                  <i className="icon ion-md-arrow-forward d-sm-none"></i>
                  <i className="icon ion-md-close d-none d-sm-block"></i>
                </a>
              </div>{/* az-content-header */}

              <a id="btnCompose" href="#/" className="btn btn-az-primary btn-compose">Compose</a>
              <div className="az-mail-menu">
                <nav className="nav az-nav-column mg-b-20">
                  <a href="#/" className="nav-link active"><i className="typcn typcn-mail"></i> Inbox <span>20</span></a>
                  <a href="#/" className="nav-link"><i className="typcn typcn-star-outline"></i> Starred <span>3</span></a>
                  <a href="#/" className="nav-link"><i className="typcn typcn-bookmark"></i> Important <span>10</span></a>
                  <a href="#/" className="nav-link"><i className="typcn typcn-arrow-forward-outline"></i> Sent Mail <span>8</span></a>
                  <a href="#/" className="nav-link"><i className="typcn typcn-pen"></i> Drafts <span>15</span></a>
                  <a href="#/" className="nav-link"><i className="typcn typcn-cancel-outline"></i> Spam <span>128</span></a>
                  <a href="#/" className="nav-link"><i className="typcn typcn-trash"></i> Trash <span>6</span></a>
                </nav>

                <label className="az-content-label az-content-label-sm">Label</label>
                <nav className="nav az-nav-column mg-b-20">
                  <a href="#/" className="nav-link"><i className="typcn typcn-folder"></i> Social <span>10</span></a>
                  <a href="#/" className="nav-link"><i className="typcn typcn-folder"></i> Promotions <span>22</span></a>
                  <a href="#/" className="nav-link"><i className="typcn typcn-folder"></i> Updates <span>17</span></a>
                </nav>

                <label className="az-content-label az-content-label-sm">Tags</label>
                <nav className="nav az-nav-column mg-b-20">
                  <a href="#/" className="nav-link"><i className="typcn typcn-social-twitter-circular"></i> Twitter <span>2</span></a>
                  <a href="#/" className="nav-link"><i className="typcn typcn-social-github-circular"></i> Github <span>32</span></a>
                  <a href="#/" className="nav-link"><i className="typcn typcn-social-google-plus-circular"></i> Google <span>7</span></a>
                </nav>
              </div>{/* az-mail-menu */}
            </div>{/* az-content-left */}
            <div className="az-content-body az-content-body-mail">
              <div className="az-mail-header">
                <div>
                  <h4 className="az-content-title mg-b-5">Inbox</h4>
                  <p>You have 2 unread messages</p>
                </div>
                <div>
                  <span>1-50 of 1200</span>
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-outline-secondary disabled"><i className="icon ion-ios-arrow-back"></i></button>
                    <button type="button" className="btn btn-outline-secondary"><i className="icon ion-ios-arrow-forward"></i></button>
                  </div>
                </div>
              </div>{/* az-mail-list-header */}
              <div className="az-mail-options">
                <label className="ckbox">
                  <input id="checkAll" type="checkbox"/>
                  <span></span>
                </label>
                <div className="btn-group">
                  <button className="btn btn-light"><i className="typcn typcn-arrow-sync"></i></button>
                  <button className="btn btn-light disabled"><i className="typcn typcn-archive"></i></button>
                  <button className="btn btn-light disabled"><i className="typcn typcn-info-outline"></i></button>
                  <button className="btn btn-light disabled"><i className="typcn typcn-trash"></i></button>
                  <button className="btn btn-light disabled"><i className="typcn typcn-folder"></i></button>
                  <button className="btn btn-light disabled"><i className="typcn typcn-tag"></i></button>
                </div>{/* btn-group */}
              </div>{/* az-mail-options */}

              <div className="az-mail-list">
                <div className="az-mail-item unread">
                  <div className="az-mail-checkbox">
                    <label className="ckbox">
                      <input type="checkbox"/>
                      <span></span>
                    </label>
                  </div>{/* az-mail-checkbox */}
                  <div className="az-mail-star">
                    <i className="typcn typcn-star"></i>
                  </div>{/* az-mail-star */}
                  <div className="az-img-user"><img src={ require("../../assets/images/img16.jpg") } alt=""/></div>
                  <div className="az-mail-body">
                    <div className="az-mail-from">Adrian Monino</div>
                    <div className="az-mail-subject">
                      <strong>Someone who believes in you</strong>
                      <span>enean commodo li gula eget dolor cum socia eget dolor enean commodo li gula eget dolor cum socia eget dolor</span>
                    </div>
                  </div>{/* az-mail-body */}
                  <div className="az-mail-attachment"><i className="typcn typcn-attachment"></i></div>
                  <div className="az-mail-date">11:30am</div>
                </div>{/* az-mail-item */}
                <div className="az-mail-item unread">
                  <div className="az-mail-checkbox">
                    <label className="ckbox">
                      <input type="checkbox"/>
                      <span></span>
                    </label>
                  </div>{/* az-mail-checkbox */}
                  <div className="az-mail-star active">
                    <i className="typcn typcn-star"></i>
                  </div>{/* az-mail-star */}
                  <div className="az-img-user"><img src={ require("../../assets/images/img17.jpg") } alt=""/></div>
                  <div className="az-mail-body">
                    <div className="az-mail-from">Albert Ansing</div>
                    <div className="az-mail-subject">
                      <strong>Here's What You Missed This Week</strong>
                      <span>enean commodo li gula eget dolor cum socia eget dolor enean commodo li gula eget dolor cum socia eget dolor...</span>
                    </div>
                  </div>{/* az-mail-body */}
                  <div className="az-mail-date">06:50am</div>
                </div>{/* az-mail-item */}
                <div className="az-mail-item">
                  <div className="az-mail-checkbox">
                    <label className="ckbox">
                      <input type="checkbox"/>
                      <span></span>
                    </label>
                  </div>{/* az-mail-checkbox */}
                  <div className="az-mail-star">
                    <i className="typcn typcn-star"></i>
                  </div>{/* az-mail-star */}
                  <div className="az-img-user"><img src={ require("../../assets/images/img18.jpg") } alt=""/></div>
                  <div className="az-mail-body">
                    <div className="az-mail-from">Carla Guden</div>
                    <div className="az-mail-subject">
                      <strong>4 Ways to Optimize Your Search</strong>
                      <span>viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor</span>
                    </div>
                  </div>{/* az-mail-body */}
                  <div className="az-mail-attachment"><i className="typcn typcn-attachment"></i></div>
                  <div className="az-mail-date">Yesterday</div>
                </div>{/* az-mail-item */}
                <div className="az-mail-item unread">
                  <div className="az-mail-checkbox">
                    <label className="ckbox">
                      <input type="checkbox"/>
                      <span></span>
                    </label>
                  </div>{/* az-mail-checkbox */}
                  <div className="az-mail-star">
                    <i className="typcn typcn-star"></i>
                  </div>{/* az-mail-star */}
                  <div className="az-img-user"><img src={ require("../../assets/images/img5.jpg") } alt=""/></div>
                  <div className="az-mail-body">
                    <div className="az-mail-from">Reven Galeon</div>
                    <div className="az-mail-subject">
                      <strong>We're Giving a Macbook for Free</strong>
                      <span>viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor</span>
                    </div>
                  </div>{/* az-mail-body */}
                  <div className="az-mail-date">Yesterday</div>
                </div>{/* az-mail-item */}
                <div className="az-mail-item">
                  <div className="az-mail-checkbox">
                    <label className="ckbox">
                      <input type="checkbox"/>
                      <span></span>
                    </label>
                  </div>{/* az-mail-checkbox */}
                  <div className="az-mail-star">
                    <i className="typcn typcn-star"></i>
                  </div>{/* az-mail-star */}
                  <div className="az-img-user"><img src={ require("../../assets/images/img21.jpg") } alt=""/></div>
                  <div className="az-mail-body">
                    <div className="az-mail-from">Elisse Tan</div>
                    <div className="az-mail-subject">
                      <strong>Keep Your Personal Data Safe</strong>
                      <span>viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor</span>
                    </div>
                  </div>{/* az-mail-body */}
                  <div className="az-mail-date">Oct 13</div>
                </div>{/* az-mail-item */}
                <div className="az-mail-item">
                  <div className="az-mail-checkbox">
                    <label className="ckbox">
                      <input type="checkbox"/>
                      <span></span>
                    </label>
                  </div>{/* az-mail-checkbox */}
                  <div className="az-mail-star">
                    <i className="typcn typcn-star"></i>
                  </div>{/* az-mail-star */}
                  <div className="az-img-user"><img src={ require("../../assets/images/img20.jpg") } alt=""/></div>
                  <div className="az-mail-body">
                    <div className="az-mail-from">Marianne Audrey</div>
                    <div className="az-mail-subject">
                      <strong>We've Made Some Changes</strong>
                      <span>viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor</span>
                    </div>
                  </div>{/* az-mail-body */}
                  <div className="az-mail-date">Oct 13</div>
                </div>{/* az-mail-item */}
                <div className="az-mail-item">
                  <div className="az-mail-checkbox">
                    <label className="ckbox">
                      <input type="checkbox"/>
                      <span></span>
                    </label>
                  </div>{/* az-mail-checkbox */}
                  <div className="az-mail-star">
                    <i className="typcn typcn-star"></i>
                  </div>{/* az-mail-star */}
                  <div className="az-avatar bg-gray-800">J</div>
                  <div className="az-mail-body">
                    <div className="az-mail-from">Jane Phoebe</div>
                    <div className="az-mail-subject">
                      <strong>Grab Our Holiday Deals</strong>
                      <span>viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor</span>
                    </div>
                  </div>{/* az-mail-body */}
                  <div className="az-mail-date">Oct 12</div>
                </div>{/* az-mail-item */}
                <div className="az-mail-item">
                  <div className="az-mail-checkbox">
                    <label className="ckbox">
                      <input type="checkbox"/>
                      <span></span>
                    </label>
                  </div>{/* az-mail-checkbox */}
                  <div className="az-mail-star">
                    <i className="typcn typcn-star"></i>
                  </div>{/* az-mail-star */}
                  <div className="az-img-user"><img src={ require("../../assets/images/img9.jpg") } alt=""/></div>
                  <div className="az-mail-body">
                    <div className="az-mail-from">Raffy Godinez</div>
                    <div className="az-mail-subject">
                      <strong>Just a Few Steps Away</strong>
                      <span>viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor</span>
                    </div>
                  </div>{/* az-mail-body */}
                  <div className="az-mail-date">Oct 05</div>
                </div>{/* az-mail-item */}
                <div className="az-mail-item">
                  <div className="az-mail-checkbox">
                    <label className="ckbox">
                      <input type="checkbox"/>
                      <span></span>
                    </label>
                  </div>{/* az-mail-checkbox */}
                  <div className="az-mail-star active">
                    <i className="typcn typcn-star"></i>
                  </div>{/* az-mail-star */}
                  <div className="az-img-user"><img src={ require("../../assets/images/img8.jpg") } alt=""/></div>
                  <div className="az-mail-body">
                    <div className="az-mail-from">Allan Cadungog</div>
                    <div className="az-mail-subject">
                      <strong>Credit Card Promos</strong>
                      <span>viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor</span>
                    </div>
                  </div>{/* az-mail-body */}
                  <div className="az-mail-date">Oct 04</div>
                </div>{/* az-mail-item */}
                <div className="az-mail-item">
                  <div className="az-mail-checkbox">
                    <label className="ckbox">
                      <input type="checkbox"/>
                      <span></span>
                    </label>
                  </div>{/* az-mail-checkbox */}
                  <div className="az-mail-star">
                    <i className="typcn typcn-star"></i>
                  </div>{/* az-mail-star */}
                  <div className="az-img-user"><img src={ require("../../assets/images/img7.jpg") } alt=""/></div>
                  <div className="az-mail-body">
                    <div className="az-mail-from">Alfie Salinas</div>
                    <div className="az-mail-subject">
                      <strong>4 Ways to Optimize Your Search</strong>
                      <span>viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor</span>
                    </div>
                  </div>{/* az-mail-body */}
                  <div className="az-mail-date">Oct 02</div>
                </div>{/* az-mail-item */}
                <div className="az-mail-item">
                  <div className="az-mail-checkbox">
                    <label className="ckbox">
                      <input type="checkbox"/>
                      <span></span>
                    </label>
                  </div>{/* az-mail-checkbox */}
                  <div className="az-mail-star">
                    <i className="typcn typcn-star"></i>
                  </div>{/* az-mail-star */}
                  <div className="az-img-user"><img src={ require("../../assets/images/img6.jpg") } alt=""/></div>
                  <div className="az-mail-body">
                    <div className="az-mail-from">Jove Guden</div>
                    <div className="az-mail-subject">
                      <strong>Keep Your Personal Data Safe</strong>
                      <span>viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor</span>
                    </div>
                  </div>{/* az-mail-body */}
                  <div className="az-mail-date">Oct 02</div>
                </div>{/* az-mail-item */}
              </div>{/* az-mail-list */}

              <div className="mg-lg-b-30"></div>

            </div>{/* az-content-body */}
          </div>{/* container */}
        </div>{/* az-content */}

        <div className="az-mail-compose">
          <div>
            <div className="container">
              <div className="az-mail-compose-box">
                <div className="az-mail-compose-header">
                  <span>New Message</span>
                  <nav className="nav">
                    <a href="#/" className="nav-link"><i className="fas fa-minus"></i></a>
                    <a href="#/" className="nav-link"><i className="fas fa-compress"></i></a>
                    <a href="#/" className="nav-link"><i className="fas fa-times"></i></a>
                  </nav>
                </div>{/* az-mail-compose-header */}
                <div className="az-mail-compose-body">
                  <div className="form-group">
                    <label className="form-label">To</label>
                    <div><input type="text" className="form-control" placeholder="Enter recipient's email address"/></div>
                  </div>{/* form-group */}
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <div><input type="text" className="form-control"/></div>
                  </div>{/* form-group */}
                  <div className="form-group">
                    <textarea className="form-control" rows="8" placeholder="Write your message here..."></textarea>
                  </div>{/* form-group */}
                  <div className="form-group mg-b-0">
                    <nav className="nav">
                      <a href="#/" className="nav-link" data-toggle="tooltip" title="Add attachment"><i className="fas fa-paperclip"></i></a>
                      <a href="#/" className="nav-link" data-toggle="tooltip" title="Add photo"><i className="far fa-image"></i></a>
                      <a href="#/" className="nav-link" data-toggle="tooltip" title="Add link"><i className="fas fa-link"></i></a>
                      <a href="#/" className="nav-link" data-toggle="tooltip" title="Emoticons"><i className="far fa-smile"></i></a>
                      <a href="#/" className="nav-link" data-toggle="tooltip" title="Discard"><i className="far fa-trash-alt"></i></a>
                    </nav>
                    <button className="btn btn-primary">Send</button>
                  </div>{/* form-group */}
                </div>{/* az-mail-compose-body */}
              </div>{/* az-mail-compose-box */}
            </div>{/* container */}
          </div>
        </div>{/* az-mail-compose */}
      </div>
    )
  }
}

export default Email
