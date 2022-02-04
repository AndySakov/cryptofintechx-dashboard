import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { store } from "../../redux/store";
import { logout } from "../../redux/features/authSlice";
import NotificationBar from "../NotificationBar";

export class Header extends Component {
  closeMenu(e) {
    e.target.closest(".dropdown").classList.remove("show");
    e.target.closest(".dropdown .dropdown-menu").classList.remove("show");
  }

  toggleHeaderMenu(e) {
    e.preventDefault();
    document.querySelector("body").classList.toggle("az-header-menu-show");
  }

  logout() {
    this.props.history.push("/login");
    store.dispatch(logout());
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      document.querySelector("body").classList.remove("az-header-menu-show");
    }
  }

  render() {
    if (store.getState().auth.isAuthenticated) {
      return (
        <div>
          <div className="az-header">
            <div className="container">
              <div className="az-header-left">
                <a href="/home" className="az-logo">
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
                  <Link to="/home" className="az-logo">
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
              </div>
              <div className="az-header-right">
                <NotificationBar />
                <Dropdown className="az-profile-menu">
                  <Dropdown.Toggle as={"a"} className="az-img-user">
                    <img
                      src={
                        store.getState().auth.user.avatar_url === null
                          ? require("../../../assets/images/index.png")
                          : store.getState().auth.user.avatar_url
                      }
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
                          src={
                            store.getState().auth.user.avatar_url === null
                              ? require("../../../assets/images/index.png")
                              : store.getState().auth.user.avatar_url
                          }
                          alt=""
                        ></img>
                      </div>
                      <h6>
                        {store.getState().auth.isAuthenticated
                          ? store
                              .getState()
                              .auth.user.full_name.split(" ")
                              .slice(0, 2)
                              .join(" ")
                          : ""}
                      </h6>
                      <span>
                        {store.getState().auth.isAuthenticated
                          ? store.getState().auth.user.category
                          : ""}{" "}
                        Member
                      </span>
                    </div>

                    <a href="/user/profile" className="dropdown-item">
                      <i className="typcn typcn-user-outline"></i> My Profile
                    </a>
                    <a href="#/" className="dropdown-item">
                      <i className="typcn typcn-edit"></i> Edit Profile
                    </a>
                    <a href="#/" className="dropdown-item">
                      <i className="typcn typcn-time"></i> Activity Logs
                    </a>
                    <a href="#/" className="dropdown-item">
                      <i className="typcn typcn-cog-outline"></i> Account
                      Settings
                    </a>
                    <button
                      className="dropdown-item"
                      onClick={() => this.logout()}
                    >
                      <i className="typcn typcn-power-outline"></i> Sign Out
                    </button>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Header);
