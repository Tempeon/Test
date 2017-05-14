import React, {Component} from 'react'


class RezultTest extends Component{
  constructor(props){
    super(props)
    this.state={col:0}
  }

  getStyle(t, u) {
     if (t.id === u.idAnswer && t.isTrue || t.isTrue){
      return {color: 'green'}
    }
    if(t.id === u.idAnswer && !t.isTrue){
      return{ color: 'red'}
    }
  }
  render(){
    const {test, user} = this.props
    return(
      <div>
      <h3>Правельных ответов: {this.state.col}</h3>
        {user.map(u=> {
          const filt = test.find(t=> u.idQuestion === t.id)
            return(
              <div>
                <p>{filt.title}</p>
                <pre>{filt.code}</pre>
                <ul>
                  {filt.answers.map(t=>{
                    return( <li><label style={this.getStyle(t, u)}>{t.answer}</label></li>)
                  })}
                </ul>
              </div>
            )
        }
        )
      }
      </div>
    )
  }
}

export default RezultTest

/*
import React, {Component} from 'react'


class RezultTest extends Component{
  constructor(props){
    super(props)
    this.state={col:0}
  }
  getStyle(t) {
    if() {
      return {color: 'red'}
    }
  }
  render(){
    const {test, user} = this.props
    return(
      <div>
      <h3>Правельных ответов: {this.state.col}</h3>
        {user.map(u=> {
          const filt = test.find(t=> u.idQuestion === t.id)
            return(
              <div>
                <p>{filt.title}</p>
                <pre>{filt.code}</pre>
                <ul>
                  {filt.answers.map(t=>{
                    return( <li><label style={this.getStyle(t)}>{t.answer}</label></li>)
                  })}
                </ul>
              </div>
            )
        })}
      </div>
    )
  }
}

export default RezultTest
*/