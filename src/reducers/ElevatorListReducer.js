import { REGISTER_ELEVATOR } from '../actions/elevator-list-actions';
import { CALL } from '../consts/Call';
const ELEVATOR = { lastCall: null, currentCall: null };
var Elevators = {};
const RegisterElevator = (state = null, { type, payload }) => {
    switch (type) {
        case REGISTER_ELEVATOR:
            console.log('payload.id', payload.id);
            Elevators[payload.id] = Object.create(ELEVATOR)
            //Elevators[payload.id].lastCall = Object.create(CALL)
            //Elevators[payload.id].currentFloor = Elevators[payload.id].lastFloor
            return Elevators
        default:
            return state
    }
}

export { RegisterElevator, Elevators }