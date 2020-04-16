import React, { Fragment } from 'react'

const cheeseArray = ['feta', 'parmesan', 'mozzarella', 'ricota']

const CheeseForm = (props) => {
  return (
    <Fragment>
      <h1><label htmlFor="cheese">Cheese</label></h1>

      <div className="inline fields ui centered grid">

        {cheeseArray.map((cheese, index) => {
          return props.fillForm(cheese, 'cheese', index)
        })}
       
      </div>
    </Fragment>
  )
}

export default CheeseForm