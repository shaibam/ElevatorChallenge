import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pic from './elv.png';
import './Elevator.css'
import { TIME_BETWEEN_FLOORS, TIME_TO_WAIT_ON_ARRIVAL, NUM_OF_FLOORS } from '../consts/consts';
import { RegisterElevator } from '../actions/elevator-actions';
const mapStateToProps = state => {
    return {
     
    };
}

const mapActionsToProps = {
    onRegisterElevator: RegisterElevator,
}

class Elevator extends Component {
    state = {
        go: true,
        floor: 0
    }

    constructor(props) {
        super(props);
        this.props.onRegisterElevator(this.props.id)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.goTo === null)
            return false
        return true
    }

    render() {
        let distance = Math.abs(this.state.floor - this.props.goTo);
        this.state = {
            go: true,
            floor: this.props.goTo,
            floorDistance: distance,
            travelTime: (distance) * TIME_BETWEEN_FLOORS + TIME_TO_WAIT_ON_ARRIVAL
        }

        return (
            <div className='shaft'>
                <img className={`elevator ${this.state.go ? 'go' : ''}`} src={Pic} alt='elevator' style={
                    {
                        '--travel-time': (this.state.travelTime / 1000) + 's',
                        '--target-floor': NUM_OF_FLOORS - this.state.floor - 1,
                        '--floors-to-travel': this.state.floorDistance
                    }} />
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
    }

}

export default connect(
    mapStateToProps, mapActionsToProps
)(Elevator);