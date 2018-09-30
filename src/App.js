import React, { Component } from 'react';
import './Building.css';
import Floor from './Floor/Floor';
import PropTypes from 'prop-types';
import Elevator from './Elevator/Elevator'

class App extends Component {
  render() {
    return (
      <div className="building">
        <div className="floors">
          {this.props.floors}
        </div>
        <Elevator />
      </div>
    );
  }
}

App.propTypes = { floors: PropTypes.array };
App.defaultProps = {
  floors: Array(10).fill('').map((v, i) => { return <Floor key={`Floor.${i}`} index={i} /> }).reverse()
}

export default App;
