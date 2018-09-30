import { CALL_ELEVATOR } from '../actions/caller-actions';

const CallerReducer = (state = '', { type, payload }) => {
    console.log('CallerReducer',type,payload,CALL_ELEVATOR)
    switch (type) {
        case CALL_ELEVATOR:
            return payload.caller
        default:
            return state
    }
}

export default CallerReducer