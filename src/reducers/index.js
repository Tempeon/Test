import React from 'react'
import {combineReducers} from 'redux'
import stateTest from './stateTest'
import stateUserAnswer from './stateUserAnswer'
import stateTestParams from './stateTestParams'

const reducerApp = combineReducers({
  stateTest,
  stateUserAnswer,
  stateTestParams
})

export default reducerApp