import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import phoneImage from '../Assets/phoneImage.png';
import website from '../Assets/website.png';
import email from '../Assets/email.png';
import addressImage from '../Assets/address.png';

const InfoCard = (props) => {
  const person = props.person;
  const [open, setOpen] = useState(false);
  let address = person.address;
  address = `${address.street} ${address.suite} ${address.zipcode}`;
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {person.name}
      </Button>
      <div className='p-3'>
        <Collapse in={open}>
          <Card className="bg-info" style={{ width: '100%' }}>
            <Card.Body>
              <Card.Title>Company: {person.company.name}</Card.Title>
              <Container fluid>
                <Col className="d-flex flex-column align-items-center">
                  <Row className="d-flex justify-content-between">
                    <img
                      src={email}
                      style={{ maxWidth: '3rem', maxHeight: '3rem' }}
                      alt="email"
                    />
                    {person.email}
                  </Row>
                  <Row>
                    <img
                      src={phoneImage}
                      style={{ maxWidth: '3rem', maxHeight: '3rem' }}
                      alt="phone"
                    />
                    {person.phone}
                  </Row>
                  <Row>
                    <span>
                      <img
                        src={website}
                        style={{ maxWidth: 'inherit', maxHeight: '1.5rem' }}
                        alt="website"
                      />
                      <Button variant="link">{person.website}</Button>
                    </span>
                  </Row>
                  <Row>
                    <span>
                      <img
                        src={addressImage}
                        style={{ maxWidth: 'inherit', maxHeight: '1.5rem' }}
                        alt="address"
                      />
                      {address}
                    </span>
                  </Row>
                </Col>
              </Container>
            </Card.Body>
          </Card>
        </Collapse>
      </div>
    </>
  );
};

export default InfoCard;
