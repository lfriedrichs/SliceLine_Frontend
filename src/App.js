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

  login = (user) => {
    fetch(`http://localhost:3000/api/v1/users/${user}`)
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        console.log(data)
        this.setState({
          user: data
        })
      });
  }

  render() {

    return (
      <div>
        {!this.state.user ? (
          <Login onLogin={this.login}/> 
        ) : (
          <Router>
            <div>

              <NavBar />
              <Route exact path="/makePizza" render={ (props) => 
                <NewOrder user_id={this.state.user.id}/>
              }/>
              {/* component={NewOrder />  */}

            </div>
          </Router>
        )}
      </div>
    )
  }
};