import React, { Component } from 'react';
import Ceiling from './Ceiling'
import CallerButton from './CallerButton'
import './Floor.css'
import { connect } from 'react-redux';
import { CallElevator } from '../actions/caller-actions';


const mapStateToProps = state => {
    return {
        lastCaller: state.caller,
    }
}

const mapActionsToProps = {
    onCallElevator: CallElevator,
}

class Floor extends Component {
    state = {
        waiting: false
    }
    
    constructor(props) {
        super(props);
    }

    onCallElevator = (state) => {
        this.props.onCallElevator(this.props.index)
        this.setState({ waiting: true })
    }

    render() {
        return (
            <div className="floor">
                <div className="floor-hall">
                    <CallerButton index={this.props.index} selected={this.state.waiting} onChange={this.onCallElevator} />
                </div >
                <Ceiling />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Floor);