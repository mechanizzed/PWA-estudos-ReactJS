import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './styles.css';

class Header extends Component {
  render() {
    return (
      <div className="BgHeader">
        <Container>
          <div className="Container-Header">
            <input
              className="InputHeader"
              placeholder="Add GitHub Repository"
              onChange={this.props.onChange}
              value={this.props.inputRepository}
            />
            <button className="ButtonHeader" onClick={this.props.addRepository}>
              Add
            </button>
          </div>
        </Container>
      </div>
    );
  }
}

export default Header;
