import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        tick: state.tick
    }
}

class Counter extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="counter">
                { "--"}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Counter);