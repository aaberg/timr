import React from 'react';
import {PanelHeader, PanelBody} from './panel.jsx';
import Activity from '../api/activity.js';
import Database from '../db/database.js';


class ActivitiesPanel extends React.Component {

  handleKeyUp(event) {
    const isReturn = event.keyCode === 13;
    if (isReturn) {
      const val = this.refs.activityInput.value;
      const activity = new Activity(val);
      const db = new Database();
      const res = db.writeNewActivity(activity);

      console.log(res);
    }
    
  }

  render() {
    return (
      <div className="panel">
        <PanelHeader title="My activities">
          {/*<a href="#" className="add-btn" title="New activity"><i className="fa fa-plus-circle" aria-hidden="true"></i></a>*/}
        </PanelHeader>
        <PanelBody>
          <input
            ref="activityInput"
            type="text"
            placeholder="What are you working on"
            className="u-full-width"
            onKeyUp={this.handleKeyUp.bind(this)}>
          </input>
        </PanelBody>
      </div>
    )
  }
}

export default ActivitiesPanel;
