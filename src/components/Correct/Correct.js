import React from 'react'
import ContentContext from '../../contexts/ContentContext'
import './Correct.css'
class Correct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  static contextType = ContentContext

  handleNext = (ev) => {
    ev.preventDefault();
    this.context.nextWord();
  }

  render() {
    return(
      <div className="correct">
        <div className="DisplayScore">
          <p>Total Score: {this.context.feedbackRes.totalScore}</p>
        </div>

        <h3 aria-label="You are correct">Yay! You were correct! :D</h3>
        <div className="DisplayFeedback">
        <p>The correct translation for <strong>{this.context.head.nextWord}</strong> was <strong>{this.context.feedbackRes.answer}</strong> and you chose <strong>{this.context.guess}</strong>!</p>
        </div>
        

        <button aria-label="try another word" onClick={this.handleNext}>Try another word!</button>
      </div>
    )
  }
}

export default Correct;