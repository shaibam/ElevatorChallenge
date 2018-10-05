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
            //console.log(Elevators.constructor)
            /*console.log(Elevators.reduce((a,b,c,d)=>{
                console.log(a,b,c,d)
            }));*/
            //console.log(Elevators.reduce((minIndex,value,index,arr)=> value.arrivalTime<arr[minIndex].arrivalTime ? index:minIndex))
            /*timeToReachfloor(reducedValue[1].lastCall.floor,call.floor,reducedValue[1].lastCall.arrivalTime)
            console.log(Object.entries(Elevators).reduce((reducedValue, value) =>
                reducedValue[1].lastCall.arrivalTime < value[1].lastCall.arrivalTime ?
                    reducedValue : value
            ));*/
            //timeToReachfloor(reducedValue[1].lastCall.floor, call.floor, reducedValue[1].lastCall.arrivalTime)
            /* let elevatorId = Object.entries(Elevators).reduce((reducedElevator, elevator, i, arr) => {
                 !reducedElevator[1].floor ?
                     reducedElevator :
                     !elevator[1].floor ?
                         elevator :
                         timeToReachfloor(reducedElevator[1].lastCall.floor, call.floor, reducedElevator[1].lastCall.arrivalTime) < timeToReachfloor(elevator[1].lastCall.floor, call.floor, elevator[1].lastCall.arrivalTime) ?
                             reducedElevator : elevator
             }
             )[0];*/
            let elevatorData = Object.entries(Elevators).reduce((reducedElevator, elevator, i, arr) => {
                //console.log(reducedElevator[1].lastCall)
                /*if (!reducedElevator[1].arrivalTime) {
                    reducedElevator[2] = timeToReachfloor(reducedElevator[1].lastCall.floor, call.floor, reducedElevator[1].lastCall.arrivalTime);
                    return reducedElevator
                } else if (!elevator[1].arrivalTime) {
                    elevator[2] = timeToReachfloor(elevator[1].lastCall.floor, call.floor, elevator[1].lastCall.arrivalTime);
                    return elevator;
                } else {*/
                    let reducedArrivalTime = timeToReachfloor(reducedElevator[1].lastCall.floor, call.floor, reducedElevator[1].lastCall.arrivalTime);
                    let elevatorArrivalTime = timeToReachfloor(elevator[1].lastCall.floor, call.floor, elevator[1].lastCall.arrivalTime);
                    if (reducedArrivalTime < elevatorArrivalTime) {
                        reducedElevator[2] = reducedArrivalTime;
                        return reducedElevator
                    } else {
                        elevator[2] = elevatorArrivalTime;
                        return elevator;
                    }
                //}
            });
            call.arrivalTime = elevatorData[2];
            call.elevatorId=elevatorData[0];
            console.log('call',call)
            E = Elevators[elevatorData[0]]
            E.lastCall && (E.lastCall.next = call)
            E.lastCall = call;
            if (!E.currentCall.arrivalTime) {
                E.currentCall = call;
                return E.currentCall
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