const CALL = {
    next: null,
    floor: 0,
    journeyTime: 0,
    startTime: 0,
    elevatorId: '',

}

const ELEVATOR = { lastCall: Object.create(CALL), currentCall: Object.create(CALL) };

const NUM_OF_FLOORS = 6
const NUM_OF_ELEVATORS = 2

const TIME_BETWEEN_FLOORS = 500;
const TIME_TO_WAIT_ON_ARRIVAL = 2000;

const timeToReachfloor = (currentFloor, targetFloor) => {
    return TIME_TO_WAIT_ON_ARRIVAL + Math.abs(currentFloor - targetFloor) * TIME_BETWEEN_FLOORS
}

const NOW = performance.now();

export { CALL, ELEVATOR, NUM_OF_FLOORS, NUM_OF_ELEVATORS, TIME_BETWEEN_FLOORS, TIME_TO_WAIT_ON_ARRIVAL, timeToReachfloor, NOW }