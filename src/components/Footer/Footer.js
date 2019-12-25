import React from "react";
import { Row, Col } from "react-bootstrap";
import './Footer.scss';

const Footer = () => {
   return (
      <Row className="row-footer">
          <Col className="c-footer d-flex justify-content-center align-items-center">
              <p>Movies App    |   Copyright  © 2019 </p>
          </Col>
      </Row>
   )

};

export default Footer;
