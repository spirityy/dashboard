import React from 'react'
import { Router,Route,Link,browserHistory,IndexRoute } from 'react-router'
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

const Index = React.createClass({
  render() {
    return (
      <main>
        <h2>welcome</h2>
      </main>
    )
  }
})

const Orders = React.createClass({
  render() {
    return(
      <main>
        <h2>Orders</h2>
      </main>
    )
  }
})

const Users = React.createClass({
  render() {
    return(
      <main>
        <h2>Users</h2>
      </main>
    )
  }
})

const App = React.createClass({
  render() {
    return(
      <div>
        <Header/>
        <Side/>
        {this.props.children}
      </div>
    )
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/orders" component={Orders}/>
      <Route path="/users" component={Users}/>
    </Route>
  </Router>
),document.getElementById('app'))
