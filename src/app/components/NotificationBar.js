import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

const NotificationBar = () => {
  const [notifications] = useState([]);

  const DEFAULT_SHOW_LIMIT = 3;

  const [showing, setShowing] = useState(
    notifications.slice(0, DEFAULT_SHOW_LIMIT)
  );

  const [viewingAll, setViewingAll] = useState(false);
  const closeMenu = (e) => {
    e.target.closest(".dropdown").classList.remove("show");
    e.target.closest(".dropdown .dropdown-menu").classList.remove("show");
  };

  const handleClick = () => {
    if (viewingAll === false) {
      setViewingAll(true);
      setShowing(notifications);
    } else {
      setViewingAll(false);
      setShowing(notifications.slice(0, DEFAULT_SHOW_LIMIT));
    }
  };
  return (
    <Dropdown className="az-header-notification">
      <Dropdown.Toggle
        as={"a"}
        className={`${notifications.length > 0 ? "new" : ""}`}
      >
        <i className="typcn typcn-bell"></i>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <div className="az-dropdown-header mg-b-20 d-sm-none">
          <a
            href="#/"
            onClick={(event) => closeMenu(event)}
            className="az-header-arrow"
          >
            <i className="icon ion-md-arrow-back"></i>
          </a>
        </div>
        <h6 className="az-notification-title">Notifications</h6>
        <p className="az-notification-text">
          You have {notifications.length} unread{" "}
          {notifications.length > 0
            ? notifications.length === 1
              ? "notification"
              : "notifications"
            : "notifications"}
        </p>
        <div className="az-notification-list">
          {showing.map((notification) => (
            <div className="media">
              <div className="az-img-user">
                <img src={notification.image} alt={notification.imageAlt}></img>
              </div>
              <div className="media-body">
                <p>{notification.body}</p>
                <span>{notification.time}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="dropdown-footer">
          {notifications.length === 0 ? (
            <span>Nothing to see here</span>
          ) : (
            <a href="#/" onClick={handleClick}>
              {viewingAll === true
                ? "Show only recent notifications"
                : "View All Notifications"}
            </a>
          )}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationBar;
