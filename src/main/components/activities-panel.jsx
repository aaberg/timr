import React from 'react';
import {PanelHeader, PanelBody} from './panel.jsx';


class ActivitiesPanel extends React.Component {

  handleInpValChange() {
    const val = this.refs.activityInput.value;
    this.props.newActivityInputValChange(val);
  }

  handleKeyUp(event) {
    
    // Return button is clicked
    if (event.keyCode === 13) {
      this.props.addNewActivity();
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
            value={this.props.nawActivityVal}
            onChange={this.handleInpValChange.bind(this)}
            onKeyUp={this.handleKeyUp.bind(this)}>
          </input>
        </PanelBody>
      </div>
    )
  }
}

ActivitiesPanel.contextTypes = {
  store: React.PropTypes.object
};

export default ActivitiesPanel;
