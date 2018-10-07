import { REGISTER_CALL } from '../actions/call-actions';
import { CALL, timeToReachfloor, NOW } from '../consts/consts'
import { Elevators } from '../reducers/elevator-reducer'

const RegisterCall = (state = null, { type, payload }) => {
    switch (type) {
        case REGISTER_CALL:
            let call = Object.create(CALL)
            let elevatorData
            call.floor = payload.id;

            if (Object.keys(Elevators).length > 1) {
                elevatorData = Object.entries(Elevators).reduce((reducedElevator, elevator, i, arr) => {
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
            } else {
                elevatorData = Object.entries(Elevators)[0];
                elevatorData[2] = timeToReachfloor(elevatorData[1].lastCall.floor, call.floor, elevatorData[1].lastCall.arrivalTime);
            }

            call.elevatorId = elevatorData[0];
            Elevators[call.elevatorId].lastCall = call;
            Elevators[call.elevatorId].lastCall.arrivalTime = elevatorData[2]
            if (!Elevators[call.elevatorId].currentCall.next)
                Elevators[call.elevatorId].currentCall.next = Elevators[call.elevatorId].lastCall
            return call
        default:
            return state
    }
}

export { RegisterCall }