import React, { Fragment } from 'react'

const toppingsArray = ['kidney beans', 'asparagus', 'celery', 'garlic', 'red pepper', 'capers', 'cherkin', 'broccoli', 'lime', 'green peppers', 'mushrooms', 'onions', 'olives', 'spinach', 'pineapples', 'bacon', 'ham', 'pepperoni', 'salami', 'lamb', 'chicken', 'beef', 'pork']

const ToppingForm = (props) => {
  return (
    <Fragment>
      <h1><label htmlFor="topping">Toppings</label></h1>

      <div className="inline fields ui centered grid">

        {toppingsArray.map((topping, index) => {
          return props.fillForm(topping, 'toppings', index)
        })}
       
      </div>
    </Fragment>
  )
}

export default ToppingForm