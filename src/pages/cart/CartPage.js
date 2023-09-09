import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import car5 from '../../assets/car5.avif';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', price: 10, quantity: 2 },
    { id: 2, name: 'Item 2', price: 15, quantity: 1 },
  ]);

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Your Shopping Cart
        </h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="md:col-span-2">
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id} className="mb-4 border-b border-gray-300">
                      <div className="flex justify-between items-center">
                        <div className="d-flex gap-2">
                          {' '}
                          <img src={car5} className="w-48 rounded-xl" alt="" />
                          <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-gray-500">${item.price} each</p>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="text-gray-600 hover:text-gray-900"
                            >
                              -
                            </button>
                            <span className="mx-2">{item.quantity}</span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="text-gray-600 hover:text-gray-900"
                            >
                              +
                            </button>
                          </div>
                          <p className="font-semibold mt-2">
                            ${item.price * item.quantity}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
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
                    Total Items:{' '}
                    {cartItems.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}
                  </p>
                  <p className="mb-2">Total Price: ${calculateTotalPrice()}</p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full mt-4">
                    Checkout
                  </button>
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
