import { ELEVATOR_ARRIVED } from '../actions/elevator-arrival-actions';

const ElevatorArrived = (state = 0, { type, payload }) => {
    switch (type) {
        case ELEVATOR_ARRIVED:            
           return payload.caller
        default:
            return state
    }
}

export default ElevatorArrived