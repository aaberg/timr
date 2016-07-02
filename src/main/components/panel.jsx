import React from 'react';
import '../../../public/css/panels.css'

class PanelBody extends React.Component {

  render() {
    return (
      <div className="panel-body">
        {this.props.children}
      </div>
    );
  }
}

class PanelHeader extends React.Component {

  render() {
    return (
      <div className="panel-header">
        <div className="u-pull-right">{this.props.children}</div>
        <h5>{this.props.title}</h5>

      </div>
    );
  }
}

export {PanelHeader, PanelBody};
