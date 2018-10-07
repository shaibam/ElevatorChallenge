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
export const ElevatorArrived = (id) => {
    return {
        type: ELEVATOR_ARRIVED,
        payload:{
            id:id
        }
    }
}
