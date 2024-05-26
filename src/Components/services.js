import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Services () {
    const { t } = useTranslation()
    const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

    const cardHoverStyle = (index) => ({
      boxShadow: hoveredCardIndex === index ? '10px 10px 30px rgba(0, 0, 0, 0.2)' : 'none',
      transition: 'all 0.3s ease',
      transform: hoveredCardIndex === index ? 'scale(1.1)' : 'scale(1)'
    });

    const services = [
      { img: 'images/service1.png', title: t('services1'), text: t('services1_price') },
      { img: 'images/service2.png', title: t('services2'), text: t('services2_price') },
      { img: 'images/service3.png', title: t('services3'), text: t('services3_price') },
    ];

    return(
        <>
       <Row xs={1} s={1} md={2} lg={3} className="g-4 mb-5 mx-5">
      {services.map((service, index) => (
        <Col key={index}>
          <Card
            className="h-100"
            style={cardHoverStyle(index)}
            onMouseEnter={() => setHoveredCardIndex(index)}
            onMouseLeave={() => setHoveredCardIndex(null)}
          >
            <Card.Img variant="top" src={service.img} />
            <Card.Body className="custom-text-color">
              <Card.Title >{service.title}</Card.Title>
              <Card.Text>{service.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        </>
    )

}


export default Services;