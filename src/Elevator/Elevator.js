import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pic from './elv.png';
import './Elevator.css'
//import { TIME_BETWEEN_FLOORS, TIME_TO_WAIT_ON_ARRIVAL, NUM_OF_FLOORS } from '../consts/consts';
import { RegisterElevator, ElevatorArrived } from '../actions/elevator-actions';
//import { Elevators } from '../reducers/elevator-reducer';
import { CALL, NUM_OF_FLOORS } from '../consts/consts'

const mapStateToProps = state => {
    return {
        call: state.call
    };
}

const mapActionsToProps = {
    onRegisterElevator: RegisterElevator,
    onArrivedAtFloor: ElevatorArrived
}

class Elevator extends Component {

    state = {
        go: false,
        floor: 0,
        call: Object.create(CALL)
    }


    constructor(props) {
        super(props);

        //this.elevator = Elevators[this.props.id];
        this._currentCall = Object.create(CALL);
        this._lastCall = Object.create(CALL);

        this.props.onRegisterElevator({ [this.props.id]: { currentCall: this.currentCall, lastCall: this._lastCall } });
    }

    set currentCall(v) {
        this._currentCall = v;
        console.log('set currentCall',v)
    }

    get currentCall() {
        return this._currentCall;
    }

    set lastCall(v) {
        this._lastCall = v; console.log('set lastCall',v)
    }

    get lastCall() {
        return this._lastCall;
    }

    onArrivedAtFloor = (arrivalObject) => {
        //console.log(arrivalObject)
        /*if (this.elevator.currentCall.next) {
            this.elevator.currentCall = this.elevator.currentCall.next;
            this.setState({ go: true, floor: this.elevator.currentCall.floor })
        } else {
            this.setState({ go: false, floor: this.elevator.currentCall.floor })
        }

        this.props.onArrivedAtFloor(this.state.floor);*/
    }

    shouldComponentUpdate(nextProps, nextState) {
        //console.log('shouldComponentUpdate', nextProps.call, this.state.go)
        if (!this.state.go && nextProps.call && nextProps.call.elevatorId == this.props.id) {
            this.state.go = true;
            //this.state.floor = nextProps.floor;
            //this.state.floor = nextProps.floor;
            this.state.call = nextProps.call;
            //console.log(this.state.call, this.elevator)
            return true
        }
        return false

    }

    render() {
        //console.log(this.props)
        /*let distance = Math.abs(this.state.floor - this.props.goTo);
        this.state = {
            go: true,
            floor: this.props.goTo,
            floorDistance: distance,
            travelTime: (distance) * TIME_BETWEEN_FLOORS + TIME_TO_WAIT_ON_ARRIVAL,
        }*/
        return (
            <div className='shaft'>
                <img className={`elevator ${this.state.go ? 'go' : ''}`} src={Pic} alt='elevator' style={
                    {
                        '--travel-time': (this.state.call.arrivalTime / 1000) + 's',
                        '--target-floor': NUM_OF_FLOORS - this.state.call.floor - 1,
                        '--floors-to-travel': Math.abs(this.state.floor - this.state.call.floor)
                    }} />
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        setTimeout(() => {
            this.onArrivedAtFloor();
        }, (this.state.call.arrivalTime))
    }

}

export default connect(
    mapStateToProps, mapActionsToProps
)(Elevator);