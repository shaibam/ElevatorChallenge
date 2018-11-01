const CALL = {
    next: null,
    floor: 0,
    arrivalTime: 0,
    elevatorId: '',
}

const ELEVATOR = () => {
    let call = Object.create(CALL);
    return { lastCall: call, currentCall: call }
};

const NUM_OF_FLOORS = 7
const NUM_OF_ELEVATORS = 1

const TIME_BETWEEN_FLOORS = 500;
const TIME_TO_WAIT_ON_ARRIVAL = 2000;

const TIMER_INTERVAL = 50

const timeToReachfloor = (currentFloor, targetFloor, startTime) => {
    // console.log('red',currentFloor, targetFloor)
    return startTime + TIME_TO_WAIT_ON_ARRIVAL + Math.abs(currentFloor - targetFloor) * TIME_BETWEEN_FLOORS
}

const NOW = performance.now();

export { CALL, ELEVATOR, NUM_OF_FLOORS, NUM_OF_ELEVATORS, TIME_BETWEEN_FLOORS, TIME_TO_WAIT_ON_ARRIVAL, timeToReachfloor, NOW, TIMER_INTERVAL }