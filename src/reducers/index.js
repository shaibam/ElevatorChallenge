import { combineReducers } from 'redux'
import { RegisterElevator } from './elevator-reducer'
import { RegisterCall} from './call-reducer'
export default combineReducers({
    elevators: RegisterElevator,
    call:RegisterCall
})