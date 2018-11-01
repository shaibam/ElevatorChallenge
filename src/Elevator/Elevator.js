import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pic from './elv.png';
import './Elevator.css'
import { TIME_BETWEEN_FLOORS, TIME_TO_WAIT_ON_ARRIVAL, NUM_OF_FLOORS } from '../consts/consts';
import { RegisterElevator, ElevatorArrived, ElevatorDeparture } from '../actions/elevator-actions';

const mapStateToProps = state => {
    return { call: state.call };
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
        this.props.onDepartureFromFloor({ floor: this.state.floor, elevatorId: this.props.id });
        let distance = Math.abs(this.state.floor - floor);
        this.setState({
            go: true,
            floor: floor,
            floorDistance: distance,
            travelTime: (distance) * TIME_BETWEEN_FLOORS + TIME_TO_WAIT_ON_ARRIVAL,
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