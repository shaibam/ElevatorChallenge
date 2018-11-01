import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pic from './elv.png';
import './Elevator.css'
import { TIME_BETWEEN_FLOORS, TIME_TO_WAIT_ON_ARRIVAL, NUM_OF_FLOORS } from '../consts/consts';
import { RegisterElevator, ElevatorArrived, ElevatorDeparture } from '../actions/elevator-actions';

const mapStateToProps = state => {
    return {
        call: state.call,
        timePassed: state.timePassed
    };
}

const mapActionsToProps = {
    onRegisterElevator: RegisterElevator,
    onArrivedAtFloor: ElevatorArrived,
    onDepartureFromFloor: ElevatorDeparture
}

class Elevator extends Component {

    state = {
        go: false,
        floor: 5
    }

    arrivalCountdown = -1;

    constructor(props) {
        super(props);
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
        let distance = Math.abs(this.state.floor - floor);
        let travelTime =  (distance) * TIME_BETWEEN_FLOORS + TIME_TO_WAIT_ON_ARRIVAL;

        this.props.onDepartureFromFloor({ floor: this.state.floor, elevatorId: this.props.id, toFloor: floor, travelTime});
        
        this.setState({
            go: true,
            floor: floor,
            floorDistance: distance,
            travelTime,
        })
    }

    onArrivedAtFloor = (arrivalObject) => {
        //console.log('Elevator arrive')
        // console.log('onArrivedAtFloor', this.props.obj.currentCall)
        if (!this.props.obj.currentCall.next) {
            this.props.obj.lastCall.arrivalTime = 0;
            this.props.obj.currentCall.arrivalTime = 0;
        } else if (this.props.obj.currentCall.next) {
            this.props.obj.currentCall.next.arrivalTime -= this.props.obj.currentCall.arrivalTime;
        }

        this.props.onArrivedAtFloor(arrivalObject);
        this.setState({ go: false })
    }

    shouldComponentUpdate(nextProps, nextState) {

        if (this.arrivalCountdown != -1) {
            this.arrivalCountdown -= nextProps.timePassed;
            if (this.arrivalCountdown <= 0) {
                this.arrivalCountdown = -1;
                this.onArrivedAtFloor({ floor: this.state.floor, elevatorId: this.props.id })
            }
        }

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
        return (
            <div className='shaft' onClick={() => { console.log(this) }}>
                <img className={`elevator ${this.state.go ? 'go' : ''}`} src={Pic} alt='elevator' style={
                    {
                        '--travel-time': (this.state.travelTime / 1000) + 's',
                        '--target-floor': NUM_OF_FLOORS - this.state.floor - 1,
                        '--floors-to-travel': this.state.floorDistance
                    }} />
            </div>
        );
    }

    componentDidMount() {
        setTimeout(() => this.startRide(0), 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        /*setTimeout(() => {
            this.onArrivedAtFloor({ floor: this.state.floor, elevatorId: this.props.id });
        }, (this.state.floorDistance * TIME_BETWEEN_FLOORS + TIME_TO_WAIT_ON_ARRIVAL))*/
        this.arrivalCountdown = (this.state.floorDistance * TIME_BETWEEN_FLOORS + TIME_TO_WAIT_ON_ARRIVAL);
    }

}

export default connect(
    mapStateToProps, mapActionsToProps
)(Elevator);