import React, { Component } from 'react';
import Ceiling from './Ceiling'
import CallerButton from './CallerButton'
import Counter from './Counter'
import './Floor.css'
import { connect } from 'react-redux';
import { CallElevator } from '../actions/caller-actions';
import { StartTimer } from '../actions/timer-actions';

const mapStateToProps = state => {
    return {
        caller: state.caller
    }
}

const mapActionsToProps = {
    onCallElevator: CallElevator,
    onStartTimer: StartTimer
}

class Floor extends Component {
    state = {
        waiting: false
    }

    constructor(props) {
        super(props);
    }

    onCallElevator = (state) => {
        this.props.onStartTimer(this.props.index)
        this.props.onCallElevator(this.props.index)
        this.setState({ waiting: true })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.arrived) this.setState({ waiting: false })
        console.log('nextProps.caller.arrivalTime',nextProps.caller.arrivalTime)
    }

    render() {
        return (
            <div className="floor">
                <div className="floor-hall">
                    <CallerButton index={this.props.index} selected={this.state.waiting} onChange={this.onCallElevator} />
                    <Counter id={this.props.index} time={this.props.arrived != this.props.index && this.props.caller.floor == this.props.index ? this.props.caller.arrivalTime : null} />
                </div >
                <Ceiling />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Floor);