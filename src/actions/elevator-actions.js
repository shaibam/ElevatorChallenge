export const REGISTER_ELEVATOR = 'elevator:register'
export const RegisterElevator = (elevator) => {
    console.log('elevator',elevator,elevator["elevator.0"]);
    debugger;
    return {
        type: REGISTER_ELEVATOR,
        /*payload:{
            id:id
        }*/
        elevator
    }
}

export const ELEVATOR_ARRIVED = 'elevator:arrived'
export const ElevatorArrived = (floor) => {
    
    return {
        type: ELEVATOR_ARRIVED,
        floor
    }
}
