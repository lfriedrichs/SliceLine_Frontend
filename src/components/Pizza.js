import React from 'react'

const Pizza = (props) => {

    const onClick = () => {
        props.removePizza(props.id)
    }
    return (
        <div>
            {props.size} pizza with {props.sauce} sauce, {props.cheese} cheese
            <button onClick={onClick}>Remove</button>
        </div>
    )
}
export default Pizza