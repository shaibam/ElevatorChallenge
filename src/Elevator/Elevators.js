import React, { Component } from 'react';
import Elevator from './Elevator';
import { NUM_OF_ELEVATORS } from '../consts/consts'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        call: state.call,
        //elevators: state.elevators,
        arrived: state.arrived
    }
}


class Elevators extends Component {

    /*shouldComponentUpdate(nextProps, nextState) {
        console.log('nextProps.call', nextProps.call);
        return true;
    }*/

    render() {
        //console.log(this.props.elevators)
        //goTo = (this.props.arrived && this.props.arrived.floor == i) ? null : goto;
        return (
            <div className="elevators">
                {Array(NUM_OF_ELEVATORS).fill('').map((v, i) => {
                    let id = `elevator.${i}`;
                    let goTo = (this.props.call && this.props.call.elevatorId == id) ? this.props.call.floor : null
                    //console.log(this.props.elevators,`elevator.${i}`)
                    return <Elevator key={id} id={id} />
                    //obj={this.props.elevators && this.props.elevators[`elevator.${i}`]} />
                })}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Elevators);