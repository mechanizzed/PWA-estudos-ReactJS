import React, { Component } from 'react';

import './styles.css';

class Header extends Component {
  state = {
    inputRepository: ''
  };

  addRepository = () => {};

  render() {
    return (
      <div className="Container">
        <input
          placeholder="Add GitHub Repository"
          onChange={e => this.setState({ inputRepository: e.target.value })}
          value={this.state.inputRepository}
        />
        <button onClick={this.addRepository}>Add</button>
      </div>
    );
  }
}

export default Header;
