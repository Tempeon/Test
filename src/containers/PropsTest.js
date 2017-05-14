import {connect} from 'react-redux'
import StartTest from '../components/StartTest'
import {SaveRezultTest, IncrementQuestion} from '../action'


const mapStateToProps = (state) => {
  return{
    questionTest: state.stateTest,
    params: state.stateTestParams
}}

const mapDispatch = (dispatch) => {
  return{
    saveRezultTests: (idQuestion, idAnswer, count) => {
        dispatch(SaveRezultTest(idQuestion, idAnswer, count))
        dispatch(IncrementQuestion())
    },
    incrementQuestion: () => {
      
    }
  }
}

const PropsTest = connect(
  mapStateToProps,
  mapDispatch
)(StartTest)

export default PropsTest