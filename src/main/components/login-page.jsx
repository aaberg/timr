import React from 'react';
import Navbar from './navbar.jsx';
import {Link} from 'react-router';

class Login extends React.Component{

  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){
    const {store} = this.context;

    const linkToRegPage = store.getState().auth.user ?
      (
        <div className='navbar-link-wrapper'>
          <Link to="/reg" className="button">Go to Console</Link>
        </div>
      ) : null;

    return (
      <div>
        <Navbar>{linkToRegPage}</Navbar>
        <div className="container">
          <h1 style={{"marginTop": "50px"}}>Welcome to timr</h1>
        </div>

      </div>
    );
  }
}

Login.contextTypes = {
  store: React.PropTypes.object
};

export default Login;
