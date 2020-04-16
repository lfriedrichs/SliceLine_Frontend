import React, { Fragment } from 'react'

const sauceArray = ['tomato', 'white', 'bbq', 'garlic olive oil', 'french white', 'lemon hill', 'satay']

const SauceForm = (props) => {
  return (
    <Fragment>
      <h1><label htmlFor="sauce">Sauce</label></h1>

      <div className="inline fields ui centered grid">

        {sauceArray.map((sauce, index) => {
          return props.fillForm(sauce, 'sauce', index)
        })}
       
      </div>
    </Fragment>
  )
}

export default SauceForm