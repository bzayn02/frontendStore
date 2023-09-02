import React from 'react';
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillCartFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';

const NavigationBar = () => {
  const { categories } = useSelector((state) => state.categoryInfo);
  const { products } = useSelector((state) => state.productInfo);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className=" bg-slate-800"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/#" className="">
          BN Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              {categories.map((category, _id) => (
                <NavDropdown.Item key={_id} href="/:_id">
                  {category.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              {products.map((product, _id) => (
                <NavDropdown.Item key={_id} href="/">
                  {product.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Nav>
            <div className="h-9 flex items-center">
              <Form.Control placeholder="Search products" />
            </div>

            <Nav.Link href="/cart">
              <BsFillCartFill className="text-lg" />
            </Nav.Link>
            <Nav.Link href="/user">
              <FaUserAlt className="text-lg" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
