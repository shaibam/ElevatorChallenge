import { Store } from './store';
import { UpdateTime } from '../actions/timer-action'
import {TIMER_INTERVAL} from '../consts/consts'
export default class Timer {
    constructor() {
        this.now = null;
        this.runTimer();
        console.log('timer')
    }
    runTimer = () => {
        setTimeout(() => {
            if (this.now) {
                let now = performance.now();
                Store.dispatch(UpdateTime(now - this.now))
                this.now = now;
            } else
                this.now = performance.now();
            this.runTimer();
        }, TIMER_INTERVAL)
    }
}
