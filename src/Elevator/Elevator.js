import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Elevator extends Component {
    render() {
        return (
            <div>
                Elevator
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Elevator);