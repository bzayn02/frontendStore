import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { setRemoveItem, setUpdateQuantity } from './cartSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.displayCartInfo);

  const updateQuantity = (_id, finalQty) => {
    dispatch(setUpdateQuantity({ _id, orderQty: finalQty }));
    if (finalQty === 0) {
      dispatch(setRemoveItem({ _id }));
    }
  };

  const removeFromCart = (_id) => {
    dispatch(setRemoveItem({ _id }));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.orderQty, 0);
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Your Shopping Cart
        </h2>
        {cart?.length === 0 ? (
          <p className=" h-96 w-full flex items-center justify-center text-2xl">
            Your cart is empty.{' '}
            <span className=" fs-3 ml-4">
              <Link to="/">Start Shopping Now!</Link>
            </span>
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="md:col-span-2">
                <ul>
                  {cart.map((item, i) => (
                    <li key={i} className="mb-4 border-b border-gray-300">
                      <div className="flex justify-between items-center">
                        <div className="d-flex gap-2">
                          {' '}
                          <img
                            src={
                              process.env.REACT_APP_ADMIN_ROOTAPI +
                              item.thumbnail?.substring(6)
                            }
                            className=" w-32 rounded-xl"
                            alt=""
                          />
                          <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-gray-500">${item.price} each</p>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center">
                            <button
                              onClick={() =>
                                updateQuantity(item._id, item.orderQty - +1)
                              }
                              className=" h-8 w-8 bg-slate-300 border-1 rounded border-[#0275d8] text-gray-600 hover:text-white hover:bg-[#0275d8]"
                            >
                              -
                            </button>
                            <span className="mx-3">{item.orderQty}</span>
                            <button
                              onClick={() =>
                                updateQuantity(item._id, +item.orderQty + 1)
                              }
                              className=" h-8 w-8 bg-slate-300 border-1 rounded border-[#0275d8] text-gray-600 hover:text-white hover:bg-[#0275d8]"
                            >
                              +
                            </button>
                          </div>
                          <p className="font-semibold mt-2">
                            ${item.price * item.orderQty}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="text-red-500 hover:text-red-700 mt-2"
                      >
                        Remove Item
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-1">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Cart Summary</h3>
                  <p className="mb-2">
                    Total Items:
                    {cart.reduce((total, item) => total + +item.orderQty, 0)}
                  </p>
                  <p className="mb-2">Total Price: ${calculateTotalPrice()}</p>
                  {user?._id ? (
                    <Link to="/checkout" className="nav-link">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full mt-4">
                        Proceed to Checkout
                      </button>
                    </Link>
                  ) : (
                    <Link to="/sign-in" className="nav-link">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full mt-4">
                        Login to Checkout
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
