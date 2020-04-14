import React, { Component } from 'react'
import MainForm from '../components/MainForm'
import Cart from '../components/Cart'

export default class NewOrder extends Component {

    state = {
        id_count: 0,
        pizzas: []
      }

    addToOrder = (hash) => {
        const array = this.state.pizzas
        array.push(hash)
        this.setState((state) => {
          return {id_count: state.id_count + 1, pizzas: array}
        });
    } 

    removePizza = (id) => {
      const pizzas = this.state.pizzas.filter(pizza => pizza.id !== id)
      console.log(pizzas)
      this.setState({pizzas: pizzas})
      console.log(this.state)
    }

    placeOrder = () => {
      fetch('http://localhost:3000/api/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(this.state)
      }).then( res => res.json()
      ).then(
        (result) => {
          this.props.confirmOrder(result);
          this.setState({id_count: 0, pizzas: []})
        },
        (error) => {
          console.log(error.message)
        }
      )
    }

  render() {
    return (
        <div>
          <MainForm addToOrder={this.addToOrder} id={this.state.id_count}/>
          <Cart pizzas={this.state.pizzas} removePizza={this.removePizza}/>
          <button onClick={this.placeOrder}>Place Order</button>
          </div>
    )
  }
}









