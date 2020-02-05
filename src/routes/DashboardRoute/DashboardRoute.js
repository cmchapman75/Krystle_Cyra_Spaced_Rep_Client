import React, { Component } from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import Stats from '../../components/Stats/Statistics';


class DashboardRoute extends Component {
  render() {
    return (
      <section>
          <h2>Test language 1</h2>
       Total correct answers: 7
       <a href="/learn">Start practicing</a>
       <h3 className="wordHeader">Words to practice</h3>
       <ul>
        <li>
          <h4>original 1</h4>
          correct answer count: 0
          incorrect answer count: 0
        </li>
       
        </ul>
        {/* <Dashboard content={this.props.content} user={this.props.user}/>
        <Stats score={this.props.content.language.total_score}/> */}
      </section>
    );
  }
}

export default DashboardRoute
