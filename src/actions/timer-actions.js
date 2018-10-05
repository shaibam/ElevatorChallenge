export const START_TIMER = 'timer:start';
export const STOP_TIMER = 'timer:stop';
const  interval = 100;
var timer;
export const StartTimer = (index) => {
    return (dispatch) => {
        if (timer) return;
        timer = setInterval(() => {
            dispatch({
                type: START_TIMER,
                payload: {
                    caller: index
                }
            })
        }, interval)
    }
}

export const StopTimer = (index) => {
    return (dispatch) => {
        if (timer) {
            clearInterval(timer)
            timer = null;
            return;
        }
    }
}