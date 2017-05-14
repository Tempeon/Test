import React from 'react'
import PropsTest from '../containers/PropsTest'
import ShowRezult from '../containers/ShowRezult'
import {BrowserRouter as Router, Route} from 'react-router-dom'

let App = () => {
  console.log('start')
  return (
    <Router>
      <div>
        <Route exact  path='/test' component = {PropsTest}/>
        <Route path='/rezult' component={ShowRezult}/>
      </div>
    </Router>
  )
}

export default App