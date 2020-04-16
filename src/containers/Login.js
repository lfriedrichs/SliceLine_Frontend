import React, { Component } from 'react'
class Login extends Component {

  handleClick = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    this.props.onLogin(username);
  }

  render() {
    return (
      <form onSubmit={this.handleClick}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" />
          </label>
        </div>

        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default Login;









