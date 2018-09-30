import React, { Component } from 'react';
import Ceiling from './Ceiling'
import CallerButton from './CallerButton'
import './Floor.css'
import { connect } from 'react-redux';
import { CallElevator } from '../actions/caller-actions';

const mapStateToProps = state => {
    return {
        lastCaller: state.caller
    }
}

const mapActionsToProps = {
    onCallElevator: CallElevator
}

class Floor extends Component {
    onFloorButtonChanged = (state) => {
        console.log('onFloorButtonChanged', this.props)
        this.props.onCallElevator(this.props.index)
    }

    render() {
        return (
            <div className="floor">
                <div className="floor-hall">
                    <CallerButton index={this.props.index} onChange={this.onFloorButtonChanged} />
                </div >
                <Ceiling />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Floor);