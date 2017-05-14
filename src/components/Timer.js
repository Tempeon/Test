import React, {Component} from 'react'; 
import PropTypes from 'prop-types'; 

class Timer extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
    minutes: this.props.minutes, 
    seconds: this.props.seconds, 
    }; 
  this.timerId = null; 
  this.toInt = this.toInt.bind(this); 
  this.startTimer = this.startTimer.bind(this); 
  this.updateTimer = this.updateTimer.bind(this); 
  this.displayTimer = this.displayTimer.bind(this); 
  this.nextQuestion = this.nextQuestion.bind(this); 
  } 
  toInt(value) { 
    return Number.parseInt(value, 10); 
  } 
  componentWillReceiveProps(nextProps) { 
    console.log('dddsdsdds', nextProps); 
    if( 
      nextProps.minutes !== this.props.minutes || 
      nextProps.seconds !== this.props.seconds 
    ) { 
      this.setState({minutes: nextProps.minutes, seconds: nextProps.seconds}, () => { 
      this.startTimer(); 
      }); 
      } 
  } 
  componentDidMount() { 
    this.startTimer(); 
  } 
  /*componentWillUnmount() { 
    clearInterval(this.timerId); 
  } */
  nextQuestion(min, sec) { 
    clearInterval(this.timerId); 
    const {minutes, seconds, handleNext} = this.props; 
  //  console.log(min, sec, handleNext); 
    let timeSum = (this.toInt(minutes) * 60 + this.toInt(seconds)) - (min * 60 + sec); 
   // console.log('timeSum', timeSum); 
    handleNext(); 
  } 
  updateTimer(minutes, seconds) { 
    this.setState({minutes, seconds}, () => { 
      const {minutes, seconds} = this.state; 
      if(minutes <= 0 && seconds <= 0) { 
        this.nextQuestion(minutes, seconds); 
      } 
    }); 
  } 
  startTimer() { 
    let {minutes, seconds} = this.state; 
    minutes = this.toInt(minutes); 
    seconds = this.toInt(seconds); 
    this.timerId = setInterval(() => { 
      if(seconds === 0 && minutes >= 1) { 
        --minutes; 
        seconds = 60; 
      } 
      if(minutes >= 0) { 
        --seconds; 
      } 
      this.updateTimer(minutes, seconds); 
    }, 1000); 
  } 
  displayTimer() { 
    const {minutes, seconds} = this.state; 
    return minutes + ' : ' + (seconds < 10 ? '0' + seconds : seconds); 
  } 
  render() { 
    return ( 
      <div> 
        {this.displayTimer()} 
      </div> 
    ); 
  } 
} 

Timer.propTypes = { 
  minutes: PropTypes.string, 
  seconds: PropTypes.string, 
}; 

Timer.defaultProps = { 
  minutes: '0', 
  seconds: '10', 
}; 

export default Timer;
