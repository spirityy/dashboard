import React from 'react'
import { Link } from 'react-router'

export default class Side extends React.Component {
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
}
