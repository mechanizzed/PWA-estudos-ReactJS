import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

import './styles/styles.css';

import Header from './Components/Header';
import Repositories from './Components/Repositories';

class App extends Component {
  state = {
    inputRepository: '',
    repositories: []
  };

  addRepository = async () => {
    if (!this.state.inputRepository) return;
    const response = await axios.get(
      `https://api.github.com/repos/${this.state.inputRepository}`
    );
    this.setState({
      inputRepository: '',
      repositories: [...this.state.repositories, response.data]
    });
    console.log(response.data);
  };

  render() {
    return (
      <Fragment>
        <Header
          inputRepository={this.state.inputRepository}
          onChange={e => this.setState({ inputRepository: e.target.value })}
          addRepository={this.addRepository}
        />
        <main className="Container-Main">
          <Container>
            <Row>
              {this.state.repositories.map(repository => (
                <Col xs="12" sm="6" md="6" lg="4" key={repository.id}>
                  <Repositories
                    name={repository.name}
                    description={repository.description}
                    avatar={repository.owner.avatar_url}
                    url={repository.html_url}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </main>
      </Fragment>
    );
  }
}

export default App;
