import React from 'react';
import ContentContext from '../../contexts/ContentContext';

class Incorrect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    static contextType = ContentContext

    handleNext = (ev) => {
        ev.preventDefault();
        this.context.nextWorld();
    }

    render() {
        return (
            <div>
                Placeholder for incorrect response.
                <div className="DisplayedScore">
                    <p>Your total score is: {this.context.feedbackRes.totalScore}</p>
                </div>

                <h3>Good try, but not quite right :(</h3>
                <div className="DisplayedFeedback">
                    <p>This correct translation for {this.context.head.nextWorld} was {this.context.feedbackRes.answer} and you chose {this.context.guess}!</p>
                </div>

                <button onClick={this.handleNext}>Try another word!</button> 
            </div>
        )
    }
}

export default Incorrect; 