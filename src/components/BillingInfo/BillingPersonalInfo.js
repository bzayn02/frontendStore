import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ShippingPersonalInfo = ({ setShowForm }) => {
  const { user } = useSelector((state) => state.userInfo);

  const [shipUserInfo, setShipUserInfo] = useState({});

  useEffect(() => {
    setShipUserInfo(user);
  }, [user]);
  const handleOnChange = () => {};

  const handleOnSubmit = () => {};
  return (
    <div>
      <Form
        onSubmit={handleOnSubmit}
        className="flex flex-col gap-3 rounded-lg border p-3 mb-4"
      >
        <p className="flex justify-between w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white text-center">
          <span>Billing Information</span> <span>2 of 2</span>
        </p>
        <span className="italic text-gray-700 underline">
          Please fill up your billing information.
        </span>
        <div className="grid md:grid-cols-2">
          <Form.Group className="mb-3  mr-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              name="fname"
              value={shipUserInfo.fname}
              className="p-2 rounded-xl border"
              placeholder="First Name"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              className="p-2 rounded-xl border"
              type="text"
              value={shipUserInfo.lname}
              name="lname"
              placeholder="Last Name"
              required
            />
          </Form.Group>
        </div>
        <Form.Group className="" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            type="email"
            name="email"
            value={shipUserInfo.email}
            className="p-2 rounded-xl border"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            className="p-2 rounded-xl border"
            type="text"
            name="phone"
            value={shipUserInfo.phone}
            placeholder="Phone"
          />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Street Name</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            type="text"
            value={shipUserInfo.street}
            name="street"
            className="p-2 rounded-xl border"
            placeholder="Street Name"
            required
          />
        </Form.Group>
        <div className="grid md:grid-cols-2">
          <Form.Group className="mb-3  mr-3" controlId="formBasicEmail">
            <Form.Label>City</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              name="city"
              value={shipUserInfo.city}
              className="p-2 rounded-xl border"
              placeholder="City"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>State</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              className="p-2 rounded-xl border"
              type="text"
              name="state"
              value={shipUserInfo.state}
              placeholder="State"
              required
            />
          </Form.Group>
        </div>
        <div className="grid md:grid-cols-2">
          <Form.Group className="mb-3  mr-3" controlId="formBasicEmail">
            <Form.Label>Post Code</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              name="postCode"
              value={shipUserInfo.postCode}
              className="p-2 rounded-xl border"
              placeholder="Post Code"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Country</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              className="p-2 rounded-xl border"
              type="text"
              name="country"
              value={shipUserInfo.country}
              placeholder="Country"
              required
            />
          </Form.Group>
        </div>
        <div className="grid md:grid-cols-2">
          <button
            onClick={() => {
              setShowForm('shippingInfo');
            }}
            className="hover:bg-[#1f424e] mr-3 hover:text-gray-50 rounded-xl  py-2 text-[#1f424e] border-1 border-[#1f424e] bg-gray-300"
          >
            Back to Shipping Info
          </button>
          <button
            type="submit"
            className="hover:bg-[#1f424e] hover:text-gray-50 rounded-xl  py-2 text-[#1f424e] border-1 border-[#1f424e] bg-gray-300"
          >
            Add Billing Info
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ShippingPersonalInfo;
