import React from 'react';
import './App.css';
import Header from '../src/components/Header';
import ContactCard from '../src/components/ContactCard';
import Technologies from './components/Technologies';
import Container from 'react-bootstrap/Container';
import Education from './components/Education';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import GuideSlide from '../src/components/Carousel';
import About from './components/About';

class App extends React.Component {

  render() {

    return (
      <>
        <Header />
        <div className="App">
          <Container fluid>
            <Row>
              <div class="description">
                <h1><b>Hi, I'm Ben.</b></h1>
                <Col>
                  <h2>This is my personal website I'm building using React</h2>
                </Col>
              </div>
            </Row>
            <br></br>
            <Row >
              <Col>
                <About />
              </Col>
              <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ContactCard />
              </Col>
            </Row>
            <Row>
              <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Education />
              </Col>
              <Col >
                <GuideSlide />
              </Col>
            </Row>
            <Row style={{ display: 'flex' }}>
              <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Technologies />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    )
  }
}

export default App;