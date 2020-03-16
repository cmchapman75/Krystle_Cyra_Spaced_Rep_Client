import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class NotFoundRoute extends Component {
  render() {
    return (
      <section>
        <h2>404 - Page not found</h2>
        <p>Try going back to your previous page.</p>
        <Link to='/'>Go home!</Link>
      </section>
    );
  }
}

export default NotFoundRoute
