const golfProfile = (state = [ ], action) => {
    switch (action.type) {
      case 'SET_GOLFER':
      return action.payload
      default:
      return state;
    }
  }

export default golfProfile;