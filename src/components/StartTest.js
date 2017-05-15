import React, {Component} from 'react'

import Test from './Test'

class StartTest extends Component  {
  constructor(props){
    super(props)
    this.state={start: false}
    this.started = this.started.bind(this)
  }

  started(){
    this.setState({start: !this.state.start})
  }
  render(){
    const {questionTest, saveRezultTests, params, decrementTimer} = this.props
    return(
      <div>
        {!this.state.start ?
          <div>
            <h3>Start?</h3>
            <button onClick={()=> this.started()}>
              Go
            </button>
          </div> :
          <Test 
          questionTest={questionTest}
          saveRezultTests={saveRezultTests}
          params={params}
          decrementTimer={decrementTimer}
          />
        }
      </div>
    )
  }
}
export default StartTest