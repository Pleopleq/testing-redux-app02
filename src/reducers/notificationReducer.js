const initialState = {
    message: ''
}

const notificationReduce = (state = initialState, action) => {
    if(action.type === 'NOTIFICATION'){
        return {...state, message: state.message.concat(action.data.message)}
    }
return state
}

export const setNewNotification = (message) => ({
    type: 'NOTIFICATION',
    data: {
        message
    }
})


export default notificationReduce