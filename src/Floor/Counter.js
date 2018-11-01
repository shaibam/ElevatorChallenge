import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        timePassed: state.timePassed
    }
}

class Counter extends Component {

    arrivalCountdown = -1;

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.arrivalCountdown != -1) {
            //console.log('this.arrivalCountdown', this.arrivalCountdown)
            this.arrivalCountdown -= nextProps.timePassed;
            if (this.arrivalCountdown <= 0) {
                this.arrivalCountdown = -1;
            }
            return true;
        }
        console.log(nextProps.expectedArrivalTime)
        if (nextProps.expectedArrivalTime != 0) {
            this.arrivalCountdown = nextProps.expectedArrivalTime;
        }
        return false;
    }

    render() {
        return (
            <div className="counter">
                {this.arrivalCountdown != -1 ? this.arrivalCountdown : "--"}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Counter);