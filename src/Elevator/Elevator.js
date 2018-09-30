import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pic from './elv.png';
import './Elevator.css'
function mapStateToProps(state) {
    return {

    };
}

class Elevator extends Component {
    state = {
        go: true,
        floor: 0
    }
    
    handleClick = () => {
        let floor = Math.round(Math.random() * 9);
        while (floor == this.state.floor) {
            floor = Math.round(Math.random() * 9);
        }
        this.setState({ go: true, floor: floor, floorDistance: Math.abs(this.state.floor - floor) })
    }

    render() {
        return (
            <div className='shaft'>
                <img className={`elevator ${this.state.go ? 'go' : ''}`} src={Pic} alt='elevator' style={{ '--target-floor': this.state.floor, '--floors-to-travel': this.state.floorDistance }} onClick={this.handleClick} />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Elevator);