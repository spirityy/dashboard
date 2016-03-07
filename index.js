import React from 'react'
import { Router,Route,Link,browserHistory,IndexRoute } from 'react-router'
import { render } from 'react-dom'
import './assets/css/index.css'

//components
import Orders from './components/orders.js'
import Users from './components/users.js'

//pages
const Header = React.createClass({
  render() {
    return(
      <header>
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="hd">
          Dashboard
        </div>
      </header>
    )
  }
})

const Side = React.createClass({
  render() {
    return(
      <aside>
        <ul>
          <li><Link to="/orders" activeClassName="active">Orders</Link></li>
          <li><Link to="/users" activeClassName="active">Users</Link></li>
        </ul>
      </aside>
    )
  }
})

const Index = React.createClass({
  render() {
    return (
      <main>
        <div className="main-wrapper">
          <h2>welcome</h2>
        </div>
      </main>
    )
  }
})

const App = React.createClass({
  render() {
    return(
      <div>
        <Header />
        <Side />
        {this.props.children}
      </div>
    )
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="/orders" component={Orders} />
      <Route path="/users" component={Users} />
    </Route>
  </Router>
),document.getElementById('app'))