import React, { Component } from 'react'
import NavBar from './containers/NavBar';
import NewOrder from './containers/NewOrder';
import Login from './containers/Login';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './images/pixur.png'
export default class App extends Component {

  state = {
    user: null,
    orders: []
  }
  sectionStyle = {
    backgroundImage: `url(${background})`,
    minHeight: '60px',
    
  }
  sectionStyl = {
    backgroundImage: `url(${background})`,
    minHeight: '1500px',
    overflow: 'scroll'
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
      <div style={this.sectionStyl}>
        {!this.state.user ? (
          <Login onLogin={this.login}/> 
        ) : (
          <Router>
            <div>
            <div style={this.sectionStyle}>
              <NavBar />
              </div>
              
              <Route exact path="/makePizza" render={ (props) => 
                <NewOrder user_id={this.state.user.id}/>
              }/>
             
              {/* component={NewOrder />  */}

            </div>
          </Router>
          
        )}
       <div className="backy"> </div>
      </div>
    )
  }
};