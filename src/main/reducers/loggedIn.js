const loggedIn = (state = {user: null}, action) => {
  switch(action.type) {
    case 'LOGGED_IN':
      return Object.assign({}, state, {user: action.user});
    default:
      return state;
  }
}

export default loggedIn;
