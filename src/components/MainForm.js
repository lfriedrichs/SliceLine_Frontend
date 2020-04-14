import React, { Component } from 'react'
import SauceForm from './SauceForm'
import CheeseForm from './CheeseForm'
import ToppingForm from './ToppingForm'
import GourmetToppingForm from './GourmetToppingForm'

const DEFAULT_STATE = {
  sauce: null,
  cheese: null,
  toppings: [],
  gourmet_toppings: []
}

class MainForm extends Component {
  state = {
    ...DEFAULT_STATE
  }

  fillForm = (element, type) => {
    return (<div className="field">
        <div className="ui checkbox">
            <input
              id={element}
              type="checkbox"
              value={element.titleize}
              name={type}
              checked={ this.props[type].includes(element.titleize) }
              onChange={(e) => this.props.handleOnChange(e)}
            />
            <img src={ require(`../images/${type}/${element}.png`) }height="100px" width="100px" alt={element} />
            <label htmlFor={element}>{element.titleize}</label>
        </div>
    </div>)
    }

  handleSubmit = (event) => {
  
    event.preventDefault()
    document.getElementById("order-form").reset()
    this.props.addOrder(this.state)

    this.setState({
      ...DEFAULT_STATE
    })
  }

  handleChange = (event) => {
  
    const itemType = event.target.name;
    const item = event.target.value;
    let value = this.state[itemType];

    (Array.isArray(value) ? (
        value.push(item)
        ) : (
        value = item
        )
    )

    this.setState({
        [itemType]: value
    })

  }

  render() {
    return(
      <div className="ui raised container segment">
        <h1 className="ui block header">Create a Pizza</h1>
        <form className="ui form" id="order-form" onSubmit={ this.handleSubmit }>
          <SauceForm
            sauce={ this.state.sauce }
            handleOnChange={ this.handleChange }
            fillForm = { this.fillForm }
          />

          <CheeseForm
            cheese={ this.state.cheese }
            handleOnChange={ this.handleChange }
            fillForm = { this.fillForm }
          />

          <ToppingForm
            toppings={ this.state.toppings }
            handleOnChange={ this.handleChange }
            fillForm = { this.fillForm }
          />

          <GourmetToppingForm
            gourmet_toppings={ this.state.gourmet_toppings }
            handleOnChange={ this.handleChange }
            fillForm = { this.fillForm }
          />

          <br />

          <button className="ui blue big button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default MainForm