import React, { Component } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

export class Chat extends Component {
  render() {
    return (
      <div className="container p-md-0 d-flex az-content-app">
        <div className="az-content-left az-content-left-chat">

          <nav className="nav az-nav-line az-nav-line-chat">
            <a href="#/" data-toggle="tab" className="nav-link active">Recent Chat</a>
            <a href="#/" data-toggle="tab" className="nav-link">Groups</a>
            <a href="#/" data-toggle="tab" className="nav-link">Calls</a>
          </nav>

          <div className="az-chat-contacts-wrapper">
            <label className="az-content-label az-content-label-sm">Active Contacts (5)</label>
            <div id="chatActiveContacts" className="az-chat-contacts">
              <div>
                <div className="az-img-user online"><img src={ require("../../assets/images/img3.jpg") } alt="" /></div>
                <small>Adrian</small>
              </div>
              <div>
                <div className="az-img-user online"><img src={ require("../../assets/images/img4.jpg") } alt="" /></div>
                <small>John</small>
              </div>
              <div>
                <div className="az-img-user online"><img src={ require("../../assets/images/img5.jpg") } alt="" /></div>
                <small>Daniel</small>
              </div>
              <div>
                <div className="az-img-user online"><img src={ require("../../assets/images/img6.jpg") } alt="" /></div>
                <small>Katherine</small>
              </div>
              <div>
                <div className="az-img-user online"><img src={ require("../../assets/images/img7.jpg") } alt="" /></div>
                <small>Raymart</small>
              </div>
              <div>
                <div className="az-img-user online"><img src={ require("../../assets/images/img8.jpg") } alt="" /></div>
                <small>Junrisk</small>
              </div>
              <div>
                <div className="az-img-user online"><img src={ require("../../assets/images/img9.jpg") } alt="" /></div>
                <small>George</small>
              </div>
              <div>
                <div className="az-img-user online"><img src={ require("../../assets/images/img10.jpg") } alt="" /></div>
                <small>Maryjane</small>
              </div>
              <div>
                <div className="az-chat-contacts-more">20+</div>
                <small>More</small>
              </div>
            </div>{/* az-active-contacts */}
          </div>{/* az-chat-active-contacts */}

          <PerfectScrollbar id="azChatList" className="az-chat-list">
            <div className="media new">
              <div className="az-img-user online">
                <img src={ require("../../assets/images/img9.jpg") } alt="" />
                <span>2</span>
              </div>
              <div className="media-body">
                <div className="media-contact-name">
                  <span>Socrates Itumay</span>
                  <span>2 hours</span>
                </div>
                <p>Nam quam nunc, blandit vel aecenas et ante tincid</p>
              </div>{/* media-body */}
            </div>{/* media */}
            <div className="media new">
              <div className="az-img-user">
                <img src={ require("../../assets/images/img8.jpg") } alt="" />
                <span>1</span>
              </div>
              <div className="media-body">
                <div className="media-contact-name">
                  <span>Dexter dela Cruz</span>
                  <span>3 hours</span>
                </div>
                <p>Maec enas tempus, tellus eget con dime ntum rhoncus, sem quam</p>
              </div>{/* media-body */}
            </div>{/* media */}
            <div className="media selected">
              <div className="az-img-user online"><img src={ require("../../assets/images/img16.jpg") } alt="" /></div>
              <div className="media-body">
                <div className="media-contact-name">
                  <span>Reynante Labares</span>
                  <span>10 hours</span>
                </div>
                <p>Nam quam nunc, bl ndit vel aecenas et ante tincid</p>
              </div>{/* media-body */}
            </div>{/* media */}
            <div className="media">
              <div className="az-img-user"><img src={ require("../../assets/images/img10.jpg") } alt="" /></div>
              <div className="media-body">
                <div className="media-contact-name">
                  <span>Joyce Chua</span>
                  <span>2 days</span>
                </div>
                <p>Ma ecenas tempus, tellus eget con dimen tum rhoncus, sem quam</p>
              </div>{/* media-body */}
            </div>{/* media */}
            <div className="media">
              <div className="az-img-user"><img src={ require("../../assets/images/img17.jpg") } alt="" /></div>
              <div className="media-body">
                <div className="media-contact-name">
                  <span>Rolando Paloso</span>
                  <span>2 days</span>
                </div>
                <p>Nam quam nunc, blandit vel aecenas et ante tincid</p>
              </div>{/* media-body */}
            </div>{/* media */}
            <div className="media new">
              <div className="az-img-user">
                <img src={ require("../../assets/images/img18.jpg") } alt="" />
                <span>1</span>
              </div>
              <div className="media-body">
                <div className="media-contact-name">
                  <span>Ariana Monino</span>
                  <span>3 days</span>
                </div>
                <p>Maece nas tempus, tellus eget cond imentum rhoncus, sem quam</p>
              </div>{/* media-body */}
            </div>{/* media */}
            <div className="media">
              <div className="az-img-user"><img src={ require("../../assets/images/img19.jpg") } alt="" /></div>
              <div className="media-body">
                <div className="media-contact-name">
                  <span>Maricel Villalon</span>
                  <span>4 days</span>
                </div>
                <p>Nam quam nunc, blandit vel aecenas et ante tincid</p>
              </div>{/* media-body */}
            </div>{/* media */}
            <div className="media">
              <div className="az-img-user"><img src={ require("../../assets/images/img20.jpg") } alt="" /></div>
              <div className="media-body">
                <div className="media-contact-name">
                  <span>Maryjane Pechon</span>
                  <span>5 days</span>
                </div>
                <p>Mae cenas tempus, tellus eget co ndimen tum rhoncus, sem quam</p>
              </div>{/* media-body */}
            </div>{/* media */}
            <div className="media">
              <div className="az-img-user"><img src={ require("../../assets/images/img21.jpg") } alt="" /></div>
              <div className="media-body">
                <div className="media-contact-name">
                  <span>Lovely Dela Cruz</span>
                  <span>5 days</span>
                </div>
                <p>Mae cenas tempus, tellus eget co ndimen tum rhoncus, sem quam</p>
              </div>{/* media-body */}
            </div>{/* media */}
            <div className="media">
              <div className="az-img-user"><img src={ require("../../assets/images/img3.jpg") } alt="" /></div>
              <div className="media-body">
                <div className="media-contact-name">
                  <span>Daniel Padilla</span>
                  <span>5 days</span>
                </div>
                <p>Mae cenas tempus, tellus eget co ndimen tum rhoncus, sem quam</p>
              </div>{/* media-body */}
            </div>{/* media */}
            <div className="media">
              <div className="az-img-user"><img src={ require("../../assets/images/img4.jpg") } alt="" /></div>
              <div className="media-body">
                <div className="media-contact-name">
                  <span>John Pratts</span>
                  <span>6 days</span>
                </div>
                <p>Mae cenas tempus, tellus eget co ndimen tum rhoncus, sem quam</p>
              </div>{/* media-body */}
            </div>{/* media */}
            <div className="media">
              <div className="az-img-user"><img src={ require("../../assets/images/img5.jpg") } alt="" /></div>
              <div className="media-body">
                <div className="media-contact-name">
                  <span>Raymart Santiago</span>
                  <span>6 days</span>
                </div>
                <p>Nam quam nunc, blandit vel aecenas et ante tincid</p>
              </div>{/* media-body */}
            </div>{/* media */}
            <div className="media">
              <div className="az-img-user"><img src={ require("../../assets/images/img6.jpg") } alt="" /></div>
              <div className="media-body">
                <div className="media-contact-name">
                  <span>Samuel Lerin</span>
                  <span>7 days</span>
                </div>
                <p>Nam quam nunc, blandit vel aecenas et ante tincid</p>
              </div>{/* media-body */}
            </div>{/* media */}
          </PerfectScrollbar>{/* az-chat-list */}

          </div>{/* az-content-left */}
          <div className="az-content-body az-content-body-chat">
          <div className="az-chat-header">
            <div className="az-img-user"><img src={ require("../../assets/images/img16.jpg") } alt="" /></div>
            <div className="az-chat-msg-name">
              <h6>Reynante Labares</h6>
              <small>Last seen: 2 minutes ago</small>
            </div>
            <nav className="nav">
              <a href="#/" className="nav-link"><i className="icon ion-md-more"></i></a>
              <a href="#/" className="nav-link" data-toggle="tooltip" title="Call"><i className="icon ion-ios-call"></i></a>
              <a href="#/" className="nav-link" data-toggle="tooltip" title="Archive"><i className="icon ion-ios-filing"></i></a>
              <a href="#/" className="nav-link" data-toggle="tooltip" title="Trash"><i className="icon ion-md-trash"></i></a>
              <a href="#/" className="nav-link" data-toggle="tooltip" title="View Info"><i className="icon ion-md-information-circle"></i></a>
            </nav>
          </div>{/* az-chat-header */}
          <PerfectScrollbar id="azChatBody" className="az-chat-body">
            <div className="content-inner">
              <label className="az-chat-time"><span>3 days ago</span></label>
              <div className="media flex-row-reverse">
                <div className="az-img-user online"><img src={ require("../../assets/images/img5.jpg") } alt="" /></div>
                <div className="media-body">
                  <div className="az-msg-wrapper">
                    Nulla consequat massa quis enim. Donec pede justo, fringilla vel...
                  </div>{/* az-msg-wrapper */}
                  <div className="az-msg-wrapper">rhoncus ut, imperdiet a, venenatis vitae, justo...</div>
                  <div className="az-msg-wrapper pd-0">
                    <img src={ require("../../assets/images/img12.jpg") } className="wd-200" alt="" />
                  </div>{/* az-msg-wrapper */}
                  <div><span>9:48 am</span> <a href="#/"><i className="icon ion-android-more-horizontal"></i></a></div>
                </div>{/* media-body */}
              </div>{/* media */}
              <div className="media">
                <div className="az-img-user online"><img src={ require("../../assets/images/img16.jpg") } alt="" /></div>
                <div className="media-body">
                  <div className="az-msg-wrapper">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                  </div>{/* az-msg-wrapper */}
                  <div><span>9:32 am</span> <a href="#/"><i className="icon ion-android-more-horizontal"></i></a></div>
                </div>{/* media-body */}
              </div>{/* media */}
              <div className="media flex-row-reverse">
                <div className="az-img-user online"><img src={ require("../../assets/images/img5.jpg") } alt="" /></div>
                <div className="media-body">
                  <div className="az-msg-wrapper">
                    Nullam dictum felis eu pede mollis pretium
                  </div>{/* az-msg-wrapper */}
                  <div><span>11:22 am</span> <a href="#/"><i className="icon ion-android-more-horizontal"></i></a></div>
                </div>{/* media-body */}
              </div>{/* media */}
              <label className="az-chat-time"><span>Yesterday</span></label>
              <div className="media">
                <div className="az-img-user online"><img src={ require("../../assets/images/img16.jpg") } alt="" /></div>
                <div className="media-body">
                  <div className="az-msg-wrapper">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                  </div>{/* az-msg-wrapper */}
                  <div><span>9:32 am</span> <a href="#/"><i className="icon ion-android-more-horizontal"></i></a></div>
                </div>{/* media-body */}
              </div>{/* media */}
              <div className="media flex-row-reverse">
                <div className="az-img-user online"><img src={ require("../../assets/images/img5.jpg") } alt="" /></div>
                <div className="media-body">
                  <div className="az-msg-wrapper">
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                  </div>{/* az-msg-wrapper */}
                  <div className="az-msg-wrapper">
                    Nullam dictum felis eu pede mollis pretium
                  </div>{/* az-msg-wrapper */}
                  <div><span>9:48 am</span> <a href="#/"><i className="icon ion-android-more-horizontal"></i></a></div>
                </div>{/* media-body */}
              </div>{/* media */}

              <label className="az-chat-time"><span>Today</span></label>
              <div className="media">
                <div className="az-img-user online"><img src={ require("../../assets/images/img16.jpg") } alt="" /></div>
                <div className="media-body">
                  <div className="az-msg-wrapper">
                    Maecenas tempus, tellus eget condimentum rhoncus
                  </div>{/* az-msg-wrapper */}
                  <div className="az-msg-wrapper">
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
                  </div>{/* az-msg-wrapper */}
                  <div><span>10:12 am</span> <a href="#/"><i className="icon ion-android-more-horizontal"></i></a></div>
                </div>{/* media-body */}
              </div>{/* media */}
              <div className="media flex-row-reverse">
                <div className="az-img-user online"><img src={ require("../../assets/images/img5.jpg") } alt="" /></div>
                <div className="media-body">
                  <div className="az-msg-wrapper">
                    Maecenas tempus, tellus eget condimentum rhoncus
                  </div>{/* az-msg-wrapper */}
                  <div className="az-msg-wrapper">
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
                  </div>{/* az-msg-wrapper */}
                  <div><span>09:40 am</span> <a href="#/"><i className="icon ion-android-more-horizontal"></i></a></div>
                </div>{/* media-body */}
              </div>{/* media */}
            </div>{/* content-inner */}
          </PerfectScrollbar>{/* az-chat-body */}
          <div className="az-chat-footer">
            <nav className="nav">
              <a href="#/" className="nav-link" data-toggle="tooltip" title="Add Photo"><i className="fas fa-camera"></i></a>
              <a href="#/" className="nav-link" data-toggle="tooltip" title="Attach a File"><i className="fas fa-paperclip"></i></a>
              <a href="#/" className="nav-link" data-toggle="tooltip" title="Add Emoticons"><i className="far fa-smile"></i></a>
              <a href="#/" className="nav-link"><i className="fas fa-ellipsis-v"></i></a>
            </nav>
            <input type="text" className="form-control" placeholder="Type your message here..."/>
            <a href="#/" className="az-msg-send"><i className="far fa-paper-plane"></i></a>
          </div>{/* az-chat-footer */}
        </div>{/* az-content-body */}
      </div>
    )
  }
}

export default Chat
