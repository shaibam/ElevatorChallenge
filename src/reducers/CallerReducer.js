import { CALL_ELEVATOR } from '../actions/caller-actions';

const CallerReducer = (state = 0, { type, payload }) => {
    console.log('CallerReducer',type,payload)
    switch (type) {
        case CALL_ELEVATOR:
            return {index:payload.index}
        default:
            return state
    }
}

export default CallerReducer