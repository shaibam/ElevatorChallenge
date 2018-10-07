export const REGISTER_ELEVATOR = 'elevator:register'
export const RegisterElevator = (id) => {
    return {
        type: REGISTER_ELEVATOR,
        payload:{
            id:id
        }
    }
}
