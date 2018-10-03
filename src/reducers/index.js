import { combineReducers } from 'redux'
import CallerReducer from './CallerReducer';
import {RegisterElevator} from './ElevatorListReducer';
import ElevatorArrived from './ElevatorArrivalReducer'

export default combineReducers({
    elevators:RegisterElevator,
    caller:CallerReducer,
    arrived:ElevatorArrived
})