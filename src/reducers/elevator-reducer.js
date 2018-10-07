import { REGISTER_ELEVATOR, ELEVATOR_ARRIVED } from '../actions/elevator-actions';
import { ELEVATOR } from '../consts/consts'
var Elevators = {};

const RegisterElevator = (state = null, { type, payload }) => {
    switch (type) {
        case REGISTER_ELEVATOR:
            Elevators[payload.id] = Object.create(ELEVATOR)
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
            return payload.id
        default:
            return state
    }
}
export { RegisterElevator, Elevators }