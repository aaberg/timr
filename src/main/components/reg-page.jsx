import React from 'react';
import Navbar from './navbar.jsx';
import ActivitiesPanel from './activities-panel.jsx';
import {writeNewActivity} from '../utils/database.js';
import Activity from '../api/activity.js';
import Loading from './loading.jsx';

class RegPage extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleNewActivityInputChange(newVal:  string) {
    const {store} = this.context;
    store.dispatch({
      type: 'NEW_ACTIVITY_INPUT',
      inpVal: newVal
    });
  }

  handleAddingOfNewActivity() {
    const {store} = this.context;
    const activity = new Activity(store.getState().newActivity.input);
    activity.from = new Date();
    activity.to = null;
    activity.uid = store.getState().auth.user.uid;

    const orgId = store.getState().profile.selectedOrg.orgId;

    writeNewActivity(activity, orgId).then(() => {
      store.dispatch({type: 'NEW_ACTIVITY_INPUT', inpVal: ''});
      console.log('activity written');
    });
  }

  render() {

    const {store} = this.context;

    const selectedOrgId = store.getState().profile.selectedOrg.orgId;
    if(selectedOrgId === '') {
      return <Loading />;
    }

    return (
      <div>
        <Navbar selectedOrgName={store.getState().profile.selectedOrg.name} />
        <div className="container">
          <ActivitiesPanel
            newActivityInputValChange={this.handleNewActivityInputChange.bind(this)}
            nawActivityVal={store.getState().newActivity.input}
            addNewActivity={this.handleAddingOfNewActivity.bind(this)}
          />
        </div>


      </div>

    )
  }
}

RegPage.contextTypes = {
  store: React.PropTypes.object
};

export default RegPage;
