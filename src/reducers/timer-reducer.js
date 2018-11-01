
import { UPDATE_TIME} from '../actions/timer-action';

export const UpdateTime = (state = null, { type, time }) => {
    switch (type) {
        case UPDATE_TIME:            
            return time
        default:
            return 0
    }
}
