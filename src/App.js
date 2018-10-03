import React, { Component } from 'react';
import './Building.css';
import Floor from './Floor/Floor';
import PropTypes from 'prop-types';
import Elevator from './Elevator/Elevator';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    caller: state.caller,
    arrived: state.arrived
  }
}

componentWillReceiveProps = (nextProps) => {
  if (nextProps.arrived == this.props.arrived)
    return false;
}

class App extends Component {
  render() {
    console.log('App render', this.props);
    return (
      <div className="building">
        <div className="floors">
          {this.props.floors}
        </div>
        <Elevator id="elevator.1" goTo={this.props.caller} />
        {/*<Elevator id="elevator.2"/>*/}
      </div>
    );
  }
}

App.propTypes = { floors: PropTypes.array };
App.defaultProps = {
  floors: Array(10).fill('').map((v, i) => { return <Floor key={`Floor.${i}`} index={i} /> }).reverse()
}

export default connect(mapStateToProps)(App);
