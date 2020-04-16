import React, { Component } from 'react'
import NavBar from './containers/NavBar';
import NewOrder from './containers/NewOrder';
import Orders from './containers/Orders';
import OrderConfirmation from './components/OrderConfirmation';
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
    result: null
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

  confirmOrder = (result) => {
    const orders = this.state.user.orders;
    orders.push(result);
    this.setState( prevState => {
      return {
        user: {
          ...prevState.user,
          orders: orders
        },
        result: result
      }
    })
    window.history.pushState({}, `/${this.state.user.name}/orderconfirmation`, `/${this.state.user.name}/orderconfirmation`)
  }

  clearResult = () => {
    this.setState({ result: null })
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
          <Login onLogin={this.login} />
        ) : (!this.state.result ? (
          <Router>
            <div>
              <div style={this.sectionStyle}>
                <NavBar clearResult={this.clearResult} user_name={this.state.user.name}/>
              </div>

              <Route exact path={`/${this.state.user.name}/neworder`} render={(props) =>
                <NewOrder user_id={this.state.user.id} confirmOrder={this.confirmOrder} />
              } />

              <Route exact path={`/${this.state.user.name}/orders`} render={(props) =>
                <Orders user_name={this.state.user.name} orders={this.state.user.orders}/>
              } />

            </div>
            {/* welcome user  */}
          </Router>) : (
            <Router><div style={this.sectionStyle}>
              <NavBar clearResult={this.clearResult} user_name={this.state.user.name}/>
              <OrderConfirmation user_name={this.state.user.name} result={this.state.result} />
            </div></Router>
          ))}
        <div className="backy"> </div>
      </div>
    )
  }
};