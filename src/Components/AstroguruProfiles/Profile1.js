import React, { useState } from "react";
import { Row, Col, Container, Button, Modal, Form } from "react-bootstrap";

import "../../CSS/Profiles/Profile.css"

const Profile = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <Container className="profile-container">
      <Row className="align-items-center">
        <Col xs={12} md={4} className="profile-image-col">
          <img
            src="assets/user-profile-icon-free-vector.jpg"
            alt="Profile"
            className="profile-image"
          />
        </Col>
        <Col xs={12} md={8} className="profile-text-col">
          <h2 className="profile-name">Mr. John Doe</h2>
          <p className="profile-description">
            John Doe is a business strategist with over 20 years of professional
            experience spanning marketing, sales, and operations. He has gained
            recognition for his innovative problem-solving approach and
            strategic insights in competitive markets. John has also been an
            avid traveler and cultural enthusiast, visiting over 50 countries.
            He is a dedicated mentor, having guided over 3000 young
            professionals across various industries.
          </p>
          <p className="profile-cost">
            <strong>Cost:</strong> ₹30/hour
          </p>
          <p className="profile-cost">
            <strong>Language:</strong> Kannada
          </p>
          <Button
            variant="link"
            className="read-more-btn"
            onClick={() => handleShow()}
          >
            Talk to Astrology
          </Button>
        </Col>
        {/* Modal for displaying Note details */}
        <Modal show={showModal} onHide={handleClose} size="md">
          <Modal.Header closeButton>
            <Modal.Title>Contact Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {/* Name */}
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              {/* Email */}
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              {/* Phone Number */}
              <Form.Group controlId="formPhone" className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </Form.Group>

              <Row>
                <Col>
                  {/* Date */}
                  <Form.Group controlId="formDate" className="mb-3">
                    <Form.Label>Date(when)</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Col>
                <Col>
                  {/* Time */}
                  <Form.Group controlId="formTime" className="mb-3">
                    <Form.Label>Time for Talk</Form.Label>
                    <Form.Control type="time" />
                  </Form.Group>
                </Col>
              </Row>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  );
};

export default Profile;
