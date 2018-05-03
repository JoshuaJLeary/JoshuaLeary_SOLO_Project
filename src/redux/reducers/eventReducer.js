const createdEvent = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_EVENT':
        return action.payload
        default:
        return state;
    }
}

export default createdEvent;