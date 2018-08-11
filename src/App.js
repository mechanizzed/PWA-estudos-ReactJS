import React, { Component, Fragment } from 'react';

import './styles/styles.css';

import Header from './Components/Header';
import Repositories from './Components/Repositories';

class App extends Component {
  state = {
    repositories: []
  };
  render() {
    return (
      <Fragment>
        <Header />
      </Fragment>
    );
  }
}

export default App;
