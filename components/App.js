import React from 'react'
import '../assets/css/index.css'

import Header from './Header'
import Side from './Side'

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Side />
        { this.props.children }
      </div>
    )
  }
}

module.exports = App
