import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Header from './shared/Header';
import Footer from './shared/Footer';

class App extends Component {
  state = {}
  componentDidMount() {
    this.onRouteChanged();
  }
  render() {
    let headerComponent = !this.state.isFullPageLayout ? <Header /> : '';
    let footerComponent = !this.state.isFullPageLayout ? <Footer /> : '';
    return (
      <div>
        {headerComponent}
        <div className="az-content-wrapper">
          <AppRoutes />
        </div>
        {footerComponent}
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    console.log("ROUTE CHANGED");
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ['/login', '/signup', '/not-found'];
    if (fullPageLayoutRoutes.includes(this.props.location.pathname)) {
      this.setState({
        isFullPageLayout: true
      })
      document.querySelector('.az-content-wrapper').classList.add('p-0');
    } else {
      this.setState({
        isFullPageLayout: false
      })
      document.querySelector('.az-content-wrapper').classList.remove('p-0');
    }
  }

}

export default withRouter(App);
