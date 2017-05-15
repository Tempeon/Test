import React from 'react'
import PropsTest from '../containers/PropsTest'
import ShowRezult from '../containers/ShowRezult'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { withRouter } from 'react-router'


let App = () => {
  console.log(withRouter)
  console.log('start')
  return (
    <Router >
      <div>
        <Route exact  path='/test' component = {PropsTest}/>
        <Route path='/rezult' component={ShowRezult}/>
      </div>
    </Router>
  )
}

export default App