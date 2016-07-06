import React from 'react'
import { Link } from 'react-router'

export default class Side extends React.Component {
  render() {
    return(
      <aside>
        <ul>
          <li><Link to="/order" activeClassName="active">Order</Link></li>
          <li><Link to="/user" activeClassName="active">User</Link></li>
        </ul>
      </aside>
    )
  }
}
