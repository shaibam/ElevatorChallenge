import React, { Component } from 'react';
import './Building.css';
import Floors from './Floor/Floors';

import Elevator from './Elevator/Elevator';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    caller: state.caller.floor,
    elevatorId: state.caller.elevatorId,
    numOfElevators: 3
  }
}

class App extends Component {
  render() {
    return (
      <div className="building">
        <Floors />
        {Array(this.props.numOfElevators).fill('').map((v, i) => {
          let id = `elevator.${i}`;
          return <Elevator key={id} id={id} goTo={this.props.elevatorId == id ? this.props.caller : null} />
        })}
      </div>
    );
  }
}



export default connect(mapStateToProps)(App);
