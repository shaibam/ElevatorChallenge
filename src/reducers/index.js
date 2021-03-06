import { combineReducers } from 'redux'
import { RegisterElevator, ElevatorArrived, ElevatorDeparture } from './elevator-reducer'
import { RegisterCall } from './call-reducer'
export default combineReducers({
    elevators: RegisterElevator,
    arrived: ElevatorArrived,
    departed: ElevatorDeparture,
    call: RegisterCall
})