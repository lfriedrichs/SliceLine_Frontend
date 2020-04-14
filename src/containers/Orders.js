import React, { Component } from 'react'
import Order from '../components/Order'

export default class Orders extends Component {

  render() {
    const orders = this.props.orders.map(order => <Order order={order}/>)
    return (<div>{orders}</div>)
  }
}