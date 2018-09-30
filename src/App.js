import React, { Component } from 'react';
import './App.css';
import Floor from './Floor/Floor';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.floors}
      </div>
    );
  }
}

App.propTypes = { floors: PropTypes.array};
App.defaultProps = {
  floors: Array(10).fill('').map((v, i) => { return <Floor key={`Floor.${i}`} index={i} /> }).reverse()
}

export default App;
