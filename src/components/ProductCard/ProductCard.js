import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

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
                <div className=" p-2 font-semibold text-teal-600 text-2xl">
                  ${price}
                </div>
              </Col>
              <Col md="6">
                <button className="border-1 border-[#0275d8]  hover:bg-[#0275d8] p-2 w-full rounded-3xl hover:text-gray-100 hover:cursor-pointer">
                  Buy
                </button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ProductCard;
