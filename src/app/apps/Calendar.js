import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export class Calendar extends Component {
  render() {
    return (
      <div>
        <div className="container p-md-0 d-flex">
          <div className="az-content-left az-content-left-calendar">
            <div className="az-content-header">
              <a href="#/" id="azMenuShow" className="az-header-menu-icon"><span></span></a>
              <a href="index.html" className="az-logo">Crypto<span>fintech</span>x</a>
              <a href="#/" id="azContentLeftHide" className="az-header-arrow">
                <i className="icon ion-md-arrow-forward d-sm-none"></i>
                <i className="icon ion-md-close d-none d-sm-block"></i>
              </a>
            </div>{/* az-content-header */}

            <div id="dateToday" className="az-content-label az-content-label-sm tx-medium lh-1 mg-b-10"></div>
            <h2 className="az-content-title mg-b-25 tx-24">My Calendar</h2>
            <label className="az-content-label tx-13 tx-bold mg-b-10">Event List</label>
            <nav className="nav az-nav-column az-nav-calendar-event">
              <a href="#/" className="nav-link"><i className="icon ion-ios-calendar tx-primary"></i> <div>Calendar Events</div></a>
              <a href="#/" className="nav-link"><i className="icon ion-ios-calendar tx-success"></i> <div>Birthday Events</div></a>
              <a href="#/" className="nav-link"><i className="icon ion-ios-calendar tx-danger"></i> <div>Holiday Calendar</div></a>
              <a href="#/" className="nav-link"><i className="icon ion-ios-calendar tx-warning"></i> <div>Other Calendar</div></a>
              <a href="#/" className="nav-link exclude"><i className="icon ion-ios-calendar tx-info"></i> <div>Discovered Events</div></a>
            </nav>
          </div>
          <div className="az-content-body az-content-body-calendar">
            <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
          </div>{/* az-content-body */}
        </div>{/* container */}
      </div>
    )
  }
}

export default Calendar
