import React, { Component } from 'react'
import {Line} from 'react-chartjs-2';
import { Tab, Nav } from 'react-bootstrap';


export class Dashboard extends Component {
  websiteAudienceChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
    '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', 
    '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', '148', '149'],
    datasets: [{
      label: 'This week',
      data: [49,48,50,53,54,53,54,56,56,56,56,60,58,61,61,58,54,52,51,47,48,48,53,50,46,48,51,51,50,54,52,53,57,52,48,52,53,58,55,58,61,57,60,61,57,56,58,62,58,58,56,52,52,50,55,50,52,48,47,43,38,34,31,32,36,35,32,33,30,28,28,27,27,25,24,21,22,23,27,30,27,29,25,23,23,23,27,23,23,19,15,15,11,9,7,11,15,13,12,13,15,13,13,18,20,21,25,25,20,18,15,14,17,15,16,14,12,14,17,17,14,18,18,22,25,28,28,24,24,28,26,29,26,23,28,25,21,23,20,19,15,16,21,24,20,16,16,15,14,16],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['rgba(105, 72, 242, .1)'],
      borderColor: ['#6948f2']
    }]
  };

  websiteAudienceChartOptions = {
    scales: {
      yAxes: [{
        display: true,
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
          color: '#eef0fa',
          zeroLineColor: 'rgba(90, 113, 208, 0)',
        },
        ticks: {
          display: true,
          beginAtZero: true,
          min: 0,
          max: 80,
          stepSize: 22,
          padding: 10,
          maxTicksLimit: 7
        }
      }],
      xAxes: [{
        display: true,
        position: 'bottom',
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          fontColor: "#a7afb7",
          padding: 10,
          maxTicksLimit: 7
        }
      }],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    },
    tooltips: {
      backgroundColor: 'rgba(2, 171, 254, 1)',
    },
  };

  bitcoinChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
    '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88'],
    datasets: [{
      label: 'This week',
      data: [52,51,50,55,52,50,55,57,54,57,61,59,63,62,59,61,61,64,64,61,61,62,64,61,63,65,60,64,62,65,63,59,61,65,65,63,67,65,64,60,59,62,62,60,65,65,67,71,71,73,72,76,75,71,69,74,70,71,73,72,73,71,72,76,75,73,70,72,72,72,68,69,67,65,66,65,67,71,75,77,74,78,79,74,77,81,84,85,90,87,89,90,87,90,89,90,93,90,90,95,94],
      borderWidth: 2,
      fill: false,
      backgroundColor: ['rgba(105, 72, 242, .1)'],
      borderColor: ['#494c57']
    }]
  };

  bitcoinChartOptions = {
    scales: {
      yAxes: [{
        display: false,
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
          color: '#eef0fa',
          zeroLineColor: 'rgba(90, 113, 208, 0)',
        },
        ticks: {
          display: false,
          beginAtZero: true,
          min: 0,
          max: 80,
          stepSize: 22,
          padding: 10,
        }
      }],
      xAxes: [{
        display: true,
        position: 'bottom',
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          fontColor: "#a7afb7",
          padding: 10,
          maxTicksLimit: 7
        }
      }],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    },
    tooltips: {
      backgroundColor: 'rgba(2, 171, 254, 1)',
    },
  };

  etheriumChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
    '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', 
    '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', '148', '149'],
    datasets: [{
      label: 'This week',
      data: [48,44,45,44,44,44,41,44,46,45,46,43,40,42,39,40,37,41,39,36,36,36,35,32,30,31,25,30,30,34,37,41,41,36,37,37,34,31,34,39,40,36,40,44,48,43,40,39,42,40,38,39,42,38,33,37,38,39,43,41,41,44,44,42,41,44,47,48,43,40,42,46,48,52,49,52,56,60,57,57,59,58,63,60,60,63,58,54,49,45,43,46,46,50,46,47,44,41,43,46,48,50,47,51,46,43,46,46,41,44,39,39,40,39,40,41,45,46,48,50,55,55,55,54,52,49,54,57,58,60,65,67,62,65,66,68,71,68,67,70,70,69,68,72,70,70,65,67,62],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['rgba(105, 72, 242, .1)'],
      borderColor: ['#6610f2']
    }]
  };

  etheriumChartOptions = {
    scales: {
      yAxes: [{
        display: true,
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
          color: '#eef0fa',
          zeroLineColor: 'rgba(90, 113, 208, 0)',
        },
        ticks: {
          display: false,
          beginAtZero: true,
          min: 0,
          max: 120,
          stepSize: 22,
          padding: 10,
          maxTicksLimit: 7
        }
      }],
      xAxes: [{
        display: true,
        position: 'bottom',
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          fontColor: "#a7afb7",
          padding: 10,
          maxTicksLimit: 7
        }
      }],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    },
    tooltips: {
      backgroundColor: 'rgba(2, 171, 254, 1)',
    },
  };

  litecoinChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
    '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', 
    '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', '148', '149'],
    datasets: [{
      label: 'This week',
      data: [53,50,49,47,49,50,48,48,53,52,49,50,48,44,40,41,45,44,41,38,39,41,39,35,38,38,40,38,42,46,43,40,36,31,28,29,29,33,37,35,37,39,39,34,37,39,38,37,40,35,31,31,30,25,28,28,30,32,32,37,35,39,41,41,43,39,39,43,42,43,38,43,41,44,46,47,49,46,51,50,53,56,52,56,60,58,56,55,54,54,58,57,60,57,56,55,54,52,54,54,51,51,46,48,45,48,43,45,43,41,40,38,40,44,44,41,37,39,35,32,35,38,37,38,37,37,33,35,33,31,29,31,34,32,33,37,32,36,35,38,42,41,45,46,45,45,42,44,39,44],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['rgba(105, 72, 242, .1)'],
      borderColor: ['#00cccc']
    }]
  };

  litecoinChartOptions = {
    scales: {
      yAxes: [{
        display: true,
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
          color: '#eef0fa',
          zeroLineColor: 'rgba(90, 113, 208, 0)',
        },
        ticks: {
          display: false,
          beginAtZero: true,
          min: 0,
          max: 120,
          stepSize: 22,
          padding: 10,
          maxTicksLimit: 7
        }
      }],
      xAxes: [{
        display: true,
        position: 'bottom',
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          fontColor: "#a7afb7",
          padding: 10,
          maxTicksLimit: 7
        }
      }],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    },
    tooltips: {
      backgroundColor: 'rgba(2, 171, 254, 1)',
    },
  };

  rippleChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
    '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', 
    '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', '148', '149'],
    datasets: [{
      label: 'This week',
      data: [36,38,42,41,37,32,28,24,23,20,16,12,9,5,9,10,13,18,13,18,13,11,13,15,12,17,21,18,14,18,14,13,14,15,16,19,14,17,13,9,11,9,6,1,2,2,4,3,5,5,1,8,7,5,2,6,6,9,9,11,10,9,6,4,2,4,3,4,2,1,3,1,5,4,1,4,6,4,5,5,3,8,7,6,1,11,10,3,4,8,10,11,15,19,18,13,12,7,3,9,9,13,18,22,18,15,14,14,12,13,13,15,15,17,14,10,12,14,18,22,18,22,23,27,24,20,22,20,16,15,13,10,11,13,10,9,9,10,15,12,14,18,16,17,18,15,18,16,14,10],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['rgba(105, 72, 242, .1)'],
      borderColor: ['#007bff']
    }]
  };

  rippleChartOptions = {
    scales: {
      yAxes: [{
        display: true,
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
          color: '#eef0fa',
          zeroLineColor: 'rgba(90, 113, 208, 0)',
        },
        ticks: {
          display: false,
          beginAtZero: true,
          min: 0,
          max: 120,
          stepSize: 22,
          padding: 10,
          maxTicksLimit: 7
        }
      }],
      xAxes: [{
        display: true,
        position: 'bottom',
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          fontColor: "#a7afb7",
          padding: 10,
          maxTicksLimit: 7
        }
      }],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    },
    tooltips: {
      backgroundColor: 'rgba(2, 171, 254, 1)',
    },
  };

  render() {
    return (
      <div>
        <div className="container p-md-0">
        <div className="az-content-body">
          <h2 className="az-content-title-minimal">Hi, welcome back!</h2>
          <p className="az-content-text-minimal">Your cryptocurrency monitoring and performance dashboard template.</p>
          <div className="media media-dashboard-one mg-b-20">
            <div className="media-body">
              <div className="card card-minimal-two">
                <div className="card-header">
                  <nav className="nav nav-pills">
                    <a className="nav-link active" data-toggle="tab" href="#/">BTH</a>
                    <a className="nav-link" data-toggle="tab" href="#/">ETH</a>
                    <a className="nav-link" data-toggle="tab" href="#/">LTC</a>
                    <a className="nav-link" data-toggle="tab" href="#/">BTG</a>
                  </nav>
                  <div className="card-header-right">
                    <nav className="nav nav-pills">
                      <a href="#/" className="nav-link"><span>hour</span><span>h</span></a>
                      <a href="#/" className="nav-link active"><span>day</span><span>d</span></a>
                      <a href="#/" className="nav-link"><span>week</span><span>w</span></a>
                      <a href="#/" className="nav-link"><span>month</span><span>m</span></a>
                      <a href="#/" className="nav-link"><span>year</span><span>y</span></a>
                      <a href="#/" className="nav-link">All</a>
                    </nav>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="flot-wrapper ml-0">
                    <Line data={this.websiteAudienceChartData} options={this.websiteAudienceChartOptions}  height={120}/>  
                  </div>
                  <div className="more-info">
                    <div><span>Change</span><span>$6.52</span></div>
                    <div><span>Market Cap</span><span>$0.11T</span></div>
                    <div><span>Supply</span><span>17,355,513</span></div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="media">
                    <div className="media-icon"><i className="fab fa-bitcoin"></i></div>
                    <div className="media-body">
                      <div className="row row-sm">
                        <div className="col">
                          <label>Symbol</label>
                          <p>BTC</p>
                        </div>
                        <div className="col-3">
                          <label>Price Benchmark</label>
                          <p>100.00%</p>
                        </div>
                        <div className="col">
                          <label>Price (USD)</label>
                          <p>$6,316.88</p>
                        </div>
                        <div className="col">
                          <label>Change (24H)</label>
                          <p>-0.54%</p>
                        </div>
                        <div className="col">
                          <label>Market Cap</label>
                          <p>$109.04B</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="media-right">
              <div className="card card-minimal-one">
                <div className="card-body">
                  <label>Bitcoin <span>(USD Price)</span></label>
                  <small>Thursday, November 01, 2018</small>
                  <h6><span>$</span> 6,316.88</h6>
                  <div className="value-info">
                    <label className="tx-primary">EUR</label>
                    <p><span>&euro;</span>6,320.46</p>
                  </div>
                  <div className="value-info">
                    <label className="tx-teal">GBP</label>
                    <p><span>&pound;</span>6,330.17</p>
                  </div>

                  <div className="open-info">
                    <div>
                      <label>Open</label>
                      <h6><span>$</span>6,358.40</h6>
                    </div>
                    <div>
                      <label>High</label>
                      <h6><span>$</span>6,396.34</h6>
                    </div>
                    <div>
                      <label>Low</label>
                      <h6><span>$</span>6,358.40</h6>
                    </div>
                  </div>
                </div>
                <div className="chart-wrapper">
                  <Line data={this.bitcoinChartData} options={this.bitcoinChartOptions} height={200} />  
                </div>
              </div>
            </div>
          </div>
          <div className="row row-sm mg-b-20">
            <div className="col-sm-6 col-lg-4">
              <div className="card card-minimal-four">
                <div className="card-header">
                  <div className="media">
                    <div className="coin-logo bg-gray-500"><i className="cf cf-eth"></i></div>
                    <div className="media-body">
                      <h6>Ethereum</h6>
                      <p>ETH (USD) = $149.25 (<span>-12.24%</span>)</p>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-body-top">
                    <div><a href="#/">12</a> USD Markets</div>
                    <div><a href="#/">81</a> ETH Markets</div>
                  </div>
                  <div className="chart-wrapper">
                   <Line data={this.etheriumChartData} options={this.etheriumChartOptions}  height={100}/>  
                  </div>
                </div>
                <div className="card-footer">
                  <nav className="nav">
                    <a href="#/" className="nav-link active"><span>1D</span><span>-12.24%</span></a>
                    <a href="#/" className="nav-link"><span>1W</span><span>-28.48%</span></a>
                    <a href="#/" className="nav-link"><span>1M</span><span>-28.16%</span></a>
                    <a href="#/" className="nav-link"><span>1Y</span><span>-60.75%</span></a>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mg-t-20 mg-sm-t-0">
              <div className="card card-minimal-four">
                <div className="card-header">
                  <div className="media">
                    <div className="coin-logo bg-gray-800"><i className="cf cf-ltc"></i></div>
                    <div className="media-body">
                      <h6>Litecoin</h6>
                      <p>LTC (USD) = $37.24 (<span>-8.34%</span>)</p>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-body-top">
                    <div><a href="#/">11</a> USD Markets</div>
                    <div><a href="#/">74</a> LTC Markets</div>
                  </div>
                  <div className="chart-wrapper">
                    <Line data={this.litecoinChartData} options={this.litecoinChartOptions}  height={100}/>  
                  </div>
                </div>
                <div className="card-footer">
                  <nav className="nav">
                    <a href="#/" className="nav-link active"><span>1D</span><span>-8.34%</span></a>
                    <a href="#/" className="nav-link"><span>1W</span><span>-26.30%</span></a>
                    <a href="#/" className="nav-link"><span>1M</span><span>-30.14%</span></a>
                    <a href="#/" className="nav-link"><span>1Y</span><span>-48.10%</span></a>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mg-t-20 mg-lg-t-0">
              <div className="card card-minimal-four">
                <div className="card-header">
                  <div className="media">
                    <div className="coin-logo bg-primary"><i className="cf cf-xrp"></i></div>
                    <div className="media-body">
                      <h6>Ripple</h6>
                      <p>XRP (USD) = $0.4921 (<span>-1.01%</span>)</p>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-body-top">
                    <div><a href="#/">6</a> USD Markets</div>
                    <div><a href="#/">42</a> LTC Markets</div>
                  </div>
                  <div className="chart-wrapper">
                    <Line data={this.rippleChartData} options={this.rippleChartOptions}  height={100}/>  
                  </div>
                </div>
                <div className="card-footer">
                  <nav className="nav">
                    <a href="#/" className="nav-link active"><span>1D</span><span>-1.01%</span></a>
                    <a href="#/" className="nav-link"><span>1W</span><span>-5.55%</span></a>
                    <a href="#/" className="nav-link"><span>1M</span><span>+4.87%</span></a>
                    <a href="#/" className="nav-link"><span>1Y</span><span>+106.62%</span></a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="media d-block d-lg-flex mg-b-20">
            <div className="media-body">
              <div className="card card-minimal-three">
                <div className="card-header card-header-tab">
                  <label className="az-content-label">Your Wallet</label>
                  <p className="az-content-text">Use your wallet to pay and receive money by quickly scanning qr code and also receive funds instantly.</p>
                  <div className="az-custom-nav-tabs">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="azTab1">
                    <Nav variant="pills" className="d-xl-flex d-md-block">
                      <Nav.Item>
                        <Nav.Link eventKey="azTab1">BTC Wallet</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="azTab2">BCH Wallet</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="azTab3">ETH Wallet</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="azTab4">LTC Wallet</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="azTab5">EUR Wallet</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="azTab6">DASH Wallet</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="azTab7">XRP Wallet</Nav.Link>
                      </Nav.Item>
                    </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="azTab1">
                          <div className="tab-pane-header">
                            <div>
                              <h6 className="az-content-label">BTC Wallet</h6>
                              <span>BTC = $4865.23</span>
                            </div>
                            <div>
                              <a href="#/" className="btn btn-primary">Transfer</a>
                              <a href="#/" className="btn btn-secondary">Receive</a>
                            </div>
                          </div>
                          <div className="tab-pane-body">
                            <h6 className="az-content-label tx-13">Recent Transactions</h6>
                            <div className="table-responsive">
                              <table className="table mg-b-0">
                                <tbody>
                                  <tr>
                                    <td><span className="bg-success"></span></td>
                                    <td>Nov 11, 2018</td>
                                    <td>b981976c4e8f80fdba31f08bc8cce136</td>
                                    <td>+ 0.0013</td>
                                  </tr>
                                  <tr>
                                    <td><span className="bg-success"></span></td>
                                    <td>Nov 10, 2018</td>
                                    <td>9e4a928fcc7e05234cb3fbade675352b</td>
                                    <td>+ 0.0153</td>
                                  </tr>
                                  <tr>
                                    <td><span className="bg-success"></span></td>
                                    <td>Oct 31, 2018</td>
                                    <td>ec203648b48c592760f8d133fdda849a</td>
                                    <td>+ 1.0000</td>
                                  </tr>
                                  <tr>
                                    <td><span className="bg-success"></span></td>
                                    <td>Oct 30, 2018</td>
                                    <td>04d04f60d1d6987c8abfc48101367ce2</td>
                                    <td>+ 0.0020</td>
                                  </tr>
                                  <tr>
                                    <td><span className="bg-success"></span></td>
                                    <td>Oct 15, 2018</td>
                                    <td>cf331535e2868efbed0be13c3297b1f6</td>
                                    <td>+ 2.0050</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="azTab2">
                          <div className="tab-pane-header">
                            <div>
                              <h6 className="az-content-label">BCH Wallet</h6>
                              <span>BCH = $290.79</span>
                            </div>
                            <div>
                              <a href="#/" className="btn btn-primary">Transfer</a>
                              <a href="#/" className="btn btn-secondary">Receive</a>
                            </div>
                          </div>
                          <div className="tab-pane-body">
                            <div className="no-transactions-panel">
                              <div className="icon-wrapper"><i className="icon ion-ios-stats"></i></div>
                              <h6>No transactions</h6>
                              <p>There are no transactions for this wallet.</p>
                              <a href="#/" className="btn btn-primary">Deposit Money</a>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="azTab3">
                          <div className="tab-pane-header">
                            <div>
                              <h6 className="az-content-label">ETH Wallet</h6>
                              <span>ETH = $149.25</span>
                            </div>
                            <div>
                              <a href="#/" className="btn btn-primary">Transfer</a>
                              <a href="#/" className="btn btn-secondary">Receive</a>
                            </div>
                          </div>
                          <div className="tab-pane-body">
                            <div className="no-transactions-panel">
                              <div className="icon-wrapper"><i className="icon ion-ios-stats"></i></div>
                              <h6>No transactions</h6>
                              <p>There are no transactions for this wallet.</p>
                              <a href="#/" className="btn btn-primary">Deposit Money</a>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="azTab4">
                          <div className="tab-pane-header">
                            <div>
                              <h6 className="az-content-label">LTC Wallet</h6>
                              <span>LTC = $37.24</span>
                            </div>
                            <div>
                              <a href="#/" className="btn btn-primary">Transfer</a>
                              <a href="#/" className="btn btn-secondary">Receive</a>
                            </div>
                          </div>
                          <div className="tab-pane-body">
                            <div className="no-transactions-panel">
                              <div className="icon-wrapper"><i className="icon ion-ios-stats"></i></div>
                              <h6>No transactions</h6>
                              <p>There are no transactions for this wallet.</p>
                              <a href="#/" className="btn btn-primary">Deposit Money</a>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="azTab5">
                          <div className="tab-pane-header">
                            <div>
                              <h6 className="az-content-label">EUR Wallet</h6>
                              <span>EUR = $1.14</span>
                            </div>
                            <div>
                              <a href="#/" className="btn btn-primary">Transfer</a>
                              <a href="#/" className="btn btn-secondary">Receive</a>
                            </div>
                          </div>
                          <div className="tab-pane-body">
                            <div className="no-transactions-panel">
                              <div className="icon-wrapper"><i className="icon ion-ios-stats"></i></div>
                              <h6>No transactions</h6>
                              <p>There are no transactions for this wallet.</p>
                              <a href="#/" className="btn btn-primary">Deposit Money</a>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="azTab6">
                          <div className="tab-pane-header">
                            <div>
                              <h6 className="az-content-label">DASH Wallet</h6>
                              <span>DASH = $113.25</span>
                            </div>
                            <div>
                              <a href="#/" className="btn btn-primary">Transfer</a>
                              <a href="#/" className="btn btn-secondary">Receive</a>
                            </div>
                          </div>
                          <div className="tab-pane-body">
                            <div className="no-transactions-panel">
                              <div className="icon-wrapper"><i className="icon ion-ios-stats"></i></div>
                              <h6>No transactions</h6>
                              <p>There are no transactions for this wallet.</p>
                              <a href="#/" className="btn btn-primary">Deposit Money</a>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="azTab7">
                          <div className="tab-pane-header">
                            <div>
                              <h6 className="az-content-label">XRP Wallet</h6>
                              <span>XRP = $0.4921</span>
                            </div>
                            <div>
                              <a href="#/" className="btn btn-primary">Transfer</a>
                              <a href="#/" className="btn btn-secondary">Receive</a>
                            </div>
                          </div>
                          <div className="tab-pane-body">
                            <div className="no-transactions-panel">
                              <div className="icon-wrapper"><i className="icon ion-ios-stats"></i></div>
                              <h6>No transactions</h6>
                              <p>There are no transactions for this wallet.</p>
                              <a href="#/" className="btn btn-primary">Deposit Money</a>
                            </div>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                  </Tab.Container>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-crypto-portfolio">
              <div className="card-body">
                <h6 className="card-title">Bitcoin Market</h6>
                <div className="table-responsive">
                  <table className="table mg-b-0">
                    <thead>
                      <tr>
                        <th>Exchange</th>
                        <th>Price(USD)</th>
                        <th>1D%</th>
                        <th>Volume</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Bitfinex</td>
                        <td>4786.36</td>
                        <td className="tx-danger">-12.0%</td>
                        <td>81302.38</td>
                      </tr>
                      <tr>
                        <td>Coinbase Pro</td>
                        <td>4786.36</td>
                        <td className="tx-danger">-12.0%</td>
                        <td>81302.38</td>
                      </tr>
                      <tr>
                        <td>Bitstamp</td>
                        <td>4786.36</td>
                        <td className="tx-danger">-12.0%</td>
                        <td>81302.38</td>
                      </tr>
                      <tr>
                        <td>Kraken</td>
                        <td>4786.36</td>
                        <td className="tx-danger">-12.0%</td>
                        <td>81302.38</td>
                      </tr>
                      <tr>
                        <td>Gemini</td>
                        <td>4786.36</td>
                        <td className="tx-danger">-12.0%</td>
                        <td>81302.38</td>
                      </tr>
                      <tr>
                        <td>Bittrix</td>
                        <td>4786.36</td>
                        <td className="tx-danger">-12.0%</td>
                        <td>81302.38</td>
                      </tr>
                      <tr>
                        <td>OKCoin</td>
                        <td>4786.36</td>
                        <td className="tx-danger">-12.0%</td>
                        <td>81302.38</td>
                      </tr>
                      <tr>
                        <td>BitBay</td>
                        <td>4786.36</td>
                        <td className="tx-danger">-12.0%</td>
                        <td>81302.38</td>
                      </tr>
                      <tr>
                        <td>BitSquare</td>
                        <td>4786.36</td>
                        <td className="tx-danger">-12.0%</td>
                        <td>81302.38</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
