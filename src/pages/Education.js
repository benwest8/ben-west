import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EducationCard from '../components/EducationCard'
import Image from 'react-bootstrap/Image';
import SJU_Logo from '../images/sjuLogo.png';
import senate_Logo from '../images/senateLogo.png';
import soccer_Logo from '../images/sjuSoccerLogo.png';
import uai_Logo from '../images/uaiLogo.png'

import Card from 'react-bootstrap/Card';


class Education extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <Image src={SJU_Logo} rounded></Image>
          </Col>
          <Col>
            <EducationCard />
          </Col>
        </Row>
        <br></br>
        <Row>
          {/* These cards should be put in their own component as I reuse them quite a bit */}
          <Col>
            <Card border="dark" bg="dark" fluid style={{ width: '20rem' }}>
              <Card.Header><b>Sustainability Representaive</b></Card.Header>
              <Card.Body>
                <Card.Text text="dark" text-align="left">
                  <p></p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Image src={senate_Logo} style={{ width: 300}} rounded></Image>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Image src={soccer_Logo} style={{ width: 200}} rounded></Image>
          </Col>
          <Col>
            <Card border="dark" bg="dark" fluid style={{ width: '20rem' }}>
              <Card.Header><b>Soccer</b></Card.Header>
              <Card.Body>
                <Card.Text text="dark" text-align="left">
                  <p></p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Card border="dark" bg="dark" fluid style={{ width: '20rem' }}>
              <Card.Header><b>Study Abroad in Chile</b></Card.Header>
              <Card.Body>
                <Card.Text text="dark" text-align="left">
                  <p>Fall 2018 - I was lucky enough to spend 5 months studying abroad in Viña del Mar, Chile.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Image src={uai_Logo} style={{ width: 300}} rounded></Image>
          </Col>
        </Row>
      </>
    );
  }
}

export default Education;
