import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Floors as NumOfFloors } from '../consts/Floors'
import Floor from './Floor'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        arrived: state.arrived.floor
    }
}

class Floors extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('Floors render', this.props, this.state)
        return (
            <div className="floors">
                {Array(NumOfFloors).fill('').map((v, i) => {
                    return <Floor key={`Floor.${i}`} index={i} arrived={this.props.arrived == i} />
                }).reverse()}
            </div>
        );
    }
}

Floors.propTypes = { floors: PropTypes.array };
Floors.defaultProps = {
    floors: Array(NumOfFloors).fill('').map((v, i) => { return <Floor key={`Floor.${i}`} index={i} /> }).reverse()
}

export default connect(mapStateToProps)(Floors);