import React, { Component } from 'react';
import Ceiling from './Ceiling'
import CallerButton from './CallerButton'
import Counter from './Counter'
import './Floor.css'
import { connect } from 'react-redux';
import { RegisterCall } from '../actions/call-actions'


const mapStateToProps = state => {
    return {
        //call: state.call
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

    constructor(props) {
        super(props);
        this.elevators = [];
    }
    onCallElevator = () => {
        if (!this.props.arrived)
            this.props.onRegisteCall(this.props.index);
    }

    shouldComponentUpdate(nextProps, nextState) {
        //if (this.props.index == 1)
          //  console.log('nextProps.departed', nextProps.departed, nextProps.arrived)
        let i = this.elevators.indexOf(nextProps.departed);
        if (i != -1) {
            this.elevators.splice(i, 1)
        }

        if (nextProps.arrived) {
            i = this.elevators.indexOf(nextProps.arrived);
            if (i == -1) {
                this.elevators.push(nextProps.arrived)
            }
        }

        //console.log('shouldComponentUpdate elevators', nextProps.arrived, nextProps.departed, this.elevators, this.props.index)

        /*if (!this.state.called && nextProps.called)
            this.state.called = true;
        if (nextProps.arrived)
            this.state.called = false;*/
        return true;
    }

    render() {
        //if (this.props.index == 1)
          //  console.log('this.elevators.length', this.elevators.length, this.props.index);
        return (
            <div className="floor">
                <div className="floor-hall">
                    <CallerButton index={this.props.index}
                        deselect={this.elevators.length != 0}
                        onChange={this.onCallElevator}
                        disabled={this.elevators.length != 0} />
                    <Counter id={this.props.index} time={null} />
                </div >
                <Ceiling />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Floor);