import firebase from 'firebase';
import Activity from '../api/activity.js';

const writeNewActivity = (activity : Activity, orgId: string) => {
  const key = firebase.database().ref().child('org').child(orgId).child('activities').push().key;
  const updates = {};
    updates['org/' + orgId + '/activities/' + key] = activity.toObject();

  return firebase.database().ref().update(updates);
};

export {writeNewActivity};