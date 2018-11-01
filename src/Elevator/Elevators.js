import React, { Component } from 'react';
import Elevator from './Elevator';
import { NUM_OF_ELEVATORS } from '../consts/consts'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        elevators: state.elevators,
        //call: state.call,
        //arrived: state.arrived
    }
}


class Elevators extends Component {

    /*shouldComponentUpdate(nextProps, nextState) {
        console.log('nextProps.call', nextProps.call);
        return true;
    }*/

    render() {
        //console.log('Elevatrs render',this.props.call )
        //goTo = (this.props.arrived && this.props.arrived.floor == i) ? null : goto;
        return (
            <div className="elevators">
                {Array(NUM_OF_ELEVATORS).fill('').map((v, i) => {
                    let id = `elevator.${i}`;
                    //let goTo = (this.props.call && this.props.call.elevatorId == id) ? this.props.call.floor : null
                    return <Elevator key={id} id={id}
                        //checkCall={(this.props.call && this.props.call.elevatorId == id) ? true : false}
                        obj={this.props.elevators && this.props.elevators[`elevator.${i}`]}
                    />
                })}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Elevators);