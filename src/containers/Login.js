import React, { Component } from 'react'
import '../index.css';
class Login extends Component {

  handleClick = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    this.props.onLogin(username);
  }

  render() {
    return (<div className='login'><h1 className='welcome'>Welcome to Sliceline!</h1>
      <form onSubmit={this.handleClick}>
        <div>
          <label className="text-light">
            Username
            <input id="username" name="username" type="text" />
          </label>
        </div>

        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
      </div>
    );
  }
}

export default Login;









