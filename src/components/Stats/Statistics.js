import React from 'react';
import './Stastics.css';


class Stats extends React.Component {
    constructor(props) {
    super(props);
    this.state = {

    }
  } 
  
  render() {
      console.log(this.props)
      return(
          <div className="stats">Final Score: {this.props.score}</div>
      )
  }
}

export default Stats;