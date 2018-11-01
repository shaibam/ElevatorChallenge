export const REGISTER_ELEVATOR = 'elevator:register'
export const RegisterElevator = (id) => {
    return {
        type: REGISTER_ELEVATOR,
        payload:{
            id:id
        }
    }
}

export const ELEVATOR_ARRIVED = 'elevator:arrived'
export const ElevatorArrived = (arrival) => {
    return {
        type: ELEVATOR_ARRIVED,
        payload:{
            arrival
        }
    }
}

export const ELEVATOR_DEPARTURE = 'elevator:departure'
export const ElevatorDeparture = (departure) => {
    return {
        type: ELEVATOR_DEPARTURE,
        payload:{
            departure
        }
    }
}
