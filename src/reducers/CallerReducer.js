import { CALL_ELEVATOR } from '../actions/caller-actions';
import { ELEVATOR_ARRIVED } from '../actions/elevator-arrival-actions';
import { Elevators } from './ElevatorListReducer';
import { CALL } from '../consts/Call';
import { TIME_BETWEEN_FLOORS, TIME_TO_WAIT_ON_ARRIVAL } from '../consts/Movement';
const CallerReducer = (state = 0, { type, payload }) => {
    let E = Elevators['elevator.1'];
    switch (type) {
        case CALL_ELEVATOR:
            let call = Object.create(CALL);
            call.floor = payload.caller;
            E.lastCall && (E.lastCall.next = call)
            E.lastCall = call;            
            if (!E.currentCall) {
                E.currentCall = call;
                return E.currentCall;
            } else
                return state;
        case ELEVATOR_ARRIVED:
            if (E.currentCall.next) {
                E.currentCall = E.currentCall.next
                return E.currentCall
            } else {
                E.currentCall = null;
                E.lastCall = null;
                return state;
            }
                
        default:
            return state
    }
}

export default CallerReducer