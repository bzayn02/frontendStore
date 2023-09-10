import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook, BsSnapchat } from 'react-icons/bs';
import { FaSnapchatGhost, FaTiktok } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { categories } = useSelector((state) => state.categoryInfo);
  const currentDate = new Date();
  const thisYear = currentDate.getFullYear();
  return (
    <div className="text-center flex items-center justify-center bg-gray-600 text-white">
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold  sm:text-3xl">
            Want us to email you with our latest products?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email">
                {' '}
                Email{' '}
              </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 text-gray-900 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />

              <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center lg:text-left lg:text-lg">
              Unleash Your Style: Elevate Your Wardrobe with Our Latest
              Collection! Explore, Shop, and Slay with BN Store
              <span> #FashionForward #ShopTillYouDrop #StyleGoals</span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium text-white text-xl">
                {' '}
                Categories{' '}
              </strong>

              <ul className="mt-6 space-y-1 list-none">
                {categories.map((category, i) => (
                  <li key={i}>
                    <Link className="nav-link transition" to="/">
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <strong className="font-medium text-white text-xl">
                {' '}
                About{' '}
              </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <Link className=" nav-link transition" to="/">
                    History
                  </Link>
                </li>

                <li>
                  <Link className=" nav-link transition" to="/">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-white text-xl">
                {' '}
                Support{' '}
              </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <Link className=" nav-link transition" to="/">
                    FAQs
                  </Link>
                </li>

                <li>
                  <Link className=" nav-link transition" to="/">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className=" flex justify-center items-center gap-2">
          <li className="">
            <a
              className=" no-underline flex justify-between items-center w-full text-gray-300"
              href="https://www.facebook.com"
            >
              <BsFacebook size={30} />
            </a>
          </li>
          <li className="">
            <a
              className="   no-underline flex justify-between items-center w-full  text-gray-300"
              href="https://www.instagram.com"
            >
              <AiFillInstagram size={30} />
            </a>
          </li>
          <li className="">
            <a
              className="  no-underline  flex justify-between items-center w-full text-gray-300"
              href="https://www.tiktok.com"
            >
              <FaTiktok size={30} />
            </a>
          </li>
          <li className="">
            <a
              className="  no-underline  flex justify-between items-center w-full text-gray-300"
              href="https://www.snapchat.com"
            >
              <FaSnapchatGhost size={30} />
            </a>
          </li>
        </ul>

        <div className="mt-16 border-t border-gray-100 pt-8">
          <p className="text-center text-xs/relaxed text-gray-50">
            © BN Store {thisYear}. All rights reserved.
            <br />
            Created with React and Node.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
