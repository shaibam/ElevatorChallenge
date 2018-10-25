import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pic from './elv.png';
import './Elevator.css'
import { TIME_BETWEEN_FLOORS, TIME_TO_WAIT_ON_ARRIVAL, NUM_OF_FLOORS } from '../consts/consts';
import { RegisterElevator, ElevatorArrived } from '../actions/elevator-actions';

var id;
const mapStateToProps = state => {
    /*let o={};
    console.log('mapStateToProps',state)
    if (state.call) o.call=state.call
    return o*/
    return { call: state.call };
    //return {};
}

const mapActionsToProps = {
    onRegisterElevator: RegisterElevator,
    onArrivedAtFloor: ElevatorArrived
}

class Elevator extends Component {

    state = {
        go: false,
        floor: 5
    }

    constructor(props) {
        super(props);
        this.props.onRegisterElevator(this.props.id)
        id = this.props.id;
    }

    nextRide = () => {

        if (this.props.obj) {
            console.log('nextRide', this.props.obj.currentCall.next)
            if (this.props.obj.currentCall && this.props.obj.currentCall.next) {
                //this.state.go = false;
                this.props.obj.currentCall = this.props.obj.currentCall.next;
                this.startRide(this.props.obj.currentCall.floor);
            }
        }
    }
    startRide = (floor) => {
        //console.log('startRide')
        let distance = Math.abs(this.state.floor - floor);
        this.setState({
            go: true,
            floor: floor,
            floorDistance: distance,
            travelTime: (distance) * TIME_BETWEEN_FLOORS + TIME_TO_WAIT_ON_ARRIVAL,
        })
    }

    onArrivedAtFloor = (arrivalObject) => {
        /* console.log(this.props)
         if (this.props.obj.currentCall.next) {
             this.props.obj.currentCall = this.props.obj.currentCall.next();
             this.setState({ go: true, floor: this.props.obj.currentCall.floor })
         } else {
             this.setState({go:false,floor:this.props.obj.currentCall.floor})
         }*/
        console.log('onArrivedAtFloor', this.props.obj.currentCall)
        /*this.state.go = false;
        if (this.props.obj.currentCall && this.props.obj.currentCall.next) {
            this.nextRide();
            //this.startRide(this.props.obj.currentCall.floor);
        }*/
        this.setState({ go: false })
        this.props.onArrivedAtFloor(arrivalObject);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', this.state.go, nextState.go)

        /*if (this.state.go) return false;
        if (this.state.go != nextState.go && nextState.go)
            return true;
 
        if (nextProps.call && !this.state.go) {
            console.log('start nextRide');
            this.nextRide();
            return false;
        }
 
        if (!nextState.go)
            return false;
        */
        if (nextState.go != this.state.go && nextState.go)
            return true;

        if (!nextState.go) {
            this.nextRide();
            //return false
        }

        return false;
    }

    render() {
        console.log('render', this.state)
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
        console.log('componentDidUpdate')
        setTimeout(() => {
            this.onArrivedAtFloor({ floor: this.state.floor, elevatorId: this.props.id });
        }, (this.state.floorDistance * TIME_BETWEEN_FLOORS + TIME_TO_WAIT_ON_ARRIVAL))
    }

}

export default connect(
    mapStateToProps, mapActionsToProps
)(Elevator);