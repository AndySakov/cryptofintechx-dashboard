/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/authActions";
import classnames from "classnames";

export class Signin extends Component {
      constructor() {
        super();
          this.state = {
                email: '', 
                password: '',
                errors: { }
                         
      };
      }
      
      componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
    if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }


      onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
    onSubmit = e => {
        e.preventDefault();
    const userData = {
          email: this.state.email,
          password: this.state.password
        };
        this.props.loginUser(userData);
      };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="az-signin-wrapper">
          <div className="az-card-signin">
            <h1 className="az-logo">Crypto<span>fintech</span>x</h1>
            <div className="az-signin-header">
              <h2>Welcome back!</h2>
              <h4>Please sign in to continue</h4>

              <form noValidate onSubmit={this.onSubmit} >
                <div className="form-group">
                  <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter your email" onChange={this.onChange} value={this.state.email} error={errors.email} className={classnames("", {invalid: errors.email || errors.emailnotfound})} />
                    <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
                
                </div>{/* form-group */}
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Enter your password" onChange={this.onChange} value={this.state.value} error={errors.password} className={classnames("", {invalid: errors.password || errors.passwordincorrect})} />
                  <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              
                </div>{/* form-group */}
                <Link to="/" className="btn btn-az-primary btn-block"  onClick={this.login}>Sign In</Link>
              </form>
            </div>{/* az-signin-header */}
            <div className="az-signin-footer">
              <p><a href="#/">Forgot password?</a></p>
              <p>Don't have an account? <Link to="/signup">Create an Account</Link></p>
            </div>{/* az-signin-footer */}
          </div>{/* az-card-signin */}
        </div>{/* az-signin-wrapper */}
      </div>
    )
  }
}

Signin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Signin); 

