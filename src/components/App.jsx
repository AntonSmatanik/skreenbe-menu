import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import MenuControl from './MenuControl';

import './../css/App.scss';
import settings from '../data/settings.json';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg="8">
          </Col>
          <Col lg="4">
            <MenuControl items={settings} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;