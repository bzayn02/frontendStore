import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const ProductCard = ({ _id, thumbnail, name, price }) => {
  return (
    <div>
      {' '}
      <div className="flex flex-wrap">
        <Card style={{ width: '14rem' }} className="m-3 shadow-lg">
          <Card.Img
            src={process.env.REACT_APP_ADMIN_ROOTAPI + thumbnail.substring(6)}
            alt=""
            height="50px"
            width="40px"
          />
          <Card.Body>
            <Card.Title className="text-center">{name}</Card.Title>
            <span className="text-sm p-3">Shipped in 3-4 days</span>
            <Row className="">
              {' '}
              <Col md="6">
                <Button className="w-full d">Cart</Button>
              </Col>
              <Col md="6">
                <Button className="w-full">Buy</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ProductCard;
