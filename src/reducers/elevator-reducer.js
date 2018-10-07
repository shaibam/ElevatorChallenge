import { REGISTER_ELEVATOR } from '../actions/elevator-actions';
import {ELEVATOR} from '../consts/consts'
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

export { RegisterElevator, Elevators}