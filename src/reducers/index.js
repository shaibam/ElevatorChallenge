import { combineReducers } from 'redux'
import CallerReducer from './CallerReducer';
import {RegisterElevator} from './ElevatorListReducer';
import ElevatorArrived from './ElevatorArrivalReducer';
import TimerReducer from './TimerReducer'
export default combineReducers({
    elevators:RegisterElevator,
    caller:CallerReducer,
    arrived:ElevatorArrived,
    tick:TimerReducer
})