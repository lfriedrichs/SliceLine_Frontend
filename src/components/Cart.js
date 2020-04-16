import React from 'react'
import Pizza from './Pizza'

const Cart = (props) => {

  const pizzas = props.pizzas.map((pizza , index)=> <Pizza pizza={pizza} removePizza={props.removePizza} key={index}/>)

  
    return(
        <div className="cart">
       <div className="text-light"> <h1 className="cart header">Pizzas in Order</h1> </div>
          <div className="pizzas">
            { pizzas }
          </div>
        </div>
    )
}

export default Cart