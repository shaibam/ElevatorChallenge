import React, { Component } from 'react';
import Ceiling from './Ceiling'
import CallerButton from './CallerButton'
import Counter from './Counter'
import './Floor.css'
import { connect } from 'react-redux';
import { RegisterCall } from '../actions/call-actions'


const mapStateToProps = (state, ownProps) => {
    /*if (state.arrived) {
        console.log('mapStateToProps', state)
    }*/
    let o = {};
    if (state.arrived && state.arrived.floor == ownProps.index)
        o.arrived = state.arrived;
    if (state.departed && (state.departed.floor == ownProps.index || state.departed.toFloor == ownProps.index))
        o.departed = state.departed;
    return o
}

const mapActionsToProps = {
    onRegisteCall: RegisterCall
}

class Floor extends Component {
    state = {
        called: false,
        arrived: false
    }

    constructor(props) {
        super(props);
        this.elevators = [];
        this.expectedArrivalTime = 0;
    }

    onCallElevator = () => {
        if (!this.props.arrived)
            this.props.onRegisteCall(this.props.index);
    }

    shouldComponentUpdate(nextProps, nextState) {

        if (nextProps.departed) {
            if (nextProps.departed.floor == this.props.index && nextProps.departed.elevatorId) {
                console.log('departed from',this.props.index,this.elevators)
                let i = this.elevators.indexOf(nextProps.departed.elevatorId);
                if (i != -1) {
                    this.elevators.splice(i, 1)
                }
            } else if (nextProps.departed.toFloor == this.props.index && nextProps.departed.elevatorId) {                
                this.expectedArrivalTime = nextProps.departed.travelTime;
                //console.log('this.expectedArrivalTime',this.expectedArrivalTime)
            }
        }

        if (nextProps.arrived && nextProps.arrived.floor == this.props.index) {
            let i = this.elevators.indexOf(nextProps.arrived.elevatorId);
            if (i == -1) {
                this.elevators.push(nextProps.arrived.elevatorId)
            }
            this.expectedArrivalTime = 0;
        }

        return true;
    }

    render() {
        if (this.props.index == 2)
            console.log('this.elevators.length', this.elevators.length, this.props.index);
        return (
            <div className="floor">
                <div className="floor-hall">
                    <CallerButton index={this.props.index}
                        deselect={this.elevators.length != 0}
                        onChange={this.onCallElevator}
                        disabled={this.elevators.length != 0} />
                    <Counter id={this.props.index} expectedArrivalTime={this.expectedArrivalTime} />
                </div >
                <Ceiling />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Floor);