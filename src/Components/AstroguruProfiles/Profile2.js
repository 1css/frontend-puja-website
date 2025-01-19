import React, { useState } from "react";
import { Row, Col, Container, Button,Modal,Form } from "react-bootstrap";
import "../../CSS/Profiles/Profile.css"

const Profile2 = () => {
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
          <h2 className="profile-name">Dr. Sarah Bennett</h2>
          <p className="profile-description">
            Dr. Sarah Bennett, a PhD in Behavioral Economics, is a certified
            financial consultant with over 30 years of experience in the global
            finance industry. Alongside her illustrious career in banking and
            corporate strategy, she has cultivated a deep interest in
            mindfulness and holistic living. She has helped individuals overcome
            life’s challenges through tailored guidance and workshops focused on
            well-being. Dr. Bennett believes that a balanced mind and unwavering
            faith are key to achieving true fulfillment and peace in life.
          </p>
          <p className="profile-cost">
            <strong>Cost:</strong> ₹50/hour
          </p>
          <p className="profile-cost">
            <strong>Language:</strong> Kannada,English
          </p>
          <Button
            variant="link"
            className="read-more-btn"
            onClick={() => handleShow()}
          >
            Talk to Astrology
          </Button>
        </Col>
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

export default Profile2;
