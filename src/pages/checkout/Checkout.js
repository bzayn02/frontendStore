import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPaymentOptionsAction } from './paymentAction';
import BillPersonalInfo from '../../components/BillingInfo/BillingPersonalInfo';
import ShippingPersonalInfo from '../../components/BillingInfo/ShippingPersonalInfo';
import { Form } from 'react-bootstrap';

const Checkout = () => {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState({});
  const { cart } = useSelector((state) => state.displayCartInfo);
  const { paymentOptions } = useSelector((state) => state.paymentOptionsInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPaymentOptionsAction());
  }, [dispatch]);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.orderQty, 0);
  };

  const handlePaymentOptionSelect = (selectedPaymentOption) => {
    setSelectedPaymentOption(selectedPaymentOption);
    console.log(selectedPaymentOption);
  };

  const [showForm, setShowForm] = useState('shippingInfo');
  const personalInfoForms = {
    shippingInfo: <ShippingPersonalInfo setShowForm={setShowForm} />,
    billingInfo: <BillPersonalInfo setShowForm={setShowForm} />,
  };

  const handleOnSubmit = (e) => {};
  const handleOnChange = (e) => {};

  return (
    <div>
      <Layout>
        <div class="flex justify-center items-center p-3 text-xl border-b">
          Checkout
        </div>
        <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
          <div class="px-4 pt-8">
            <div class="mt-2 space-y-3 rounded-lg border bg-white px-3 py-3 sm:px-6">
              <p className="flex justify-between w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white text-center">
                <span>Order Summary</span>
              </p>
              <p class=" italic underline">Check and confirm your items.</p>
              {cart.map((item, i) => (
                <div
                  key={i}
                  class="flex flex-col rounded-lg bg-white sm:flex-row"
                >
                  <img
                    class="m-2 h-24 w-28 rounded-md border object-cover object-center"
                    src={
                      process.env.REACT_APP_ADMIN_ROOTAPI +
                      item.thumbnail?.substring(6)
                    }
                    alt=""
                  />
                  <div class="flex w-full flex-col px-4 py-4">
                    <span class="font-semibold">{item.name.toUpperCase()}</span>
                    <p className="font-semibold">
                      Price: {item.orderQty} X ${item.price}
                    </p>
                  </div>
                </div>
              ))}
              <div className="text-lg font-bold">
                Total Price: ${calculateTotalPrice()}
              </div>
            </div>

            {/* Form here */}
            <div className="mt-4">{personalInfoForms[showForm]}</div>
          </div>
          <div class="mt-4 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p className="flex justify-between w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white text-center">
              <span>Payment Options</span>
            </p>
            <div className="my-1 italic underline">
              Please select the payment option to proceed.
            </div>{' '}
            {paymentOptions.map((paymentOption) => (
              <li key={paymentOption._id} className=" list-none">
                <label className="flex items-center py-1">
                  <input
                    type="radio"
                    name="paymentMethod"
                    className=" w-5 h-5 mr-3"
                    value={paymentOption._id}
                    onChange={() => handlePaymentOptionSelect(paymentOption)}
                  />
                  <span className=" font-semibold text-xl">
                    {' '}
                    {paymentOption.title}
                  </span>
                </label>
              </li>
            ))}
            <span className=" font-light italic">
              {' '}
              Instruction:{' '}
              {selectedPaymentOption !== undefined
                ? selectedPaymentOption?.description
                : ''}
            </span>
            <p className=" mt-4 flex justify-between w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white text-center">
              <span>Payment by Card</span>
            </p>
            <div className="my-1 italic underline">
              Please complete your order by providing your payment details.
            </div>
            <Form onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Label>Card holder name</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  className="p-2 rounded-xl border mb-3"
                  type="text"
                  name="name"
                  placeholder="Card Holder Name"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Card number</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  className="p-2 rounded-xl border mb-3"
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  required
                />
              </Form.Group>
              <div className="grid md:grid-cols-2">
                <Form.Group className="mb-3  mr-3" controlId="formBasicEmail">
                  <Form.Label>Expiry Date</Form.Label>
                  <Form.Control
                    onChange={handleOnChange}
                    type="date"
                    name="expiryDate"
                    className="p-2 rounded-xl border"
                    placeholder="Expiry Date"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Security Code</Form.Label>
                  <Form.Control
                    onChange={handleOnChange}
                    className="p-2 rounded-xl border"
                    type="text"
                    name="securityCode"
                    placeholder="CVC"
                    required
                  />
                </Form.Group>
              </div>
            </Form>
            <div class="mt-6 border-t border-b py-2">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Subtotal</p>
                <p class="font-semibold text-gray-900">$399.00</p>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Shipping</p>
                <p class="font-semibold text-gray-900">$8.00</p>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Total</p>
              <p class="text-2xl font-semibold text-gray-900">$408.00</p>
            </div>
            <button class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
              Place Order
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Checkout;
