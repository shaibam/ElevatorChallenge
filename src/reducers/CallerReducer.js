import { CALL_ELEVATOR } from '../actions/caller-actions';
import { ELEVATOR_ARRIVED } from '../actions/elevator-arrival-actions';
import { Elevators } from './ElevatorListReducer';
import { CALL } from '../consts/Call';
import { TIME_BETWEEN_FLOORS, TIME_TO_WAIT_ON_ARRIVAL } from '../consts/Movement';
const timeToReachfloor = (startTime, currentFloor, targetFloor) => {
    return startTime + Math.abs(currentFloor - targetFloor) * TIME_BETWEEN_FLOORS
}
const CallerReducer = (state = 0, { type, payload }) => {
    //let E = Elevators['elevator.1'];
    let E;
    switch (type) {
        case CALL_ELEVATOR:
            let call = Object.create(CALL);
            call.floor = payload.caller;
            let elevatorData = Object.entries(Elevators).reduce((reducedElevator, elevator, i, arr) => {
                let reducedArrivalTime = timeToReachfloor(reducedElevator[1].lastCall.floor, call.floor, reducedElevator[1].lastCall.arrivalTime);
                let elevatorArrivalTime = timeToReachfloor(elevator[1].lastCall.floor, call.floor, elevator[1].lastCall.arrivalTime);
                if (reducedArrivalTime < elevatorArrivalTime) {
                    reducedElevator[2] = reducedArrivalTime;
                    return reducedElevator
                } else {
                    elevator[2] = elevatorArrivalTime;
                    return elevator;
                }
            });
            call.arrivalTime = elevatorData[2];
            call.elevatorId = elevatorData[0];

            E = Elevators[elevatorData[0]]
            E.lastCall && (E.lastCall.next = call)
            E.lastCall = call;

            if (!E.currentCall.arrivalTime) {
                E.currentCall = call;
                return E.currentCall
            } else
                return state;
        case ELEVATOR_ARRIVED:
            E = Elevators[payload.caller.elevatorId]
            if (E.currentCall.next) {
                E.currentCall = E.currentCall.next
                return E.currentCall
            } else {
                E.currentCall = Object.create(CALL);
                E.lastCall = Object.create(CALL);
                E.lastCall.floor = payload.caller.floor;
                return state;
            }

        default:
            return state
    }
}

export default CallerReducer