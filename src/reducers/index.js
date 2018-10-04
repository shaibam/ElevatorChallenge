import { combineReducers } from 'redux'
import CallerReducer from './CallerReducer';
import {RegisterElevator} from './ElevatorListReducer';

export default combineReducers({
    elevators:RegisterElevator,
    caller:CallerReducer,
})