const stateUserAnswer = (state = [], action) =>{
  console.log(state)
  switch(action.type){
    case 'SAVE_REZULT_TEST':
    return[...state, {
          idQuestion: action.idQuestion,
          idAnswer: action.idAnswer
        } ]
        
    default:
      return state
  }
    
}

export default stateUserAnswer