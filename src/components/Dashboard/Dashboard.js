import React, { Component } from 'react';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state ={
            language: '',
            words: ['Placeholder']
        }
    }
    componentDidMount() {

    } 

  render() {
    console.log('user context', this.props.user);
    console.log('content context: ', this.props.content);

    return(
    <div className='dashboardContainer'>
    <h3>Welcome back, {this.props.user.user.name} !</h3>
    <button>Let's Practice!</button>
    <div className='infoArea'>
        <div className='infoHeader'>Word to practice today: </div>
        <div className='wordsHolder'>
            <div className='words'>Words: 
            <ul>
            {this.props.content.words.map((word, index) => {
                return(
                    <li key={index}>
                    {word.original}
                    </li>
                )
            }) || this.state.words[0]}
            </ul>
            </div>
            <div className='counts'>Correct / Incorrect counts
                <ul>
                {this.props.content.words.map((word, index) => {
                    return(
                      <li key={index}>
                        {word.correct_count} / {word.incorrect_count}
                      </li>
                    )
                }) || this.state.words[0]}
                </ul>
            </div>
        </div>
    </div>
    </div>
    )
}
}

export default Dashboard;