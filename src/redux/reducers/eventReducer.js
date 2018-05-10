const createdEvent = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_EVENT':
        console.log('event action.payload:', action.payload);
        return action.payload
        default:
        return state;
    }
}

export default createdEvent;