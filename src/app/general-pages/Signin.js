import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Signin extends Component {
      constructor() {
        super();
          this.state = {
                Email : '', 
                Password : ''
          }
            this.Password = this.Password.bind(this);
            this.Email = this.Email.bind(this);
            this.login = this.login.bind(this);
      }

      Email(event){
        this.setState({Email : event.target.value});
      }
      Password(event){
        this.setState({Password : event.target.value});
      }
      login(event){
        debugger;
        fetch('', { 
          method : 'POST',
          headers : {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
          },
          body: JSON.stringify({
            Email : this.state.Email,
            Password : this.state.Password       
          })
        }).then((Response)=> Response.json())
          .then((result) =>{
            console.log(result);
           if(result.status === 'Invalid')
              alert('Invalid User');
            else
            this.props.history.push('./Dashboard');
          })
      }

  render() {
    return (
      <div>
        <div className="az-signin-wrapper">
          <div className="az-card-signin">
            <h1 className="az-logo">Crypto<span>fintech</span>x</h1>
            <div className="az-signin-header">
              <h2>Welcome back!</h2>
              <h4>Please sign in to continue</h4>

              <form action="#/">
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" placeholder="Enter your email" onChange={this.Email} />
                </div>{/* form-group */}
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Enter your password" onChange={this.Password}/>
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

export default Signin;
