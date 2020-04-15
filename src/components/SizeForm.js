import React, { Fragment } from 'react'

const sizeArray = ['small', 'medium', 'large']

const SizeForm = (props) => {
  return (
    <Fragment>
      <h1><label htmlFor="size">Size</label></h1>

      <div className="inline fields ui centered grid">

        {sizeArray.map(size => {
          return props.fillForm(size, 'size')
        })}
       
      </div>
    </Fragment>
  )
}

export default SizeForm