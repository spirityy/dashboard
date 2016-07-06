import React from 'react'
//import { Map,List } from 'immutable'
import Immutable from 'immutable'
//import PureRenderMixin from 'react-addons-pure-render-mixin'
import { shouldComponentUpdate } from 'react-immutable-render-mixin'

import '../assets/css/order.css'

class Orders extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders:Immutable.fromJS([
        {
          id:1,
          num:1,
          price:11.3,
          totalprice:11.3
        },
        {
          id:2,
          num:1,
          price:15,
          totalprice:15
        }
      ])
    }
    //this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.shouldComponentUpdate = shouldComponentUpdate.bind(this)
  }
  changeNum(i,method) {
    //let order = this.state.get('orders').get(i)
    //console.info(order)
    let orders = this.state.orders
    switch (method) {
      case 'plus':
        orders = (() => {
          return orders.update(i,(order) => {
            return Immutable.fromJS({ id:order.get('id'),num:parseInt(order.get('num')) + 1 ,price:order.get('price'),totalprice: parseFloat(order.get('price')) * (parseInt(order.get('num')) + 1) })
          })
        })()
        this.setState({ orders })
        break
      case 'reduce':
        orders = (() => {
          return orders.update(i,(order) => {
            return Immutable.fromJS({ id:order.get('id'),num:parseInt(order.get('num')) - 1 ,price:order.get('price'),totalprice: parseFloat(order.get('price')) * (parseInt(order.get('num')) - 1) })
          })
        })()
        this.setState({ orders })
        break
    }
  }
  editPrice() {

  }
  render() {
    console.info('render')
    let orders = this.state.orders
    return(
      <main>
        <div className="main-wrapper">
          <div className="orders-wrapper">
              <h2>Orders</h2>
              <div className="main">
                <table>
                  <thead>
                    <tr>
                      <th width="20%">id</th>
                      <th width="20%">num</th>
                      <th width="20%">price</th>
                      <th width="20%">totalprice</th>
                      <th width="20%">time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map(function (order,i) {
                      return (<tr key={i}>
                        <td>{order.get('id')}</td>
                        <td>
                          <i onClick={this.changeNum.bind(this,i,'reduce')}>-</i>
                          {order.get('num')}
                          <i onClick={this.changeNum.bind(this,i,'plus')}>+</i>
                        </td>
                        <td>
                          {order.get('price')}
                          <button className="edit-btn" onclick="{this.editPrice}">edit</button>
                        </td>
                        <td>{order.get('totalprice')}</td>
                        <td>2015-03-09</td>
                      </tr>)
                    }.bind(this))}
                  </tbody>
                </table>
              </div>
          </div>
        </div>
      </main>
    )
  }
}

module.exports = Orders
