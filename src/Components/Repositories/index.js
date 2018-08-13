import React, { Component } from 'react';

import './styles.css';

class Repositories extends Component {
  render() {
    return (
      <div className="ContainerRepository">
        <div className="Container-Avatar">
          <img
            src={this.props.avatar}
            alt={this.props.name}
            className="Avatar"
          />
        </div>

        <div>
          <div className="Container-Description">
            <strong>{this.props.name}</strong> <hr />
            <p>{this.props.description}</p>
            <a href={this.props.url}>Details</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Repositories;
