export const ELEVATOR_ARRIVED = 'call:arrived'
export const ElevatorArrived = (index) => {    
    return {
        type: ELEVATOR_ARRIVED,
        payload:{
            caller:index
        }
    }
}
