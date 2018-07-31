import React, { Component } from 'react';
import './App.css';
import ContentPage from './components/ContentPage';
import SigninForm from './components/SigninForm';

// Root app component, containing Sign-in page and Content-page
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      idError: '',
      loggedIn: false
    };
  }

  handleLogin = (id, password) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const isValid = emailRegex.test(id);
    // If the email is valid we will log them in,
    // ignore the password (for this demonstration)
    this.setState({
      id: id,
      idError: (isValid ? '' : 'error'),
      loggedIn: isValid
    });
  };

  render() {
    return (
      <div>
        <div className={"SigninPage--root" + (this.state.loggedIn ? ' hidden' : '')}>
          <div className="SigninPage--container">
            <h1 className="SigninPage--heading">Videri</h1>
            <span className="SigninPage--subheading">orchestrator</span>
            <SigninForm
              onSubmit={this.handleLogin}
              idError={this.state.idError}
            />
          </div>
        </div>
        <div className={"ContentPage--root" + (this.state.loggedIn ? '' : ' hidden')}>
          <ContentPage username={this.state.id} />
        </div>
      </div>
    );
  }
}

export default App;
