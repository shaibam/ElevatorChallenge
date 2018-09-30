import React, { Component } from 'react';
import './App.css';
import Floor from './Floor/Floor';
import { connect } from 'react-redux';
import { CallElevator } from './actions/caller-actions';
import { UpdateUser } from './actions/user-actions'

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state)
  return {
    user: state.user,
    caller: state.caller
  }
}

/*const mapActionsToProps = {
  onUpdateUser: UpdateUser
}*/

const mapActionsToProps = {
  onCallElevator: CallElevator,
  onUpdateUser: UpdateUser
}


class App extends Component {

  constructor(props) {
    super(props);
    //console.log('props', this.props)
    //console.log('state', this.state)
  }

  onFloorButtonChanged = (state) => {
    console.log('onFloorButtonChanged', this.props)
    this.props.onUpdateUser(3)
    this.props.onCallElevator('3');
    //register a new floor
    //link this floor as next floor of last floor
    //start  countdown
  }

  onUpdateUser = (e) => {
    //this.props.onUpdateUser(e.target.value)
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        {this.props.floors}
        <div onClick={this.onFloorButtonChanged}>6</div>
      </div>
    );
  }
}

//App.propTypes = { floors: React.Component, caller: String, user: String };
App.defaultProps = {
  floors: Array(10).fill('').map((v, i) => { return <Floor key={`Floor.${i}`} index={i} /> }).reverse()
}

export default connect(mapStateToProps, mapActionsToProps)(App);
