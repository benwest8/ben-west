import React from 'react';
import Card from 'react-bootstrap/Card';

class ContactCard extends React.Component {
    render() {
      return (
        <>
          <Card border="dark" bg="dark" fluid style={{ width: '18rem' }}>
            <Card.Header><b>Contact Me</b></Card.Header>
            <Card.Body>
              <Card.Text text="dark" >
                <p>(970) 817-0519</p>
                <p>benjwest8@gmail.com</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </>
      );
    }
  }

  export default ContactCard;