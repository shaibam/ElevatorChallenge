import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pic from './elv.png';
import './Elevator.css'
<<<<<<< HEAD
//import { TIME_BETWEEN_FLOORS, TIME_TO_WAIT_ON_ARRIVAL, NUM_OF_FLOORS } from '../consts/consts';
import { RegisterElevator, ElevatorArrived } from '../actions/elevator-actions';
//import { Elevators } from '../reducers/elevator-reducer';
import { CALL, NUM_OF_FLOORS } from '../consts/consts'

const mapStateToProps = state => {
    return {
        call: state.call
    };
=======
import { TIME_BETWEEN_FLOORS, TIME_TO_WAIT_ON_ARRIVAL, NUM_OF_FLOORS } from '../consts/consts';
import { RegisterElevator, ElevatorArrived, ElevatorDeparture } from '../actions/elevator-actions';

const mapStateToProps = state => {
    return { call: state.call };
>>>>>>> b9e3cb89ed05e880ba569f10cbf333fe7891228a
}

const mapActionsToProps = {
    onRegisterElevator: RegisterElevator,
    onArrivedAtFloor: ElevatorArrived,
    onDepartureFromFloor: ElevatorDeparture
}

class Elevator extends Component {

    state = {
        go: false,
<<<<<<< HEAD
        floor: 0,
        call: Object.create(CALL)
=======
        floor: 5
>>>>>>> b9e3cb89ed05e880ba569f10cbf333fe7891228a
    }


    constructor(props) {
        super(props);
<<<<<<< HEAD

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
=======
        this.props.onRegisterElevator(this.props.id);

    }

    nextRide = () => {

        if (this.props.obj) {
            //console.log('nextRide', this.props.obj.currentCall.next)
            if (this.props.obj.currentCall && this.props.obj.currentCall.next) {
                this.props.obj.currentCall = this.props.obj.currentCall.next;
                this.startRide(this.props.obj.currentCall.floor);
            }
        }
    }

    startRide = (floor) => {
        //console.log('Elevator startRide')
        this.props.onDepartureFromFloor({ floor: this.state.floor, elevatorId: this.props.id });
        let distance = Math.abs(this.state.floor - floor);
        this.setState({
>>>>>>> b9e3cb89ed05e880ba569f10cbf333fe7891228a
            go: true,
            floor: floor,
            floorDistance: distance,
            travelTime: (distance) * TIME_BETWEEN_FLOORS + TIME_TO_WAIT_ON_ARRIVAL,
<<<<<<< HEAD
        }*/
=======
        })
    }

    onArrivedAtFloor = (arrivalObject) => {
        //console.log('Elevator arrive')
        // console.log('onArrivedAtFloor', this.props.obj.currentCall)
        if (!this.props.obj.currentCall.next) {
            this.props.obj.lastCall.arrivalTime = 0;
            this.props.obj.currentCall.arrivalTime = 0;
            console.log('lastCall', this.props.id)
        } else if (this.props.obj.currentCall.next) {
            console.log('currentCall ', this.props.id);
            console.log('currentCall a', this.props.obj.currentCall.next.arrivalTime)
            this.props.obj.currentCall.next.arrivalTime -= this.props.obj.currentCall.arrivalTime;
            console.log('currentCall b', this.props.obj.currentCall.next.arrivalTime)
        }
        
        this.props.onArrivedAtFloor(arrivalObject);
        this.setState({ go: false })
    }

    shouldComponentUpdate(nextProps, nextState) {
        //console.log('shouldComponentUpdate', this.state.go, nextState.go)

        if (nextState.go !== this.state.go && nextState.go)
            return true;

        if (!nextState.go) {
            this.nextRide();
            //return false
        }

        return false;
    }

    render() {
        //console.log('render', this.state)
>>>>>>> b9e3cb89ed05e880ba569f10cbf333fe7891228a
        return (
            <div className='shaft' onClick={() => { console.log(this) }}>
                <img className={`elevator ${this.state.go ? 'go' : ''}`} src={Pic} alt='elevator' style={
                    {
                        '--travel-time': (this.state.call.arrivalTime / 1000) + 's',
                        '--target-floor': NUM_OF_FLOORS - this.state.call.floor - 1,
                        '--floors-to-travel': Math.abs(this.state.floor - this.state.call.floor)
                    }} />
            </div>
        );
    }

    componentDidMount() {
        setTimeout(() => this.startRide(0), 1000);
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