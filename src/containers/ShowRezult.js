import {connect} from 'react-redux'
import RezultTest from '../components/RezultTest'


const mapStateToProps = (state)=>{
  return{
    test: state.stateTest,
    user: state.stateUserAnswer
  }
}

const mapDispatch = (tispatch)=>{
  return{
    
  }
}

const ShowRezult = connect(
  mapStateToProps,
  mapDispatch
)(RezultTest)

export default ShowRezult