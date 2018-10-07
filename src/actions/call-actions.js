
export const REGISTER_CALL = 'call:register'
export const RegisterCall = (id) => {
    return {
        type: REGISTER_CALL,
        payload:{
            id:id
        }
    }
}