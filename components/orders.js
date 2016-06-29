import React from 'react'
//import { Map,List } from 'immutable'
import Immutable from 'immutable'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import '../assets/css/order.css'

class Orders extends React.Component {
  constructor(props) {
    super(props)
    /*
    this.state = {
      orders:List([
        Map({
          a:11,
          b:22,
          c:[ 1,2,3 ]
        })
      ])
    }
    */
    this.state = Immutable.fromJS({
      orders:[
        {
          a:11,
          b:22,
          c:[ 1,2,3 ]
        }
      ]
    })
    this.shouldComponentUpdate  = PureRenderMixin.shouldComponentUpdate.bind(this)
    //this.state = da
  }
  changeState() {
    this.setState(({ data }) => ({ data:data.update('a', v => v + 1) }))
    console.info(this.state.data)
  }
  render() {
    let orders = this.state.get('orders')
    return(
      <main>
        <div className="main-wrapper">
          <div className="orders-wrapper">
              <h2>Orders</h2>
              <div className="main">
                <table>
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>num</th>
                      <th>price</th>
                      <th>time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map(function (order,i) {
                      return (<tr key={i}>
                        <td>{order.get('a')}</td>
                        <td>{order.get('b')}</td>
                        <td>{order.get('c')}</td>
                        <td>3213</td>
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
