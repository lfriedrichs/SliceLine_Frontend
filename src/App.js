import React, { Component } from 'react'
import NavBar from './containers/NavBar';
import NewOrder from './containers/NewOrder';
import Login from './containers/Login';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';

export default class App extends Component {
  state = {
    user: null,
    orders: []
  }
  loginMethod = (user) => {
    this.setState({
      user
    })
  }

  render() {

    return (
      <div>
        {!this.state.user ? 
          <Login onLogin={this.loginMethod} user={this.state.user}/> 
        :
          <Router>
            <div>

              <NavBar />
              <Route exact path="/makePizza" component={NewOrder} />

            </div>
          </Router>
        }
      </div>
    )
  }
};
