const params = {
  count: 0,
  time: 10
}

const stateTestParams = (state = params, action) => {
  switch(action.type){
    case 'INCREMENT_QUESTION':
      return {
        ...state,
        count: state.count +1
      }  
      case 'DECREMENT_TIMER':
      console.log(state)
        return{
          ...state,
          time: state.time -1
        }
        case 'SAVE_REZULT_TEST':
          return{
          ...state,
          time: 10
        }
    default:
      return state
  }
}

export default stateTestParams