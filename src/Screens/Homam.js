import "../MobileCSS/Home2.css";
import { Col, Row, Card } from "react-bootstrap";
import "../CSS/Hometwo/Homam.css";
import React from "react";
import { homams } from "../Datas/Data2";
import { Link } from "react-router-dom";

function Homams() {
  const limitedHomams = homams.slice(0, 4); // Limit to first 4 items

  return (
    <div>
      <section className="homam-main-section">
        <div className="homam-title">
          <h3 className="homam-heading">All Homams</h3>
          <img
            src="assetstwo/backgroundimages/titleunderline-removebg.png"
            alt="not found"
            width={150}
          />
        </div>

        <div className="homam-back-main">
          <Row>
            {limitedHomams.map((category) => (
              <Col
                key={category.id}
                lg={3} // 4 cards in a row for large screens
                md={4} // 3 cards in a row for medium screens
                sm={6} // 2 cards in a row for small screens
                xs={12} // 1 card in a row for extra small screens
                className="homam-card-wrapper"
              >
                <Card className="homam-card">
                  <div className="homam-card-image-wrapper">
                    <Card.Img
                      variant="top"
                      src={category.image}
                      alt={category.altText}
                      className="homam-card-img"
                    />
                  </div>
                  <Card.Body className="homam-card-body">
                    <Link
                      to="/objectsofpuja"
                      style={{ textDecoration: "none" }}
                    >
                      <Card.Title className="homam-card-title">
                        {category.name}
                      </Card.Title>
                    </Link>
                    <Card.Text className="homam-card-price">
                      From &#8377; {category.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </div>
  );
}

export default Homams;
