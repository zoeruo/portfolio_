import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import bannerimg from '../asset/img/RedFlagsOut_main.png';

function RedFlagsOut() {
    return (
        <Container>
        <Row>
          <Col xs={12} md={6} className="my-auto">
            <h1 className="display">Red Flags Out</h1>
            <h2 className="shortdesc">A dating app focusing on Red Flags</h2>
          </Col>
          <Col xs={12} md={6} className="py-3">
            <img src={bannerimg} className="img-fluid" alt="Banner img" />
          </Col>
        </Row>
        <Row>
            
        </Row>
      </Container>
    );
}

export default RedFlagsOut;