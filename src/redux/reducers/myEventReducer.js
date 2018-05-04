const myEvents = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_MY_EVENTS':
        return action.payload
        default:
        return state;
    }
}

export default myEvents;