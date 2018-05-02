const createdEvent = (state = [], action) => {
    switch(aciton.type) {
        case 'SET_EVENT':
        return action.payload
        default:
        return state;
    }
}

export default createdEvent;