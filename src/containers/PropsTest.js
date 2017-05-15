import {connect} from 'react-redux'
import StartTest from '../components/StartTest'
import {SaveRezultTest, IncrementQuestion, DecrementTimer} from '../action'
import {withRouter} from 'react-router'


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
    decrementTimer: ()=>{
      dispatch(DecrementTimer())
    }

  }
}

const PropsTest = withRouter(connect(
  mapStateToProps,
  mapDispatch
)(StartTest))

export default PropsTest