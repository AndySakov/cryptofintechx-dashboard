import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

export class Header extends Component {
  closeMenu(e) {
    e.target.closest(".dropdown").classList.remove("show");
    e.target.closest(".dropdown .dropdown-menu").classList.remove("show");
  }

  toggleHeaderMenu(e) {
    e.preventDefault();
    document.querySelector("body").classList.toggle("az-header-menu-show");
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      document.querySelector("body").classList.remove("az-header-menu-show");
    }
  }

  render() {
    return (
      <div>
        <div className="az-header">
          <div className="container">
            <div className="az-header-left">
              <a href="#/" className="az-logo">
                <span></span> CRYPTOFINTECHX
              </a>
              <a
                id="azMenuShow"
                onClick={(event) => this.toggleHeaderMenu(event)}
                className="az-header-menu-icon d-lg-none"
                href="#/"
              >
                <span></span>
              </a>
            </div>
            <div className="az-header-menu">
              <div className="az-header-menu-header">
                <Link to="/" className="az-logo">
                  <span></span> CRYPTOFINTECHX
                </Link>
                <a
                  href="#/"
                  onClick={(event) => this.toggleHeaderMenu(event)}
                  className="close"
                >
                  &times;
                </a>
              </div>
              <ul className="nav">
                <li
                  className={
                    this.isPathActive("/dashboard")
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <Link to="/dashboard" className="nav-link">
                    <i className="typcn typcn-chart-area-outline"></i> Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Dropdown
                    className={
                      this.isPathActive("/apps")
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Dropdown.Toggle as={"a"} className="nav-link with-sub">
                      <i className="typcn typcn-folder"></i> Apps
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="az-menu-sub">
                      <Link
                        to="/apps/email"
                        className={
                          this.isPathActive("/apps/email")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Mailbox
                      </Link>
                      <Link
                        to="/apps/chat"
                        className={
                          this.isPathActive("/apps/chat")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Chat
                      </Link>
                      <Link
                        to="/apps/calendar"
                        className={
                          this.isPathActive("/apps/calendar")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Calendar
                      </Link>
                      <Link
                        to="/apps/contacts"
                        className={
                          this.isPathActive("/apps/contacts")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Contacts
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item">
                  <Dropdown
                    className={
                      this.isPathActive("/general-pages")
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Dropdown.Toggle as={"a"} className="nav-link with-sub">
                      <i className="typcn typcn-document"></i> Pages
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="az-menu-sub">
                      <Link
                        to="/general-pages/profile"
                        className={
                          this.isPathActive("/general-pages/profile")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Profile
                      </Link>
                      <Link
                        to="/general-pages/invoice"
                        className={
                          this.isPathActive("/general-pages/invoice")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Invoice
                      </Link>
                      <Link
                        to="/general-pages/signin"
                        className={
                          this.isPathActive("/general-pages/signin")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/general-pages/signup"
                        className={
                          this.isPathActive("/general-pages/signup")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Sign Up
                      </Link>
                      <Link
                        to="/general-pages/page-404"
                        className={
                          this.isPathActive("/general-pages/page-404")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Page 404
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item">
                  <Dropdown
                    className={
                      this.isPathActive("/ui-elements") ||
                      this.isPathActive("/form") ||
                      this.isPathActive("/charts") ||
                      this.isPathActive("/tables")
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Dropdown.Toggle as={"a"} className="nav-link with-sub">
                      <i className="typcn typcn-book"></i> Components
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="az-menu-sub az-menu-sub-mega">
                      <div className="container">
                        <div>
                          <nav className="nav">
                            <span>UI Elements</span>
                            <Link
                              to="/ui-elements/accordions"
                              className={
                                this.isPathActive("/ui-elements/accordions")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Accordions
                            </Link>
                            <Link
                              to="/ui-elements/alerts"
                              className={
                                this.isPathActive("/ui-elements/alerts")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Alerts
                            </Link>
                            <Link
                              to="/ui-elements/avatar"
                              className={
                                this.isPathActive("/ui-elements/avatar")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Avatar
                            </Link>
                            <Link
                              to="/ui-elements/badges"
                              className={
                                this.isPathActive("/ui-elements/badges")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Badge
                            </Link>
                            <Link
                              to="/ui-elements/breadcrumbs"
                              className={
                                this.isPathActive("/ui-elements/breadcrumbs")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Breadcrumbs
                            </Link>
                            <Link
                              to="/ui-elements/buttons"
                              className={
                                this.isPathActive("/ui-elements/buttons")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Buttons
                            </Link>
                            <Link
                              to="/ui-elements/cards"
                              className={
                                this.isPathActive("/ui-elements/cards")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Cards
                            </Link>
                            <Link
                              to="/ui-elements/carousel"
                              className={
                                this.isPathActive("/ui-elements/carousel")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Carousel
                            </Link>
                          </nav>
                          <nav className="nav">
                            <Link
                              to="/ui-elements/collapse"
                              className={
                                this.isPathActive("/ui-elements/collapse")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Collapse
                            </Link>
                            <Link
                              to="/ui-elements/dropdowns"
                              className={
                                this.isPathActive("/ui-elements/dropdowns")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Dropdown
                            </Link>
                            <Link
                              to="/ui-elements/icons"
                              className={
                                this.isPathActive("/ui-elements/icons")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Icons
                            </Link>
                            <Link
                              to="/ui-elements/images"
                              className={
                                this.isPathActive("/ui-elements/images")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Images
                            </Link>
                            <Link
                              to="/ui-elements/list-group"
                              className={
                                this.isPathActive("/ui-elements/list-group")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              List Group
                            </Link>
                            <Link
                              to="/ui-elements/media-object"
                              className={
                                this.isPathActive("/ui-elements/media-object")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Media Object
                            </Link>
                            <Link
                              to="/ui-elements/modals"
                              className={
                                this.isPathActive("/ui-elements/modals")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Modals
                            </Link>
                            <Link
                              to="/ui-elements/navigation"
                              className={
                                this.isPathActive("/ui-elements/navigation")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Navigation
                            </Link>
                          </nav>
                          <nav className="nav">
                            <Link
                              to="/ui-elements/pagination"
                              className={
                                this.isPathActive("/ui-elements/pagination")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Pagination
                            </Link>
                            <Link
                              to="/ui-elements/popover"
                              className={
                                this.isPathActive("/ui-elements/popover")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Popover
                            </Link>
                            <Link
                              to="/ui-elements/progress"
                              className={
                                this.isPathActive("/ui-elements/progress")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Progress
                            </Link>
                            <Link
                              to="/ui-elements/spinners"
                              className={
                                this.isPathActive("/ui-elements/spinners")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Spinners
                            </Link>
                            <Link
                              to="/ui-elements/toast"
                              className={
                                this.isPathActive("/ui-elements/toast")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Toast
                            </Link>
                            <Link
                              to="/ui-elements/tooltip"
                              className={
                                this.isPathActive("/ui-elements/tooltip")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Tooltip
                            </Link>
                          </nav>
                        </div>
                        <div>
                          <nav className="nav">
                            <span>Forms</span>
                            <Link
                              to="/form/form-elements"
                              className={
                                this.isPathActive("/form/form-elements")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Form Elements
                            </Link>
                            <Link
                              to="/form/form-layouts"
                              className={
                                this.isPathActive("/form/form-layouts")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Form Layouts
                            </Link>
                            <Link
                              to="/form/form-validation"
                              className={
                                this.isPathActive("/form/form-validation")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Form Validation
                            </Link>
                            <Link
                              to="/form/form-wizards"
                              className={
                                this.isPathActive("/form/form-wizards")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Form Wizards
                            </Link>
                            <Link
                              to="/form/wysiwyg-editor"
                              className={
                                this.isPathActive("/form/wysiwyg-editor")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              WYSIWYG Editor
                            </Link>
                          </nav>
                        </div>
                        <div>
                          <nav className="nav">
                            <span>Charts</span>
                            <Link
                              to="/charts/chartjs"
                              className={
                                this.isPathActive("/charts/chartjs")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              ChartJS
                            </Link>
                          </nav>
                        </div>
                        <div>
                          <nav className="nav">
                            <span>Tables</span>
                            <Link
                              to="/tables/basic-table"
                              className={
                                this.isPathActive("/tables/basic-table")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Basic Tables
                            </Link>
                            <Link
                              to="/tables/data-tables"
                              className={
                                this.isPathActive("/tables/data-tables")
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              Data Tables
                            </Link>
                          </nav>
                        </div>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item">
                  <Dropdown
                    className={
                      this.isPathActive("/utilities")
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Dropdown.Toggle as={"a"} className="nav-link with-sub">
                      <i className="typcn typcn-tabs-outline"></i> Utilities
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="az-menu-sub">
                      <Link
                        to="/utilities/background"
                        className={
                          this.isPathActive("/utilities/background")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Background
                      </Link>
                      <Link
                        to="/utilities/border"
                        className={
                          this.isPathActive("/utilities/border")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Border
                      </Link>
                      <Link
                        to="/utilities/display"
                        className={
                          this.isPathActive("/utilities/display")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Display
                      </Link>
                      <Link
                        to="/utilities/flex"
                        className={
                          this.isPathActive("/utilities/flex")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Flex
                      </Link>
                      <Link
                        to="/utilities/height"
                        className={
                          this.isPathActive("/utilities/height")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Height
                      </Link>
                      <Link
                        to="/utilities/margin"
                        className={
                          this.isPathActive("/utilities/margin")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Margin
                      </Link>
                      <Link
                        to="/utilities/padding"
                        className={
                          this.isPathActive("/utilities/padding")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Padding
                      </Link>
                      <Link
                        to="/utilities/position"
                        className={
                          this.isPathActive("/utilities/position")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Position
                      </Link>
                      <Link
                        to="/utilities/typography"
                        className={
                          this.isPathActive("/utilities/typography")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Typography
                      </Link>
                      <Link
                        to="/utilities/width"
                        className={
                          this.isPathActive("/utilities/width")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Width
                      </Link>
                      <Link
                        to="/utilities/extras"
                        className={
                          this.isPathActive("/utilities/extras")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Extras
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
            </div>
            <div className="az-header-right">
              <a href="#/" className="az-header-search-link">
                <i className="fas fa-search"></i>
              </a>
              <div className="az-header-message">
                <Link to="/apps/chat">
                  <i className="typcn typcn-messages"></i>
                </Link>
              </div>
              <Dropdown className="az-header-notification">
                <Dropdown.Toggle as={"a"} className="new">
                  <i className="typcn typcn-bell"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div className="az-dropdown-header mg-b-20 d-sm-none">
                    <a
                      href="#/"
                      onClick={(event) => this.closeMenu(event)}
                      className="az-header-arrow"
                    >
                      <i className="icon ion-md-arrow-back"></i>
                    </a>
                  </div>
                  <h6 className="az-notification-title">Notifications</h6>
                  <p className="az-notification-text">
                    You have 2 unread notification
                  </p>
                  <div className="az-notification-list">
                    <div className="media new">
                      <div className="az-img-user">
                        <img
                          src={require("../../../assets/images/img2.jpg")}
                          alt=""
                        ></img>
                      </div>
                      <div className="media-body">
                        <p>
                          Congratulate <strong>Socrates Itumay</strong> for work
                          anniversaries
                        </p>
                        <span>Mar 15 12:32pm</span>
                      </div>
                    </div>
                    <div className="media new">
                      <div className="az-img-user online">
                        <img
                          src={require("../../../assets/images/img3.jpg")}
                          alt=""
                        ></img>
                      </div>
                      <div className="media-body">
                        <p>
                          <strong>Joyce Chua</strong> just created a new blog
                          post
                        </p>
                        <span>Mar 13 04:16am</span>
                      </div>
                    </div>
                    <div className="media">
                      <div className="az-img-user">
                        <img
                          src={require("../../../assets/images/img4.jpg")}
                          alt=""
                        ></img>
                      </div>
                      <div className="media-body">
                        <p>
                          <strong>Althea Cabardo</strong> just created a new
                          blog post
                        </p>
                        <span>Mar 13 02:56am</span>
                      </div>
                    </div>
                    <div className="media">
                      <div className="az-img-user">
                        <img
                          src={require("../../../assets/images/img5.jpg")}
                          alt=""
                        ></img>
                      </div>
                      <div className="media-body">
                        <p>
                          <strong>Adrian Monino</strong> added new comment on
                          your photo
                        </p>
                        <span>Mar 12 10:40pm</span>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-footer">
                    <a href="#/">View All Notifications</a>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="az-profile-menu">
                <Dropdown.Toggle as={"a"} className="az-img-user">
                  <img
                    src={require("../../../assets/images/img1.jpg")}
                    alt=""
                  ></img>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div className="az-dropdown-header d-sm-none">
                    <a
                      href="#/"
                      onClick={(event) => this.closeMenu(event)}
                      className="az-header-arrow"
                    >
                      <i className="icon ion-md-arrow-back"></i>
                    </a>
                  </div>
                  <div className="az-header-profile">
                    <div className="az-img-user">
                      <img
                        src={require("../../../assets/images/img1.jpg")}
                        alt=""
                      ></img>
                    </div>
                    <h6>Aziana Pechon</h6>
                    <span>Premium Member</span>
                  </div>

                  <a href="#/" className="dropdown-item">
                    <i className="typcn typcn-user-outline"></i> My Profile
                  </a>
                  <a href="#/" className="dropdown-item">
                    <i className="typcn typcn-edit"></i> Edit Profile
                  </a>
                  <a href="#/" className="dropdown-item">
                    <i className="typcn typcn-time"></i> Activity Logs
                  </a>
                  <a href="#/" className="dropdown-item">
                    <i className="typcn typcn-cog-outline"></i> Account Settings
                  </a>
                  <Link to="/general-pages/signin" className="dropdown-item">
                    <i className="typcn typcn-power-outline"></i> Sign Out
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Header);
