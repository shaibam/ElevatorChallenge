import React, { Component } from 'react';
import { NUM_OF_FLOORS } from '../consts/consts'
import Floor from './Floor'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        call: state.call,
        arrived: state.arrived
    }
}

class Floors extends Component {
    render() {        
        return (
            <div className="floors">
                {Array(NUM_OF_FLOORS).fill('').map((v, i) => {
                    return <Floor key={`Floor.${i}`} index={i} arrived={this.props.arrived && this.props.arrived.floor == i} called={this.props.call && this.props.call.floor == i} />
                }).reverse()}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Floors);