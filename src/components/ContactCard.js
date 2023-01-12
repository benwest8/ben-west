import React from 'react';
import Card from 'react-bootstrap/Card';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

class ContactCard extends React.Component {
    render() {
      return (
        <>
          <Card border="dark" bg="dark" fluid style={{ width: '20rem' }}>
            <Card.Header><b>Get In Touch</b></Card.Header>
            <Card.Body>
              <Card.Text text="dark">
                <p><PhoneIphoneIcon />(970) 817-0519</p>
                <p><EmailIcon /> benjwest8@gmail.com</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </>
      );
    }
  }

  export default ContactCard;