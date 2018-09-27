export const UPDATE_USER = 'users:updateUser'
export const UpdateUser = (newUser) => {
    return {
        type: UPDATE_USER,
        payload:{
            user:newUser
        }
    }
}
