import { START_TIMER } from '../actions/timer-actions';
var i = 0;
const TimerReducer = (state = null, { type, payload }) => {
    switch (type) {
        case START_TIMER:
            return performance.now();
        default:
            return state
    }
}

export default TimerReducer