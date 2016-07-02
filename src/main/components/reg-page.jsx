import React from 'react';
import firebase from 'firebase';
import Navbar from './navbar.jsx';
import ActivitiesPanel from './activities-panel.jsx';

class RegPage extends React.Component {

  constructor() {
    super();
    this.state = {
      test: '.'
    }
  }

  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });

    // console.log('listening');
    // firebase.database().ref('customers/nordea').on('value', (entry) => {
    //   console.log('got result');
    //   this.setState({test: entry.val().name});
    // });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <ActivitiesPanel />
        </div>

      </div>

    )
  }
}

RegPage.contextTypes = {
  store: React.PropTypes.object
}

export default RegPage;
