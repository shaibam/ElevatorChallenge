import { CALL_ELEVATOR } from '../actions/caller-actions';
import { Elevators } from './ElevatorListReducer';
import { CALL } from '../consts/Call';
import { TIME_BETWEEN_FLOORS, TIME_TO_WAIT_ON_ARRIVAL } from '../consts/Movement';
const CallerReducer = (state = 0, { type, payload }) => {
    switch (type) {
        case CALL_ELEVATOR:
            /*let min_time_for_arrival = null;
            let time_for_arrival = null;*/
            for (var i in Elevators) {
                /*time_for_arrival = Elevators[i].lastFloor.index * TIME_BETWEEN_FLOORS + TIME_TO_WAIT_ON_ARRIVAL;
                if (min_time_for_arrival === null || min_time_for_arrival > time_for_arrival)
                    min_time_for_arrival = time_for_arrival;*/
                let call = Object.create(CALL);
                call.floor = payload.caller;
                Elevators[i].lastCall && (Elevators[i].lastCall.next = call)
                Elevators[i].lastCall = call;
                !Elevators[i].currentCall && (Elevators[i].currentCall = call);
            }
            return payload.caller
        default:
            return state
    }
}

export default CallerReducer