import React from 'react';
import Card from 'react-bootstrap/Card';
import Resume from '../images/ben_west_resume.pdf';
import Button from 'react-bootstrap/Button';

class About extends React.Component {
    render() {
      return (
        <>
          <Card border="darker" bg="primary" fluid style={{ width: '35rem' }}>
            <Card.Header><b>About Me</b></Card.Header>
            <Card.Body>
              <Card.Text text="dark">
                <p>I'm a developer and communicator. My background consists of a traditional Computer Science Degree + 1.5 years experience as full-stack developer. Now, I'm hoping to transition to front-end development.</p>
                <a href={Resume} alt="image" target="_blank" rel="noreferrer">
                  <div className="mb-2">
                    <Button variant="secondary" size="lg">
                      Check out my Resume
                    </Button>{' '}
                  </div>
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </>
      );
    }
  }

  export default About;