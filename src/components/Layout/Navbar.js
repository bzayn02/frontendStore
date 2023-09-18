import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFacebook, BsFillCartFill, BsSnapchat } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { FaSignOutAlt, FaTiktok, FaUserCircle } from 'react-icons/fa';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction } from '../../pages/products/productAction';
import { setDisplayProducts } from '../../pages/products/displayProductSlice';
import { Link, useNavigate } from 'react-router-dom';
import { signoutUser } from '../../helper/axios';
import { setUser } from '../../pages/userAction/userSlice';

const NavigationBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categoryInfo);
  const { products } = useSelector((state) => state.productInfo);
  const { cart } = useSelector((state) => state.displayCartInfo);
  const { user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setDisplayProducts(products));
  }, [dispatch, products]);
  const handleOnLogout = () => {
    signoutUser(user._id);

    localStorage.removeItem('refreshJWT');
    sessionStorage.removeItem('accessJWT');
    dispatch(setUser({}));
    navigate('/');
  };

  const handleOnSearch = (e) => {
    dispatch(setDisplayProducts(products));
    const { value } = e.target;
    const filteredProducts = products.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(setDisplayProducts(filteredProducts));
  };
  return (
    <div>
      {' '}
      <div className=" w-screen text-center mt-14 font-bold italic bg-gray-900 text-gray-400">
        Best offer till 30/09/2023
      </div>
      <Navbar
        collapseOnSelect
        expand="md"
        className=" bg-slate-300 md:h-14 fixed-top"
        variant="light"
      >
        <Container>
          <Link to="/" className="nav-link">
            <div className="text-2xl fw-bolder text-gray-800 md:mr-5">
              BN Store
            </div>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="me-auto">
              <NavDropdown
                title="Categories"
                className="text-gray-800 text-md text-center border-1 border-[#0275d8] rounded"
                id="collasible-nav-dropdown"
              >
                {categories.map((category, i) => (
                  <Link
                    key={i}
                    to={`/categories/${category.slug}/${category._id}`} // Use the "to" attribute
                    className="dropdown-item"

                    // You can add Bootstrap class if needed
                  >
                    {category.title}
                  </Link>
                ))}
              </NavDropdown>
            </Nav>
            <Nav>
              <div className="w-100% lg:w-64 p-2">
                <Form.Control
                  className="h-10"
                  placeholder="Search products....."
                  onChange={handleOnSearch}
                />
              </div>

              <Link className="nav-link" to="/cart">
                <div className="relative">
                  <div className="text-2xl p-2 flex items-center justify-center">
                    <BsFillCartFill />
                  </div>
                  {cart.reduce((total, item) => total + +item.orderQty, 0) >
                  0 ? (
                    <div className="absolute top-0 h-5 w-5 right-0 bg-red-500 flex justify-center items-center text-white rounded-full text-sm">
                      {cart.reduce((total, item) => total + +item.orderQty, 0)}
                    </div>
                  ) : null}
                </div>
              </Link>
              {user?._id ? (
                <>
                  <div className="text-2xl p-2 flex items-center justify-center">
                    {' '}
                    <Link to="/profile" className="nav-link">
                      <FaUserCircle />
                    </Link>
                  </div>

                  <div className="text-2xl p-2 flex items-center justify-center">
                    {' '}
                    <Link to="/" className="nav-link" onClick={handleOnLogout}>
                      <FaSignOutAlt />
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  {' '}
                  <Link className="nav-link" to="/sign-in">
                    <div className="text-center p-2 border-1 border-[#0275d8] rounded hover:bg-[#0275d8] hover:text-gray-50">
                      Sign In
                    </div>
                  </Link>
                  <Link className="nav-link" to="/sign-up">
                    <div className="text-center text-gray-50 p-2 border-1 border-[#0275d8] rounded bg-[#0275d8]">
                      Sign Up
                    </div>
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-10 ">
        <ul className="">
          <li className="w-[160px] h-[60px] p-3 flex justify-between items-center ml-[-130px] hover:ml-[-35px] duration-300 bg-[#3b5998] hover:z-10">
            <a
              className=" no-underline flex justify-between items-center w-full text-gray-300"
              href="https://www.facebook.com"
            >
              Facebook <BsFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] p-3 flex justify-between items-center ml-[-130px] hover:ml-[-35px] duration-300 bg-[#833AB4]">
            <a
              className="   no-underline flex justify-between items-center w-full  text-gray-300"
              href="https://www.instagram.com"
            >
              Instagram <AiFillInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] p-3 flex justify-between items-center ml-[-130px] hover:ml-[-35px] duration-300 bg-[#ba2a58]">
            <a
              className="  no-underline  flex justify-between items-center w-full text-gray-300"
              href="https://www.tiktok.com"
            >
              Tiktok <FaTiktok size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] p-3 flex justify-between items-center ml-[-130px] hover:ml-[-35px] duration-300 bg-[#FFFC00]">
            <a
              className="  no-underline  flex justify-between items-center w-full text-gray-900"
              href="https://www.snapchat.com"
            >
              SnapChat <BsSnapchat size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
