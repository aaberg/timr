import firebase from 'firebase';

const userAuthenticated = (store, user) => {
  store.dispatch({
    type: 'LOGGED_IN',
    user: user
  });

  firebase.database().ref('users/' + user.uid + "/selectedOrg").on('value', (orgVal) => {
    const orgId = orgVal.val();
    firebase.database().ref('org/' + orgId + '/name').once('value').then((orgNameVal) => {
      var orgObj = {
        orgId: orgId,
        name: orgNameVal.val()
      };
      
      store.dispatch({
        type:'SELECTED_ORG',
        selectedOrg: orgObj
      });
    });
  });
};

const userUnAuthenticated = (store) => {
  store.dispatch({
    type: 'LOGGED_IN',
    user: null
  });
};

export {userAuthenticated, userUnAuthenticated};

