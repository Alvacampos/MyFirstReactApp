import React, { Component } from 'react';
import classes from './clock.css';

class Clock extends Component{
  state = {
    time: 'null',   
  }
  componentDidMount()  {
      setInterval( () => {
        this.setState({
          time : new Date().toLocaleString()
        })
      },1000)
    }
  render(){
    
      return (
        <div className={classes.clock}>
          Date: {this.state.time}
        </div>        
      );
  }
}

export default Clock;