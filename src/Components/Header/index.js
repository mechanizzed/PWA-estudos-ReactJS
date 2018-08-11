import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './styles.css';

class Header extends Component {
  state = {
    inputRepository: ''
  };

  addRepository = () => {};

  render() {
    return (
      <div className="BgHeader">
        <Container>
          <div className="Container-Header">
            <input
              className="InputHeader"
              placeholder="Add GitHub Repository"
              onChange={e => this.setState({ inputRepository: e.target.value })}
              value={this.state.inputRepository}
            />
            <button className="ButtonHeader" onClick={this.addRepository}>
              Add
            </button>
          </div>
        </Container>
      </div>
    );
  }
}

export default Header;
