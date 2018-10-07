import React, { Component } from 'react';
import './Building.css';
import Floors from './Floor/Floors';
import Elevator from './Elevator/Elevator';
import { connect } from 'react-redux';
import { NUM_OF_ELEVATORS } from './consts/consts'


const mapStateToProps = state => {
  return {
    elevators: state.elevators
  }
}

class App extends Component {
  render() {
    //console.log('App', this.props)
    return (
      <div className="building">
        <Floors />
        {Array(NUM_OF_ELEVATORS).fill('').map((v, i) => {
          let id = `elevator.${i}`;
          return <Elevator key={id} id={id} goTo={null} obj={this.props.elevators && this.props.elevators[`elevator.${i}`]} />
        })}
      </div>
    );
  }
}



export default connect(mapStateToProps)(App);
