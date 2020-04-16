import React from 'react'

const Pizza = (props) => {
    const onClick = (props.removePizza ? ( () => {
        props.removePizza(props.pizza.id)
    }) : (''))
    
    return (
        <div>
            {props.pizza.size} pizza with {props.pizza.sauce} sauce, 
            {' ' + props.pizza.cheese} cheese 
            {(props.pizza.toppings[0] ? (' and ' + props.pizza.toppings.join(', ')) : (''))}
            {(props.pizza.gourmet_toppings[0] ? (' and ' + props.pizza.gourmet_toppings.join(', ')) : (''))}            {(props.removePizza ? (<button onClick={onClick}>Remove</button>) : (''))}
        </div>
    )
}
export default Pizza