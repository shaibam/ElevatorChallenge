import { REGISTER_CALL } from '../actions/call-actions';
import { CALL, timeToReachfloor, NOW } from '../consts/consts'
import { Elevators } from '../reducers/elevator-reducer'

const RegisterCall = (state = null, { type, payload }) => {
    switch (type) {
        case REGISTER_CALL:
            let call = Object.create(CALL)
            let elevatorData
            call.floor = payload.id;
            //console.log(Elevators)
            if (Object.keys(Elevators).length > 1) {
                elevatorData = Object.entries(Elevators).reduce((reducedElevator, elevator, i, arr) => {
                    //console.log(reducedElevator[1].lastCall.arrivalTime,elevator[1].lastCall.arrivalTime)
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
            call.arrivalTime = elevatorData[2]
            ///console.log(' call', elevatorData[0],call.floor,elevatorData[2])
            /*Elevators[call.elevatorId].lastCall = call;
            let c = Elevators[call.elevatorId].currentCall
            while (c.next) {
                c = c.next;
            }*/
            //console.log(Elevators)
            //c.next = call;
            Elevators[call.elevatorId].lastCall.next = call;
            Elevators[call.elevatorId].lastCall = Elevators[call.elevatorId].lastCall.next;
            return call
        default:
            return state
    }
}

export { RegisterCall }