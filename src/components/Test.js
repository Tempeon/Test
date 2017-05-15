import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Timer from './Timer'
import { withRouter } from 'react-router'


class Test extends Component  {
  constructor (props){
    super(props)
    this.state={idAnswer: null, checked: false, idQuestion: null}
    this.next = this.next.bind(this)
    //this.previous = this.previous.bind(this)
    this.handleChange = this.handleChange.bind(this)
    //this.random = this.random.bind(this)
    this.Timer = null
    this.startTimer = this.startTimer.bind(this)
  }

  next(questionid){
    const {saveRezultTests, decrementTimer} = this.props
    saveRezultTests(this.state.idQuestion || questionid, this.state.idAnswer, this.state.count); //count
    this.setState({idAnswer: null, idQuestion: null})
    clearInterval(this.Timer);
    this.startTimer()
  }
    componentDidMount() { 
    this.startTimer()
  } 

  startTimer(){
    const {decrementTimer, params, history} = this.props
    console.log(history)
    this.Timer = setInterval(()=>decrementTimer(), 1000)

    //history.push('/rezult')
  }
  componentWillUnmount() { 
    clearInterval(this.Timer); 
    
  } 

  componentWillReceiveProps(nextProps){
    const {params, questionTest} = this.props
    if(params.time == 0){
      console.log('next')
      this.next(questionTest[params.count].id)
      //this.startTimer()
      }

  }
/*previous(){
  this.setState({count: this.state.count-1}) //count
}*/

/*random(mass){
  const newMass = [] 
    while(newMass.length < mass.length){
    const random = parseInt(Math.random()*mass.length)
      if(newMass.indexOf(random) === -1)
        newMass.push(random)
    }
    const x = newMass.map(t=> mass[t])
    return x
  }*/
handleChange(id, q){
  this.setState({idAnswer: id, idQuestion: q, checked: !this.state.checked})
}


  render(){
    const {questionTest, saveRezultTests, params, } = this.props
        /**/
    return(
      <div>
      {params.time}
        <div>
          {params.count+1}  - 
          {questionTest[params.count].title}
          <pre>{questionTest[params.count].code}</pre>
        </div>
        <ul>
          {
            questionTest[params.count].answers.map(t=>{
              return(
                <li key={t.id}>
                  <label>
                    <input 
                      type='radio' 
                      checked={this.state.idAnswer === t.id ? true : false} 
                      name='answers' 
                      value={t.answer} 
                      onClick={()=> this.handleChange(t.id, questionTest[params.count].id)}
                    /> 
                      {t.answer}
                  </label>
                </li>
              )
            })
          }
        </ul>
        <span onClick={()=> this.previous()}> Back </span>
        {(params.count !== 9)?
          <span onClick={()=> this.next(questionTest[params.count].id) }> Next </span>:
          <span onClick={()=> {saveRezultTests(questionTest[params.count].id, this.state.idAnswer, params.count);}}><Link to={'/rezult'}>Finish&Save</Link></span>
        }
      </div>
    )
  }
}

export default Test