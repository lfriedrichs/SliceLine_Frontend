import React, { Component } from 'react'
import NavBar from './containers/NavBar';
import PizzaSlap from './containers/PizzaSlap';
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
              <Route exact path="/makePizza" component={PizzaSlap} />

            </div>
          </Router>
        }
      </div>
    )
  }
};
