import { REGISTER_ELEVATOR, ELEVATOR_ARRIVED } from '../actions/elevator-actions';
import { ELEVATOR } from '../consts/consts'
var Elevators = {};

const RegisterElevator = (state = null, { type, elevator }) => {
    switch (type) {
        case REGISTER_ELEVATOR:
            /*Elevators[payload.id] = Object.create(ELEVATOR)
            Elevators[payload.id].lastCall.elevatorId = payload.id;
            Elevators[payload.id].currentCall.elevatorId = payload.id;*/
            //Object.assign(Elevators, elevator)
            //console.log(Elevators)
            //console.log(elevator)
            //debugger
            Elevators[Object.keys(elevator)[0]] = Object.values(elevator)[0];
            return Elevators

        default:
            return state
    }
}

export const ElevatorArrived = (state = null, { type, floor }) => {
    switch (type) {

        case ELEVATOR_ARRIVED:
            console.log('ELEVATOR_ARRIVED:', floor)
            return floor
        default:
            return state
    }
}
export { RegisterElevator, Elevators }