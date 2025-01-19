import "../../CSS/Hometwo/TempleSpecificPuja.css";
import "../../MobileCSS/Home2.css";
import { Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import { speicificgodstemple } from "../../Datas/Data2";

function TempleSpecificPuja() {
  const limitedGodsTemple = speicificgodstemple.slice(0, 4); // Limit to 4 items

  return (
    <div>
      <section className="temple-specific-puja-main-section">
        <div className="puja-category-title">
          <h3 className="puja-category-heading" style={{ color: "#ff6600" }}>
            Temple Specific
          </h3>
          <img
            src="assetstwo/backgroundimages/titleunderline-removebg.png"
            alt="not found"
            width={230}
          />
        </div>

        <div className="puja-category-back-main">
          <Row>
            {limitedGodsTemple.map((category) => (
              <Col
                key={category.id}
                lg={3} // 4 cards in a row for large screens
                md={4} // 3 cards in a row for medium screens
                sm={6} // 2 cards in a row for small screens
                xs={12} // 1 card in a row for extra small screens
                className="puja-category-card-wrapper"
              >
                <Card className="puja-category-card">
                  <div className="puja-category-card-image-wrapper">
                    <Card.Img
                      variant="top"
                      src={category.imageSrc}
                      alt={category.altText}
                      className="puja-category-card-img"
                    />
                  </div>
                  <Card.Body className="puja-category-card-body">
                   
                      <Card.Title className="puja-category-card-title">
                        {category.title}
                      </Card.Title>
                  
                    <Card.Text className="puja-category-card-price">
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

export default TempleSpecificPuja;
