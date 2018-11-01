import React, { Component } from 'react';
import './Building.css';
import Floors from './Floor/Floors';
import Elevators from './Elevator/Elevators';
import { connect } from 'react-redux';



const mapStateToProps = state => {
  return {
    elevators: state.elevators,
    //timePassed: state.timePassed
  }
}

class App extends Component {
  render() {
    //console.log('App', this.props.timePassed)
    return (
      <div className="building">
        <Floors />
        <Elevators />
      </div>
    );
  }
}



export default connect(mapStateToProps)(App);
