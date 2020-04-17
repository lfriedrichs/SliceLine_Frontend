import React, { Component } from 'react'
import MainForm from '../components/MainForm'
import Cart from '../components/Cart'
import Button from 'react-bootstrap/Button'
export default class NewOrder extends Component {

    state = {
        id_count: this.props.order.pizzas.length - 1,
        pizzas: this.props.order.pizzas
    }

    addToOrder = (hash, id) => {
        const array = this.state.pizzas
        const pizza = hash
        pizza.id = id
        array.push(pizza)
        this.setState({
            id_count: id + 1,
            pizzas: array
        });
    }

    removePizza = (id) => {
        const pizzas = this.state.pizzas.filter(pizza => pizza.id !== id)
        this.setState({
            pizzas
        });
    }

    updateOrder = () => {
        fetch('http://localhost:3000/api/v1/orders', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                order: {
                    id: this.props.order.id,
                    pizzas: this.state.pizzas,
                    user_id: this.props.user_id
                }
            })
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.props.confirmEdit(result);
                    this.setState({
                        id_count: 0,
                        pizzas: []
                    })
                },
                (error) => {
                    console.log(error.message)
                }
            )
    }

    render() {
        return (
            <div>
                <MainForm addToOrder={this.addToOrder} id={this.state.id_count} />
                <Cart pizzas={this.state.pizzas} removePizza={this.removePizza} />
                <Button variant="dark" onClick={this.placeOrder}>Place Order</Button>

            </div>
        )
    }
}