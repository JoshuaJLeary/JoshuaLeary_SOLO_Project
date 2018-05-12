const attendingEvent = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_ATTENDING':
        console.log('event action.payload:', action.payload);
        return action.payload
        default:
        return state;
    }
}

export default attendingEvent;