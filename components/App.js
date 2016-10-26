import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import '../assets/css/index.css'

import Header from './Header'
import Side from './Side'



class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Side />
        <ReactCSSTransitionGroup component="div" transitionName="main">
          { this.props.children }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

module.exports = App
