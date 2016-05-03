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
<<<<<<< HEAD
          <Link to="/">Logo</Link>
=======
          <Link to="/dashboard">Logo</Link>
>>>>>>> master
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
<<<<<<< HEAD
          <li><Link to="/orders" activeClassName="active">Orders</Link></li>
          <li><Link to="/users" activeClassName="active">Users</Link></li>
=======
          <li><Link to="/dashboard/orders" activeClassName="active">Orders</Link></li>
          <li><Link to="/dashboard/users" activeClassName="active">Users</Link></li>
>>>>>>> master
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
<<<<<<< HEAD
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="/orders" component={Orders} />
      <Route path="/users" component={Users} />
=======
    <Route path="/dashboard" component={App}>
      <IndexRoute component={Index} />
      <Route path="orders" component={Orders} />
      <Route path="users" component={Users} />
>>>>>>> master
    </Route>
  </Router>
),document.getElementById('app'))
