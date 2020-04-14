import React, { Fragment } from 'react'

const toppingsArray = ['artichoke hearts', 'avocado', 'broccoli', 'capers', 'green peppers', 'mushrooms', 'onions', 'olives', 'roasted garlic', 'spinach', 'sun dried tomatoes', 'zucchini', 'bacon, bbq chicken, ham, meatballs, pepperoni, proscuitto, salami, sausage']

const ToppingForm = (props) => {
  return (
    <Fragment>
      <h1><label htmlFor="topping">Toppings</label></h1>

      <div className="inline fields ui centered grid">

        {toppingsArray.map(topping => {
          return props.fillForm(topping, 'topping')
        })}
       
      </div>
    </Fragment>
  )
}

export default ToppingForm