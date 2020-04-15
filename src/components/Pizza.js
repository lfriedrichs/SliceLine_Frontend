import React from 'react'

const Pizza = (props) => {

    const onClick = () => {
      
        props.removePizza(props.pizza.id)
    }
    console.log(props)
    return (
       
        <div>
            
            {props.pizza.size} pizza with {props.pizza.sauce} sauce, {props.pizza.cheese} cheese
            <button onClick={onClick}>Remove</button>
        </div>
    )
}
export default Pizza