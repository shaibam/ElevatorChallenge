import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pic from './elv.png';
import './Elevator.css'
import { RegisterElevator } from '../actions/elevator-list-actions';
import { ElevatorArrived } from '../actions/elevator-arrival-actions';
import { TIME_BETWEEN_FLOORS, TIME_TO_WAIT_ON_ARRIVAL } from '../consts/Movement';
import { Floors } from '../consts/Floors';

const mapStateToProps = state => {
    return {

    };
}

const mapActionsToProps = {
    onRegisterElevator: RegisterElevator,
    onArrivedAtFloor: ElevatorArrived
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

    /*componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps',nextProps )
        if (nextProps.goTo === null)
            return false
        if (nextProps.goTo != this.props.goTo)
            this.setState({
                go: true,
                floor: nextProps.goTo,
                floorDistance: Math.abs(this.state.floor - nextProps.goTo)
            })
    }*/
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.goTo === null)
            return false
        return true
    }


    render() {
        this.state = {
            go: true,
            floor: this.props.goTo,
            floorDistance: Math.abs(this.state.floor - this.props.goTo)
        }
        return (
            <div className='shaft'>
                {/*<img className={`elevator ${this.state.go ? 'go' : ''}`} src={Pic} alt='elevator' style={{ '--target-floor': Floors - this.state.floor - 1, '--floors-to-travel': this.state.floorDistance }} />*/}
                <img className={`elevator ${this.state.go ? 'go' : ''}`} src={Pic} alt='elevator' style={{ '--target-floor': Floors - this.state.floor - 1, '--floors-to-travel': this.state.floorDistance }} />
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        //console.log('componentDidUpdate', this.props.id)
        setTimeout(() => {
            this.props.onArrivedAtFloor({ floor: this.state.floor, elevatorId: this.props.id });
        }, (this.state.floorDistance * TIME_BETWEEN_FLOORS + TIME_TO_WAIT_ON_ARRIVAL))
    }

}

export default connect(
    mapStateToProps, mapActionsToProps
)(Elevator);