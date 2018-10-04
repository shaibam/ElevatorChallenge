import React, { Component } from 'react';
import './Building.css';
import Floors from './Floor/Floors';

import Elevator from './Elevator/Elevator';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    caller: state.caller.floor
  }
}

class App extends Component {  
  render() {
    return (
      <div className="building">
        <Floors/>        
        <Elevator id="elevator.1" goTo={this.props.caller} />
        {/*<Elevator id="elevator.2"/>*/}
      </div>
    );
  }
}



export default connect(mapStateToProps)(App);
