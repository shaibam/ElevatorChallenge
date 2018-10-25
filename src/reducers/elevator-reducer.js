import { REGISTER_ELEVATOR, ELEVATOR_ARRIVED, ELEVATOR_DEPARTURE } from '../actions/elevator-actions';
import { ELEVATOR } from '../consts/consts'
var Elevators = {};

const RegisterElevator = (state = null, { type, payload }) => {
    switch (type) {
        case REGISTER_ELEVATOR:
            //Elevators[payload.id] = Object.create(ELEVATOR)
            Elevators[payload.id] = new ELEVATOR();
            Elevators[payload.id].lastCall.elevatorId = payload.id;
            Elevators[payload.id].currentCall.elevatorId = payload.id;
            return Elevators
        default:
            return state
    }
}

export const ElevatorArrived = (state = null, { type, payload }) => {
    switch (type) {
        case ELEVATOR_ARRIVED:
            //console.log(' ELEVATOR_ARRIVED payload', payload)
            return payload.id
        default:
            return null
    }
}

export const ElevatorDeparture = (state = null, { type, payload }) => {
    switch (type) {
        case ELEVATOR_DEPARTURE:
            //console.log(' ELEVATOR_DEPARTURE payload', payload)
            return payload.id
        default:
            return null
    }
}
export { RegisterElevator, Elevators }