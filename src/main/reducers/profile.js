const profile = (state = {profileVisible: false, selectedOrg: {orgId: '', name: null}}, action) => {
  switch (action.type) {
    case 'PROFILE_VISIBLE':
      return Object.assign({}, state, {profileVisible: action.profileVisible});
    case 'SELECTED_ORG':
      return Object.assign({}, state, {selectedOrg: action.selectedOrg});
    default:
      return state;
  }
}

export default profile;
