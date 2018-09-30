import { CALL_ELEVATOR } from '../actions/caller-actions';

const CallerReducer = (state = 0, { type, payload }) => {
    switch (type) {
        case CALL_ELEVATOR:
            return payload.caller
        default:
            return state
    }
}

export default CallerReducer