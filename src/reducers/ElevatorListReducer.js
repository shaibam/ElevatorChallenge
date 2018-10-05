import { REGISTER_ELEVATOR } from '../actions/elevator-list-actions';
import { CALL } from '../consts/Call';
const ELEVATOR = { lastCall: Object.create(CALL), currentCall: Object.create(CALL) };
//const ELEVATOR = { lastCall: null, currentCall: null };

var Elevators = {};
const RegisterElevator = (state = null, { type, payload }) => {
    switch (type) {
        case REGISTER_ELEVATOR:
            Elevators[payload.id] = Object.create(ELEVATOR)
            return Elevators
        default:
            return state
    }
}

export { RegisterElevator, Elevators }