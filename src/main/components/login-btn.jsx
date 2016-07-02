import React from 'react';
import firebase from 'firebase';

class LoginBtn extends React.Component {

  constructor() {
    super();
  }

  handleProfileClick() {
    const {store} = this.context;
    store.dispatch({
      type: 'PROFILE_VISIBLE',
      profileVisible: true
    });
  }

  closePopup() {
    const {store} = this.context;
    store.dispatch({
      type: 'PROFILE_VISIBLE',
      profileVisible: false
    });
  }

  handleLogoutClick() {
    firebase.auth().signOut();
  }

  handleLoginClick() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider)
  }

  render() {

    const {store} = this.context;
    const user = store.getState().auth.user;
    const profileVisible = store.getState().profileDisplay.profileVisible;

    if (user) {
      return (
        <div className="profile-wrapper">
          <a id="logout-btn" onClick={this.handleProfileClick.bind(this)} href="#">
            <img src={user.photoURL} className="profile-photo" alt="profile photo" />
          </a>
          <div ref="popup" className={profileVisible ? 'profile-popup visible' : 'profile-popup'}>
            <button className="btn-close" onClick={this.closePopup.bind(this)}>x</button>
            <img src={user.photoURL} className="profile-photo u-pull-left" alt="profile photo" />
            <div>{user.displayName}</div>
            <a href="#" onClick={this.handleLogoutClick.bind(this)}>Logout</a>
          </div>
        </div>
      );
    } else {
      return <button id="login-btn" className="button-primary" onClick={this.handleLoginClick.bind(this)}>Login</button>
    }
  }
}

LoginBtn.contextTypes = {
  store: React.PropTypes.object
};

export default LoginBtn;
