import React, { Component } from 'react';
import './SigninForm.css';


// Component for User ID + Password with validation for ID
// Receives props from App component (the page component) for ID validation
// as well as a callback for form submition
class SigninForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      password: ''
    };
  }

  handleChangeId = (e) => {
    this.setState({id: e.target.value});
  }

  handleChangePassword = (e) => {
    this.setState({password: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.id, this.state.password);
  }

  render() {
    return (
      <div className="SigninForm--root-container">
        <span className="SigninForm--label">Sign In</span>
        <form onSubmit={this.handleSubmit}>
          <input
            className="SigninForm--id"
            type="text"
            value={this.state.id}
            onChange={this.handleChangeId}
            placeholder="ID"
            required
          />
          <div className={"SigninForm--id-error" + (this.props.idError ? ' error' : '')}>Invalid ID</div>
          <input
            className="SigninForm--password"
            type="password"
            value={this.state.password}
            onChange={this.handleChangePassword}
            placeholder="PASSWORD"
            required
          />
          <input className="SigninForm--submit" type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}

export default SigninForm;
