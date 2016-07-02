const profileDisplay = (state = {profileVisible: false}, action) => {
  switch (action.type) {
    case 'PROFILE_VISIBLE':
      return Object.assign({}, state, {profileVisible: action.profileVisible});
    default:
      return state;
  }
}

export default profileDisplay;
