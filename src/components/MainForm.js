import React, { Component } from 'react'
import SauceForm from './SauceForm'
import CheeseForm from './CheeseForm'
import ToppingForm from './ToppingForm'
import GourmetToppingForm from './GourmetToppingForm'

const DEFAULT_STATE = {
  sauce: '',
  cheese: '',
  toppings: [],
  gourmet_toppings: []
}

class MainForm extends Component {
  state = {
    id: this.props.id,
    ...DEFAULT_STATE
  }

  handleChange = (event) => {
    event.persist()
    const itemType = event.target.name;
    const item = event.target.value;
    let value = this.state[`${itemType}`];

    (Array.isArray(value) ? (
        value.push(item)
        ) : (
        value = item
        )
    )

    this.setState({
        [`${itemType}`]: value
    })
  }

  handleSubmit = (event) => {
  
    event.preventDefault()
    document.getElementById("order-form").reset()
    this.props.addToOrder(this.state)

    this.setState({
      ...DEFAULT_STATE
    })
  }

  fillForm = (element, type) => {
    let status;
    if (Array.isArray(this.state[type])) {
      status = this.state[type].includes(element)
    } else {
      status = this.state[type] === element
    }
    return (<div className="field">
        <div className="ui checkbox">
            <input
              id={element}
              type="checkbox"
              value={element}
              name={type}
              checked={status}
              onChange={(e) => this.handleChange(e)}
            />
            <img src={ require(`../images/${type}/${element}.png`) }height="100px" width="100px" alt={element} />
            <label htmlFor={element}>{element}</label>
        </div>
    </div>)
    }

  render() {
    return(
      <div className="ui raised container segment">
        <h1 className="ui block header">Create a Pizza</h1>
        <form className="ui form" id="order-form" onSubmit={ this.handleSubmit }>
          <SizeForm
            size={this.state.size}
            fillForm={this.fillForm}
          />
          
          <SauceForm
            sauce={ this.state.sauce }
            fillForm = { this.fillForm }
          />

          <CheeseForm
            cheese={ this.state.cheese }
            fillForm = { this.fillForm }
          />

          <ToppingForm
            toppings={ this.state.toppings }
            fillForm = { this.fillForm }
          />

          <GourmetToppingForm
            gourmet_toppings={ this.state.gourmet_toppings }
            fillForm = { this.fillForm }
          />

          <br />

          <button className="ui blue big button" type="submit">Add Pizza</button>
        </form>
      </div>
    )
  }
}

export default MainForm