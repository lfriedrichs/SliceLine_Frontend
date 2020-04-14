import React from 'react'
import Pizza from './Pizza'

const Cart = (props) => {

  const pizzas = props.pizzas.map(pizza => <Pizza pizza={pizza} removePizza={props.removePizza}/>)

  
    return(
        <div className="cart">
        <h1 className="cart header">Pizzas in Order</h1>
          <div className="pizzas">
            { pizzas }
          </div>
        </div>
    )
}

export default Cart