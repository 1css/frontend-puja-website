import "../MobileCSS/Home2.css";
import { Col, Row, Card } from "react-bootstrap";
import "../CSS/Hometwo/Sarpa.css";
import React from "react";
import { SarpaDosha } from "../Datas/Data2";
import { Link } from "react-router-dom";

function Sarpa() {
  const limitedSarpaDosha = SarpaDosha.slice(0, 4); // Limit to first 4 items

  return (
    <div>
      <section className="sarpa-dosha-main-section">
        <div className="sarpa-dosha-title">
          <h3 className="sarpa-dosha-heading">Sarpa Dosha</h3>
          <img
            src="assetstwo/backgroundimages/titleunderline-removebg.png"
            alt="not found"
            width={180}
          />
        </div>

        <div className="sarpa-dosha-back-main">
          <Row >
            {limitedSarpaDosha.map((category) => (
              <Col
                key={category.id}
                lg={3} // 4 cards in a row for large screens
                md={4} // 3 cards in a row for medium screens
                sm={6} // 2 cards in a row for small screens
                xs={12} // 1 card in a row for extra small screens
                className="sarpa-dosha-card-wrapper"
                
              >
                <Card className="sarpa-dosha-card">
                  <div className="sarpa-dosha-card-image-wrapper">
                    <Card.Img
                      variant="top"
                      src={category.image}
                      alt={category.altText}
                      className="sarpa-dosha-card-img"
                    />
                  </div>
                  <Card.Body className="sarpa-dosha-card-body">
                    <Link
                      to="/objectsofpuja"
                      style={{ textDecoration: "none" }}
                    >
                      <Card.Title className="sarpa-dosha-card-title">
                        {category.title}
                      </Card.Title>
                    </Link>
                    <Card.Text className="sarpa-dosha-card-price">
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

export default Sarpa;
