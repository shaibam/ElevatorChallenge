export const CALL_ELEVATOR = 'caller:addFloor'
export const CallElevator = (index) => {
    return {
        type: CALL_ELEVATOR,
        payload:{
            caller:index
        }
    }
}
