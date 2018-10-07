import { combineReducers } from 'redux'
import { RegisterElevator, ElevatorArrived } from './elevator-reducer'
import { RegisterCall } from './call-reducer'
export default combineReducers({
    elevators: RegisterElevator,
    arrived: ElevatorArrived,
    call: RegisterCall
})