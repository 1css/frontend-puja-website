import "../MobileCSS/Home2.css";
import { Col, Row, Card } from "react-bootstrap";
import "../CSS/Hometwo/Tades.css";
import React from "react";
import { tades } from "../Datas/Data2";
import { Link } from "react-router-dom";

function Tades() {
  const limitedTades = tades.slice(0, 4); // Limit to first 4 items

  return (
    <div>
      <section className="tades-main-section">
        <div className="tades-title">
          <h3 className="tades-heading" style={{ color: "#ff6600" }}>
            All Tades
          </h3>
          <img
            src="assetstwo/backgroundimages/titleunderline-removebg.png"
            alt="not found"
            width={180}
          />
        </div>

        <div className="tades-back-main">
          <Row>
            {limitedTades.map((category) => (
              <Col
                key={category.id}
                lg={3} // 4 cards in a row for large screens
                md={4} // 3 cards in a row for medium screens
                sm={6} // 2 cards in a row for small screens
                xs={12} // 1 card in a row for extra small screens
                className="tades-card-wrapper"
              >
                <Card className="tades-card">
                  <div className="tades-card-image-wrapper">
                    <Card.Img
                      variant="top"
                      src={category.image}
                      alt={category.altText}
                      className="tades-card-img"
                    />
                  </div>
                  <Card.Body className="tades-card-body">
                    <Link
                      to="/objectsofpuja"
                      style={{ textDecoration: "none" }}
                    >
                      <Card.Title className="tades-card-title">
                        {category.title}
                      </Card.Title>
                    </Link>
                    <Card.Text className="tades-card-price">
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

export default Tades;
