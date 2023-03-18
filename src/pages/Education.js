import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EducationCard from '../components/EducationCard'
import Image from 'react-bootstrap/Image';
import SJU_Logo from '../images/sjuLogo.png';
import senate_Logo from '../images/senateLogo.png';
import soccer_Logo from '../images/sjuSoccerLogo.png';
import uai_Logo from '../images/uaiLogo.png'
import ContentCard from '../components/common/ContentCard'
import { Break } from '../components/common/CustomBreak';


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
        <Break />
        <Row>
          <Col>
            <ContentCard header="Sustainability Representative" text="sample text"/>
          </Col>
          <Col>
            <Image src={senate_Logo} style={{ width: 300}} rounded></Image>
          </Col>
        </Row>
        <Break />
        <Row>
          <Col>
            <Image src={soccer_Logo} style={{ width: 200}} rounded></Image>
          </Col>
          <Col>
            <ContentCard header='NCAA D3 Soccer' text='Student-Athlete' />
          </Col>
        </Row>
        <Break />
        <Row>
          <Col>
            <ContentCard header="Study Abroad" text='Fall 2018' />
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
