import firebase from 'firebase';
import Activity from '../api/activity.js';

class Database {
  
  writeNewActivity(activity : Activity) {
    const key = firebase.database().ref().child('activities').push().key;
    const updates = {};
      updates['/activities/' + key] = activity.toObject();

    return firebase.database().ref().update(updates);
  }
  
}

export default Database;