import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

export class UtilitiesSidebar extends Component {
  render() {
    return (
      <div>
        <div className="az-content-left az-content-left-components">
          <div className="component-item">
            <label>Helper / Utilities</label>
            <nav className="nav flex-column">
              <Link to="/utilities/background" className={ this.isPathActive('/utilities/background') ? "nav-link active" : "nav-link" }>Background</Link>
              <Link to="/utilities/border" className={ this.isPathActive('/utilities/border') ? "nav-link active" : "nav-link" }>Border</Link>
              <Link to="/utilities/display" className={ this.isPathActive('/utilities/display') ? "nav-link active" : "nav-link" }>Display</Link>
              <Link to="/utilities/flex" className={ this.isPathActive('/utilities/flex') ? "nav-link active" : "nav-link" }>Flex</Link>
              <Link to="/utilities/height" className={ this.isPathActive('/utilities/height') ? "nav-link active" : "nav-link" }>Height</Link>
              <Link to="/utilities/margin" className={ this.isPathActive('/utilities/margin') ? "nav-link active" : "nav-link" }>Margin</Link>
              <Link to="/utilities/padding" className={ this.isPathActive('/utilities/padding') ? "nav-link active" : "nav-link" }>Padding</Link>
              <Link to="/utilities/position" className={ this.isPathActive('/utilities/position') ? "nav-link active" : "nav-link" }>Position</Link>
              <Link to="/utilities/typography" className={ this.isPathActive('/utilities/typography') ? "nav-link active" : "nav-link" }>Typography</Link>
              <Link to="/utilities/width" className={ this.isPathActive('/utilities/width') ? "nav-link active" : "nav-link" }>Width</Link>
              <Link to="/utilities/extras" className={ this.isPathActive('/utilities/extras') ? "nav-link active" : "nav-link" }>Extras</Link>
            </nav>
          </div>{/* component-item */}

        </div>{/* az-content-left */}
      </div>
    )
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(UtilitiesSidebar)