import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from './components/Nav';

class App extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    const { match, location, history } = this.props;

    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}


export default App;
