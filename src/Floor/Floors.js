import React, { Component } from 'react';
import { NUM_OF_FLOORS } from '../consts/consts'
import Floor from './Floor'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        //call: state.call,
        arrived: state.arrived,
        departed: state.departed
    }
}


class Floors extends Component {

    render() {
        //console.log(this.props.arrived,this.props.departed)
        return (
            <div className="floors">
                {Array(NUM_OF_FLOORS).fill('').map((v, i) => {
                    return <Floor key={`Floor.${i}`} index={i}
                        departed={(this.props.departed && this.props.departed.floor === i ? this.props.departed.elevatorId : null)}
                        arrived={(this.props.arrived && this.props.arrived.floor === i ? this.props.arrived.elevatorId : null)}
                        //called={this.props.call && this.props.call.floor == i} 
                        />
                }).reverse()}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Floors);