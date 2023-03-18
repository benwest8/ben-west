import React from "react";
import Card from 'react-bootstrap/Card';

export default function ContactCard (props) {

    return (
        <>
            <Card border="light" bg="dark" fluid >
              <Card.Header><strong>{props.header}</strong></Card.Header>
              <Card.Body>
                <Card.Text text="dark" text-align="left">
                  <p>{ props.text }</p>
                </Card.Text>
              </Card.Body>
            </Card>
        </>
    )
} 