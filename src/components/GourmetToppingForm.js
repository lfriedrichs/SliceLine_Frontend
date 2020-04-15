import React, { Fragment } from 'react'

const gourmetToppingsArray = ['basil', 'jalapeno peppers', 'chives', 'sundried tomatoes', 'pepper', 'parsley', 'anchovies', 'shrimp', 'salmon']

const GourmetToppingForm = (props) => {
  return (
    <Fragment>
      <h1><label htmlFor="gourmetTopping">Gourmet Toppings</label></h1>

      <div className="inline fields ui centered grid">

        {gourmetToppingsArray.map(gourmetTopping => {
          return props.fillForm(gourmetTopping, 'gourmet_toppings')
        })}
       
      </div>
    </Fragment>
  )
}

export default GourmetToppingForm