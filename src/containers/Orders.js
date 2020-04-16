import React, { Component } from 'react'
import Order from '../components/Order'

export default class Orders extends Component {

  render() {
    const orders = this.props.orders.map((order, index) => <Order order={order} index={index}/>)
    return (<div>{orders}</div>)
  }
}