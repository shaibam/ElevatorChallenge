import React, { Component } from 'react';
import Ceiling from './Ceiling'
import CallerButton from './CallerButton'
import './Floor.css'
import { connect } from 'react-redux';
import { CallElevator } from '../actions/caller-actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
    return {
        lastCaller: state.caller
    }
}

const mapActionsToProps = {
    onCallElevator: CallElevator
}

/*
//may also work using this syntax, but warnings will be displayed in the console 
const mapActionsToProps = {
    onCallElevator: CallElevator
}*/

class Floor extends Component {
    constructor(props) {
        super(props)
    }

    onFloorButtonChanged = (state) => {
        console.log('onFloorButtonChanged', this.props)
        this.props.onCallElevator(this.props.index)
        //register a new floor
        //link this floor as next floor of last floor
        //start  countdown
    }

    render() {
        console.log('render')
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