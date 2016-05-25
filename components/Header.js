import React from 'react'
import { Link } from 'react-router'

export default class Header extends React.Component {
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
}
