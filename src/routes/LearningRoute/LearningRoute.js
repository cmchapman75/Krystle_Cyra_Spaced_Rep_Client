import React, { Component } from 'react'
import Learning from '../../components/Learning/Learning';

class LearningRoute extends Component {
  render() {
    return (
      <section>
       {/* <h2>Translate the word:</h2>
       <span>Testnextword</span>
       <p>Your total score is: 999</p>
      <form></form>
      <main>You have answered this word correctly 222 times.
      You have answered this word incorrectly 333 times.
      </main>
      <label for="learn-guess-input">What's the translation for this word? </label> */}

      <Learning content={this.props.content} user={this.props.user}/>
      </section>

    );
  }
}

export default LearningRoute
 