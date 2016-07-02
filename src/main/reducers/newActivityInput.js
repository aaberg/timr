const newActivityInput = (state = {input: ''}, action) => {
  switch(action.type) {
    case 'NEW_ACTIVITY_INPUT':
      return Object.assign({}, state, {input: action.inpVal});
    default:
      return state;
  }
};

export default newActivityInput;