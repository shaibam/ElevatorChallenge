import React, { Component } from 'react';
import Ceiling from './Ceiling'
import CallerButton from './CallerButton'
import Counter from './Counter'
import './Floor.css'
import { connect } from 'react-redux';
import { RegisterCall } from '../actions/call-actions'


const mapStateToProps = state => {
    return {
    }
}

const mapActionsToProps = {
    onRegisteCall: RegisterCall
}

class Floor extends Component {
    state = {
        called: false,
        arrived: false
    }

    onCallElevator = () => {
        this.props.onRegisteCall(this.props.index);
    }

    shouldComponentUpdate(nextProps, nextState) {        
        if ((!this.state.called && nextProps.called))
            this.state.called = true;
        if (nextProps.arrived)
            this.state.called = false;
        return true;
    }

    render() {        
        return (
            <div className="floor">
                <div className="floor-hall">
                    <CallerButton index={this.props.index} selected={this.state.called} onChange={this.onCallElevator} />
                    <Counter id={this.props.index} time={null} />
                </div >
                <Ceiling />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Floor);