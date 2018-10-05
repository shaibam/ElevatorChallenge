import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        tick: state.tick
    }
}

class Counter extends Component {
    state = {
        time: 0
    }

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {

        if (!nextProps.time && !this.state.counting)
            return false

        if (!this.state.counting) {
            console.log('this.props.time', this.props.time,nextProps.time)
            this.state.time = nextProps.time;
            this.state.now = performance.now();
            //this.count();
        }

        if (this.props.tick < nextProps.tick) {
            let delta = this.props.tick != null ? nextProps.tick - this.props.tick : 0;
            let time = Math.ceil(Math.max(this.state.time - delta, 0));
            this.state.time = time;
        }

        this.state.counting = true;

        return true;
    }

    render() {
        return (
            <div className="counter">
                {this.state.time || "--"}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Counter);