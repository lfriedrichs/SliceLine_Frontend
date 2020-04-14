import React, { Component } from 'react'
class Login extends Component {
  
  
 
  handleClick = (event) => {
    event.preventDefault()
    {
      this.props.onLogin(event.target.username.value)
    }
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









