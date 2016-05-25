import React from 'react'
import { Router,browserHistory } from 'react-router'
import { render } from 'react-dom'

//routes
const rootRoute = {
  path:'/',
  component:require('./components/App'),
  indexRoute:require('./routes/index'),
  childRoutes:[
    require('./routes/users'),
    require('./routes/orders')
  ]
}

render((
  <Router history={browserHistory} routes={rootRoute} />
),document.getElementById('app'))
