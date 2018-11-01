import { REGISTER_ELEVATOR, ELEVATOR_ARRIVED, ELEVATOR_DEPARTURE } from '../actions/elevator-actions';
import { ELEVATOR } from '../consts/consts'
var Elevators = {};

const RegisterElevator = (state = null, { type, elevator }) => {
    switch (type) {
        case REGISTER_ELEVATOR:
<<<<<<< HEAD
            /*Elevators[payload.id] = Object.create(ELEVATOR)
=======
            //Elevators[payload.id] = Object.create(ELEVATOR)
            Elevators[payload.id] = new ELEVATOR();
>>>>>>> b9e3cb89ed05e880ba569f10cbf333fe7891228a
            Elevators[payload.id].lastCall.elevatorId = payload.id;
            Elevators[payload.id].currentCall.elevatorId = payload.id;*/
            //Object.assign(Elevators, elevator)
            //console.log(Elevators)
            //console.log(elevator)
            //debugger
            Elevators[Object.keys(elevator)[0]] = Object.values(elevator)[0];
            return Elevators

        default:
            return state
    }
}

export const ElevatorArrived = (state = null, { type, floor }) => {
    switch (type) {

        case ELEVATOR_ARRIVED:
<<<<<<< HEAD
            console.log('ELEVATOR_ARRIVED:', floor)
            return floor
=======
            //console.log(' ELEVATOR_ARRIVED payload', payload)
            return payload.id
>>>>>>> b9e3cb89ed05e880ba569f10cbf333fe7891228a
        default:
            return null
    }
}

export const ElevatorDeparture = (state = null, { type, payload }) => {
    switch (type) {
        case ELEVATOR_DEPARTURE:
            //console.log(' ELEVATOR_DEPARTURE payload', payload)
            return payload.id
        default:
            return null
    }
}
export { RegisterElevator, Elevators }