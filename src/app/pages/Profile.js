import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { store } from "../redux/store";

export class Profile extends Component {
  profileViewersChartData = {
    labels: [
      "Oct 1",
      "Oct 2",
      "Oct 3",
      "Oct 4",
      "Oct 5",
      "Oct 6",
      "Oct 7",
      "Oct 8",
      "Oct 9",
      "Oct 10",
      "Oct 11",
      "Oct 12",
    ],
    datasets: [
      {
        data: [12, 15, 18, 40, 35, 38, 32, 20, 25, 15, 25, 30],
        borderWidth: 1,
        fill: true,
        borderColor: "rgba(0,123,255,1)",
        backgroundColor: "rgba(0,123,255,.2)",
      },
    ],
  };

  profileViewersChartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          display: false,
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            max: 80,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 11,
            fontFamily: "Arial",
          },
        },
      ],
    },
  };

  render() {
    return (
      <div>
        <div className="container az-content-profile d-flex flex-wrap p-md-0">
          <div className="az-content-left az-content-left-profile">
            <div className="az-profile-overview">
              <div className="az-img-user">
                <img src={require("../../assets/images/img10.jpg")} alt="" />
              </div>
              {/* az-img-user */}
              <div className="d-flex justify-content-between mg-b-20">
                <div>
                  <h5 className="az-profile-name">
                    {store.getState().auth.user.full_name}
                  </h5>
                  <p className="az-profile-name-text">UI/UX Designer</p>
                </div>
                <div className="btn-icon-list">
                  <button className="btn btn-indigo btn-icon">
                    <i className="typcn typcn-plus-outline"></i>
                  </button>
                  <button className="btn btn-primary btn-icon">
                    <i className="typcn typcn-message"></i>
                  </button>
                </div>
              </div>

              <div className="az-profile-bio text-wrap">
                <p className="text-wrap">
                  Genius, Compiler, Powerful Multitasker, Fantasy Fruit Loop,
                  Replacement President of a Major Soft Drink Manufacturer.{" "}
                  <a href="#/">More</a>
                </p>
              </div>
              {/* az-profile-bio */}

              <hr className="mg-y-30" />

              <label className="az-content-label tx-13 mg-b-20">
                Websites &amp; Social Channel
              </label>
              <div className="az-profile-social-list">
                <div className="media">
                  <div className="media-icon">
                    <i className="icon ion-logo-github"></i>
                  </div>
                  <div className="media-body">
                    <span>Github</span>
                    <a href="#/">github.com/sophia.white</a>
                  </div>
                </div>
                {/* media */}
                <div className="media">
                  <div className="media-icon">
                    <i className="icon ion-logo-twitter"></i>
                  </div>
                  <div className="media-body">
                    <span>Twitter</span>
                    <a href="#/">twitter.com/sophia.me</a>
                  </div>
                </div>
                {/* media */}
                <div className="media">
                  <div className="media-icon">
                    <i className="icon ion-logo-linkedin"></i>
                  </div>
                  <div className="media-body">
                    <span>Linkedin</span>
                    <a href="#/">linkedin.com/in/sophiaw</a>
                  </div>
                </div>
                {/* media */}
                <div className="media">
                  <div className="media-icon">
                    <i className="icon ion-md-link"></i>
                  </div>
                  <div className="media-body">
                    <span>My Portfolio</span>
                    <a href="#/">bootstrapdash.com/</a>
                  </div>
                </div>
                {/* media */}
              </div>
              {/* az-profile-social-list */}
            </div>
            {/* az-profile-overview */}
          </div>
          {/* az-content-left */}
          <div className="az-content-body az-content-body-profile">
            <nav className="nav az-nav-line">
              <a href="#/" className="nav-link active" data-toggle="tab">
                Overview
              </a>
              <a href="#/" className="nav-link" data-toggle="tab">
                Reviews
              </a>
              <a href="#/" className="nav-link" data-toggle="tab">
                Followers
              </a>
              <a href="#/" className="nav-link" data-toggle="tab">
                Following
              </a>
              <a href="#/" className="nav-link" data-toggle="tab">
                Account Settings
              </a>
            </nav>

            <div className="az-profile-body">
              <div className="row mg-b-20">
                <div className="col-md-7 col-xl-8">
                  <div className="az-profile-view-chart">
                    <Line
                      data={this.profileViewersChartData}
                      options={this.profileViewersChartOptions}
                    />
                    <div className="az-profile-view-info">
                      <div className="d-flex align-items-baseline">
                        <h6>508</h6>
                        <span>-1.2% since last week</span>
                      </div>
                      <p>Profile viewers past 10 days</p>
                    </div>
                  </div>
                </div>
                {/* col */}
                <div className="col-md-5 col-xl-4 mg-t-40 mg-md-t-0">
                  <div className="az-content-label tx-13 mg-b-20">
                    Traffic Details
                  </div>
                  <div className="az-traffic-detail-item">
                    <div>
                      <span>People with title Founder &amp; CEO</span>
                      <span>
                        24 <span>(20%)</span>
                      </span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar wd-20p"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    {/* progress */}
                  </div>
                  <div className="az-traffic-detail-item">
                    <div>
                      <span>People with title UX Designer</span>
                      <span>
                        16 <span>(15%)</span>
                      </span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success wd-15p"
                        role="progressbar"
                        aria-valuenow="15"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    {/* progress */}
                  </div>
                  <div className="az-traffic-detail-item">
                    <div>
                      <span>People with title Recruitment</span>
                      <span>
                        87 <span>(45%)</span>
                      </span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-pink wd-45p"
                        role="progressbar"
                        aria-valuenow="45"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    {/* progress */}
                  </div>
                  <div className="az-traffic-detail-item">
                    <div>
                      <span>People with title Software Engineer</span>
                      <span>
                        32 <span>(25%)</span>
                      </span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-teal wd-25p"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    {/* progress */}
                  </div>
                </div>
                {/* col */}
              </div>
              {/* row */}

              <hr className="mg-y-40" />

              <div className="row">
                <div className="col-md-7 col-xl-8">
                  <div className="az-content-label tx-13 mg-b-25">
                    Work &amp; Education
                  </div>
                  <div className="az-profile-work-list">
                    <div className="media">
                      <div className="media-logo bg-success">
                        <i className="icon ion-logo-whatsapp"></i>
                      </div>
                      <div className="media-body">
                        <h6>
                          UI/UX Designer at <a href="#/">Whatsapp</a>
                        </h6>
                        <span>2016 - present</span>
                        <p>Past Work: BootstrapDash, Inc.</p>
                      </div>
                      {/* media-body */}
                    </div>
                    {/* media */}
                    <div className="media">
                      <div className="media-logo bg-primary">
                        <i className="icon ion-logo-buffer"></i>
                      </div>
                      <div className="media-body">
                        <h6>
                          Studied at <a href="#/">Buffer University</a>
                        </h6>
                        <span>2002 - 2006</span>
                        <p>Degree: Bachelor of Science in Computer Science</p>
                      </div>
                      {/* media-body */}
                    </div>
                    {/* media */}
                  </div>
                  {/* az-profile-work-list */}
                </div>
                {/* col */}
                <div className="col-md-5 col-xl-4 mg-t-40 mg-md-t-0">
                  <div className="az-content-label tx-13 mg-b-25">
                    Contact Information
                  </div>
                  <div className="az-profile-contact-list">
                    <div className="media">
                      <div className="media-icon">
                        <i className="icon ion-md-phone-portrait"></i>
                      </div>
                      <div className="media-body">
                        <span>Mobile</span>
                        <div>(+63) 123 4567 890</div>
                      </div>
                      {/* media-body */}
                    </div>
                    {/* media */}
                    <div className="media">
                      <div className="media-icon">
                        <i className="icon ion-logo-slack"></i>
                      </div>
                      <div className="media-body">
                        <span>Slack</span>
                        <div>@sophia.w</div>
                      </div>
                      {/* media-body */}
                    </div>
                    {/* media */}
                    <div className="media">
                      <div className="media-icon">
                        <i className="icon ion-md-locate"></i>
                      </div>
                      <div className="media-body">
                        <span>Current Address</span>
                        <div>San Francisco, CA</div>
                      </div>
                      {/* media-body */}
                    </div>
                    {/* media */}
                  </div>
                  {/* az-profile-contact-list */}
                </div>
                {/* col */}
              </div>
              {/* row */}

              <div className="mg-b-20"></div>
            </div>
            {/* az-profile-body */}
          </div>
          {/* az-content-body */}
        </div>
        {/* container */}
      </div>
    );
  }
}

export default Profile;
