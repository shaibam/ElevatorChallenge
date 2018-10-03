export const ELEVATOR_ARRIVED = 'elevator:arrived'
export const ElevatorArrived = (index) => {
    console.log('ElevatorArrived')
    return {
        type: ELEVATOR_ARRIVED,
        payload:{
            caller:index
        }
    }
}
