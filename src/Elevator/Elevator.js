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
        go: true
    }
    handleClick = () => {
        this.setState({ go: true })
    }
    render() {
        return (
            <div className='shaft'>
                <img className={`elevator ${this.state.go ? 'go' : ''}`} src={Pic} alt='elevator' style={{ '--floors-to-travel': 5, '--floors-to-travel-abs':5 }} onClick={this.handleClick} />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Elevator);