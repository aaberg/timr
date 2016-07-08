import React from 'react';
import '../../../public/css/loading.css';
import '../../../public/img/ring-alt.svg';

class Loading extends React.Component {

  render() {
    return (
      <div className  ="loading">
        <div>
          <img src="../../../public/img/ring-alt.svg"/>
        </div>
        <div>
          Loading the good stuff...
        </div>
      </div>
    )
  }
}

export default Loading;