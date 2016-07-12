import  {combineReducers} from 'redux';

const auth = (state = {user: null}, action) => {
  switch(action.type) {
    case 'LOGGED_IN':
      return Object.assign({}, state, {user: action.user});
    default:
      return state;
  }
};

const newActivity = (state = {input: ''}, action) => {
  switch(action.type) {
    case 'NEW_ACTIVITY_INPUT':
      return Object.assign({}, state, {input: action.inpVal});
    default:
      return state;
  }
};

const profile = (state = {profileVisible: false, selectedOrg: {orgId: '', name: null}}, action) => {
  switch (action.type) {
    case 'PROFILE_VISIBLE':
      return Object.assign({}, state, {profileVisible: action.profileVisible});
    case 'SELECTED_ORG':
      return Object.assign({}, state, {selectedOrg: action.selectedOrg});
    default:
      return state;
  }
};

const combinedReducers = combineReducers({
  profile,
  auth,
  newActivity
});

export default combinedReducers;