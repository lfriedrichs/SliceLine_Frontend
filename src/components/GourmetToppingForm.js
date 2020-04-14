import React, { Fragment } from 'react'

const gourmetToppingsArray = ['basil, jalapeno peppers, oregano', 'anchovies, shrimps, squid']

const GourmetToppingForm = (props) => {
  return (
    <Fragment>
      <h1><label htmlFor="gourmetTopping">Gourmet Toppings</label></h1>

      <div className="inline fields ui centered grid">

        {gourmetToppingsArray.map(gourmetTopping => {
          return props.fillForm(gourmetTopping, 'gourmetTopping')
        })}
       
      </div>
    </Fragment>
  )
}

export default GourmetToppingForm