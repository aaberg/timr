import React from 'react';
import LoginBtn from './login-btn.jsx';

class Navbar extends React.Component {

  render() {
    return (

      <div id="header">
        <div className="panel-body">
          {this.props.children}
        </div>
        <div className="u-pull-right">
          <LoginBtn />
        </div>
        <div className="selected-org u-pull-right">{this.props.selectedOrgName}</div>
        <h3>timr</h3>

      </div>
    );
  }
}

export default Navbar;
