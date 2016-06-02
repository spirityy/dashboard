import React from 'react'
import Immutable from 'immutable'
import PureRenderMixin from 'react-addons-pure-render-mixin'

//let da = { a:11, b:22, c:[ 1,2,3 ] }

class Orders extends React.Component {
  constructor(props) {
    super(props)
    this.state = Immutable.fromJS({
      a:11,
      b:22,
      c:[ 1,2,3 ]
    })
    this.shouldComponentUpdate  = PureRenderMixin.shouldComponentUpdate.bind(this)
    //this.state = da
  }
  shouldComponentUpdate() {
    console.info(11)
    return true
  }
  changeState() {
    this.setState({ a:22 })
  }
  render() {
    return(
      <main>
        <div className="main-wrapper">
          <div className="users-wrapper">
              <h2>Orders</h2>
              <div className="main">
                <h3>{this.state.a}</h3>
                <button onClick={this.changeState.bind(this)}>change state</button>
              </div>
          </div>
        </div>
      </main>
    )
  }
}

module.exports = Orders
