import React, { Component } from 'react';
import ComponentsSidebar from '../shared/ComponentsSidebar';
import {Button, Collapse} from 'react-bootstrap';

export class Collapses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>UI Elements</span>
              <span>Collapse</span>
            </div>
            <h2 className="az-content-title">Collapse</h2>

            <div className="az-content-label mg-b-5">Basic Example</div>
            <p className="mg-b-20">Click the buttons below to show and hide another element via class changes.</p>

            <div>
              <Button
                onClick={ () => this.setState({open: !this.state.open}) }
                aria-controls="example-collapse-text"
                aria-expanded={this.state.open}
              >
                click
              </Button>
              <Collapse in={this.state.open}>
                <div id="example-collapse-text">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.
                </div>
              </Collapse>
            </div>

            <div className="ht-40"></div>

          </div>{/* az-content-body */}
        </div>{/* container */}
      </div>
    )
  }
}

export default Collapses
