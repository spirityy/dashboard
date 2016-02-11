import React from 'react'
import { Router,Route,Link,browserHistory } from 'react-router'
import { render } from 'react-dom'
import './index.css'
//import data from './data.js'

const Header = React.createClass({
  render() {
    return(
      <header>Dashboard</header>
    )
  }
})

const Side = React.createClass({
  render() {
    return(
      <aside>
        <ul>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
      </aside>
    )
  }
})

const Main = React.createClass({
  render() {
    console.info(this.props);
    return (
      <main>
        {this.props.content || 'welcome'}
      </main>
    )
  }
})

/*
const Orders = React.createClass({
  render() {
    return(
      <div>
        <h2>Orders</h2>
      </div>
    )
  }
})

const Users = React.createClass({
  render() {
    return(
      <div>
        <h2>Users</h2>
      </div>
    )
  }
})
*/

const App = React.createClass({
  render() {
    return(
      <div>
        <Header/>
        <Side/>
        <Main content={this.props.params.sideitem}/>
      </div>
    )
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/:sideitem" component={Main}/>
    </Route>
  </Router>
),document.getElementById('app'))
