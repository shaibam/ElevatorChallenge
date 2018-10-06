import { CALL_ELEVATOR } from '../actions/caller-actions';
import { ELEVATOR_ARRIVED } from '../actions/elevator-arrival-actions';
import { Elevators, ELEVATOR } from './ElevatorListReducer';
import { CALL } from '../consts/Call';
import { TIME_BETWEEN_FLOORS, TIME_TO_WAIT_ON_ARRIVAL } from '../consts/Movement';

const timeToReachfloor = (startTime, currentFloor, targetFloor) => {
    return TIME_TO_WAIT_ON_ARRIVAL + startTime + Math.abs(currentFloor - targetFloor) * TIME_BETWEEN_FLOORS
}

const CallerReducer = (state = Object.create(ELEVATOR), { type, payload }) => {
    //let E = Elevators['elevator.1'];
    let E;
    switch (type) {
        case CALL_ELEVATOR:
            let call = Object.create(CALL);
            call.floor = payload.caller;
            let elevatorData
            
            if (Object.keys(Elevators).length > 1)
                elevatorData = Object.entries(Elevators).reduce((reducedElevator, elevator, i, arr) => {
                    //console.log(reducedElevator, elevator, i, arr)
                    let reducedArrivalTime = timeToReachfloor(reducedElevator[1].lastCall.arrivalTime, reducedElevator[1].lastCall.floor, call.floor);
                    let elevatorArrivalTime = timeToReachfloor(elevator[1].lastCall.arrivalTime, elevator[1].lastCall.floor, call.floor);
                    if (reducedArrivalTime < elevatorArrivalTime) {
                        reducedElevator[2] = reducedArrivalTime;
                        return reducedElevator
                    } else {
                        elevator[2] = elevatorArrivalTime;
                        return elevator;
                    }
                });
            else {
                elevatorData = Object.entries(Elevators)[0];
                elevatorData[2] = timeToReachfloor(elevatorData[1].lastCall.arrivalTime, elevatorData[1].lastCall.floor, call.floor);
            }
            
            call.arrivalTime = elevatorData[2];

            call.elevatorId = elevatorData[0];

            E = Elevators[elevatorData[0]]
            E.lastCall && (E.lastCall.next = call)
            E.lastCall = call;

            if (!E.currentCall.arrivalTime) {
                E.currentCall = call;
                E.currentCall.state = 'current'
                return E.currentCall
            } else {
                E.lastCall.state = 'last'
                return E.lastCall;
            }
        case ELEVATOR_ARRIVED:
            E = Elevators[payload.caller.elevatorId]
            if (E.currentCall.next) {
                E.currentCall = E.currentCall.next;
                E.currentCall.state = 'current'
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