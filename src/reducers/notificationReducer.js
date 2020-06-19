const initialState = {
    message: ''
}

const notificationReduce = (state = initialState, action) => {
    switch (action.type) {
    case 'NOTIFICATION': {
        return {...state, message: action.data.message}
    }
    case 'CLEAR': {
        return {...state, message: action.data.message}
    }
    default: 
        return state
    }
}

export const setNewNotification = (message) => ({
    type: 'NOTIFICATION',
    data: {
        message
    }
})

export const clearNotification = () => ({
    type: 'CLEAR',
    data: {
        message: ''
    }
})


export default notificationReduce