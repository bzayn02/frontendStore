import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { useParams } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import { getProductBySlugAPI } from '../../helper/axios';
import { setAddToCart } from '../cart/cartSlice';
import { useDispatch } from 'react-redux';

const ProductLanding = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [displayProduct, setDisplayProduct] = useState({});
  const [productImg, setProductImg] = useState('');
  const [newCartData, setNewCartData] = useState([]);
  console.log(newCartData);
  useEffect(() => {
    const getSelectedProduct = async () => {
      const { result } = await getProductBySlugAPI(slug);
      result?.length && setDisplayProduct(result[0]);
    };
    getSelectedProduct();
  }, [slug]);

  useEffect(() => {
    setProductImg(
      process.env.REACT_APP_ADMIN_ROOTAPI +
        displayProduct?.thumbnail?.substring(6)
    );
  }, [displayProduct]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setNewCartData({
      ...displayProduct,
      [name]: value,
    });
  };

  const handleOnAddCart = () => {
    if (newCartData?.orderQty === undefined) {
      window.alert('Select the quantity please!');
    }
    dispatch(setAddToCart(newCartData));

    console.log(newCartData, 'new cart data');
  };

  return (
    <Layout>
      <section className="text-gray-600 body-font overflow-hidden main">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={productImg}
            />

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {displayProduct?.name}
              </h1>

              <p className="leading-relaxed text-black">
                {displayProduct?.description}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3 text-black">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3 text-black">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>

                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>

                  <div className="mx-3">
                    <label className="text-black">Qty:</label>
                    <input
                      onChange={handleOnChange}
                      name="orderQty"
                      placeholder="111"
                      required
                      className="ml-1 rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 w-12"
                      type="number"
                    />
                  </div>
                </div>
              </div>

              <div className="flex">
                <span className="title-font font-semibold text-3xl text-black">
                  ${displayProduct?.price}
                </span>
                <button
                  onClick={handleOnAddCart}
                  className="flex ml-auto bg-slate-300 border-0 py-2 px-6 focus:outline-none hover:bg-[#0275d8] hover:text-white rounded"
                >
                  Add to Cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <AiFillHeart className="hover:text-red-500 text-2xl hover:text-3xl transition-all" />
                </button>
              </div>
              <div className="flex flex-row mx-4">
                {' '}
                {displayProduct?.images?.map((image) => (
                  <div className="mx-3  hover:border-gray-900">
                    <img
                      className="w-40 h-55 pt-4 hover:cursor-pointer rounded-sm transition-all"
                      src={
                        process.env.REACT_APP_ADMIN_ROOTAPI +
                        image?.substring(6)
                      }
                      onClick={() =>
                        setProductImg(
                          process.env.REACT_APP_ADMIN_ROOTAPI +
                            image?.substring(6)
                        )
                      }
                      alt={displayProduct?.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductLanding;
