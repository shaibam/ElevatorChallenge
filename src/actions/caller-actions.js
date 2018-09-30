export const CALL_ELEVATOR = 'caller:addFloor'
export const CallElevator = (index) => {
    console.log('CallElevator',index)
    return {
        type: CALL_ELEVATOR,
        payload:{
            index
        }
    }
}
