import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const InfoCard = (props) => {
  const person = props.person;
  const [open, setOpen] = useState(false);
  console.log(person);
  let address = person.address;
  address = `${address.street} ${address.suite} ${address.zipcode}`
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {person.name}
      </Button>
      <Collapse in={open}>
        <Card className="bg-info" style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>Company: {person.company.name}</Card.Title>
            <Container fluid>
              <Col className="d-flex flex-column align-items-center">
                <Row>{person.email}</Row>
                <Row>{person.phone}</Row>
                <Row>
                  <Button
                    variant="link"
                    style={{ outline: 'none', boxShadow: 'none' }}
                  >
                    {person.website}
                  </Button>
                </Row>
                <Row>{address}</Row>
              </Col>
            </Container>
          </Card.Body>
        </Card>
      </Collapse>
    </>
  );
};

export default InfoCard;
