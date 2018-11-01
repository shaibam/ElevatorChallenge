import React, { Component } from 'react';
import Elevator from './Elevator';
import { NUM_OF_ELEVATORS } from '../consts/consts'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
<<<<<<< HEAD
        call: state.call,
        //elevators: state.elevators,
        arrived: state.arrived
=======
        elevators: state.elevators,
        //call: state.call,
        //arrived: state.arrived
>>>>>>> b9e3cb89ed05e880ba569f10cbf333fe7891228a
    }
}


class Elevators extends Component {

    /*shouldComponentUpdate(nextProps, nextState) {
        console.log('nextProps.call', nextProps.call);
        return true;
    }*/

    render() {
<<<<<<< HEAD
        //console.log(this.props.elevators)
=======
        //console.log('Elevatrs render',this.props.call )
>>>>>>> b9e3cb89ed05e880ba569f10cbf333fe7891228a
        //goTo = (this.props.arrived && this.props.arrived.floor == i) ? null : goto;
        return (
            <div className="elevators">
                {Array(NUM_OF_ELEVATORS).fill('').map((v, i) => {
                    let id = `elevator.${i}`;
<<<<<<< HEAD
                    let goTo = (this.props.call && this.props.call.elevatorId == id) ? this.props.call.floor : null
                    //console.log(this.props.elevators,`elevator.${i}`)
                    return <Elevator key={id} id={id} />
                    //obj={this.props.elevators && this.props.elevators[`elevator.${i}`]} />
=======
                    //let goTo = (this.props.call && this.props.call.elevatorId == id) ? this.props.call.floor : null
                    return <Elevator key={id} id={id}
                        //checkCall={(this.props.call && this.props.call.elevatorId == id) ? true : false}
                        obj={this.props.elevators && this.props.elevators[`elevator.${i}`]}
                    />
>>>>>>> b9e3cb89ed05e880ba569f10cbf333fe7891228a
                })}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Elevators);