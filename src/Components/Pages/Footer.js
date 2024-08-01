import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai';
// import './Footer.css'; // Import custom CSS file for footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} sm={6} className="footer-col">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={4} sm={6} className="footer-col">
            <h5>Categories</h5>
            <ul className="footer-links">
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Kids</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-col">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#"><AiFillFacebook /></a>
              <a href="#"><AiFillTwitterSquare /></a>
              <a href="#"><AiFillInstagram /></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="footer-text">© 2024 Your E-commerce Website. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
