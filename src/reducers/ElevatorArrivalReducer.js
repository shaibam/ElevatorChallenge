import { ELEVATOR_ARRIVED } from '../actions/elevator-arrival-actions';
import { Elevators } from './ElevatorListReducer';
import { CALL } from '../consts/Call';

const ElevatorArrived = (state = 0, { type, payload }) => {
    console.log('ElevatorArrivedReducer')
    switch (type) {
        case ELEVATOR_ARRIVED:
            for (var i in Elevators) {
                Elevators[i].currentCall.next && (Elevators[i].currentCall = Elevators[i].currentCall.next)
            }
           return payload.caller
        default:
            return state
    }
}

export default ElevatorArrived