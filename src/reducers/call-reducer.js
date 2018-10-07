import { REGISTER_CALL } from '../actions/call-actions';
import { CALL, timeToReachfloor, NOW } from '../consts/consts'
import { Elevators } from '../reducers/elevator-reducer'

const RegisterCall = (state = null, { type, payload }) => {
    switch (type) {
        case REGISTER_CALL:
            let call = Object.create(CALL)
            call.floor = payload.id;
            call.elevatorId = Object.keys(Elevators)[0];
            return call
        default:
            return state
    }
}

export { RegisterCall }