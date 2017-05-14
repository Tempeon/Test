const params = {
  count: 0,
  time: 60
}

const stateTestParams = (state = params, action) => {
  switch(action.type){
    case 'INCREMENT_QUESTION':
      return {
        ...state,
        count: state.count +1
      }  
    default:
      return state
  }
}

export default stateTestParams