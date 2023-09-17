import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createNewUserAction } from '../../pages/userAction/userAction';

const initialState = {
  status: 'inactive',
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const [selectedImg, setSelectedImg] = useState(null);
  const [error, setError] = useState('');

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setError('');
    if (name === 'confirmPassword') {
      value !== form.password
        ? setError('Password should match!')
        : setError('');
    }

    if (name === 'password') {
      value.length < 8 && setError('At least 8 characters is required.');
      !/[0-9]/.test(value) && setError('At least one number is required.');
      !/[A-Z]/.test(value) && setError('At least one upper case is required.');
      !/[a-z]/.test(value) && setError('At least one lower case is required.');
    }

    setForm({ ...form, [name]: value });
  };

  const handleOnImageAttached = (e) => {
    const profileImage = e.target.files[0];
    if (profileImage) {
      setSelectedImg(profileImage);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return setError('Password should match!');
    }
    const formData = new FormData();
    // set all form data in FormData
    for (let key in rest) {
      formData.append(key, rest[key]);
    }
    // check if there any new image is being added
    if (selectedImg) {
      formData.append('profileImg', selectedImg);
    }

    dispatch(createNewUserAction(formData));
  };

  return (
    <div>
      <section className=" bg-slate-300 min-h-screen flex items-center justify-center">
        {/* Login Container */}
        <div className="md:p-2 w-9/12 sm:p-1">
          <div className=" md:px-12 md:py-12  ">
            <h2 className="font-bold text-3xl text-[#1f424e] text-center">
              Start Shopping with BN Store...
            </h2>
            <p className="text-lg mt-4 text-[#1f424e] text-center">
              If you're a new here, please sign up.
            </p>
            <Form
              onSubmit={handleOnSubmit}
              className="flex flex-col gap-3 p-5 rounded-lg shadow-lg"
            >
              <span className="text-[#1f424e]  -mb-3 text-2xl">
                User Information
              </span>
              <div className="grid md:grid-cols-2">
                <Form.Group className="mb-3  mr-3" controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    onChange={handleOnChange}
                    type="text"
                    name="fname"
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
                    name="lname"
                    placeholder="Last Name"
                    required
                  />
                </Form.Group>
              </div>

              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  type="email"
                  name="email"
                  className="p-2 rounded-xl border"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>
              <div className="grid md:grid-cols-2">
                <Form.Group className="mb-3  mr-3">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    onChange={handleOnChange}
                    className="p-2 rounded-xl border"
                    type="date"
                    name="dob"
                    placeholder="DOB"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    onChange={handleOnChange}
                    className="p-2 rounded-xl border"
                    type="text"
                    name="phone"
                    placeholder="Phone"
                  />
                </Form.Group>
              </div>
              <div className="grid md:grid-cols-2">
                <div className="  sm:mr-0 md:mr-3 md:mb-0 sm:mb-3 ">
                  {' '}
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      onChange={handleOnChange}
                      className=" w-full p-2 rounded-xl border "
                      type="password"
                      name="password"
                      placeholder="********"
                      required
                    />
                  </Form.Group>
                  {/* <AiFillEye className="absolute right-3 top-1/2 text-xl text-gray-600" /> */}
                </div>
                <div className="  sm:mr-0 md:mr-3 md:mb-0 sm:mb-3 ">
                  {' '}
                  <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      onChange={handleOnChange}
                      className=" w-full p-2 rounded-xl border "
                      type="password"
                      name="confirmPassword"
                      placeholder="********"
                      required
                    />
                  </Form.Group>
                  {/* <AiFillEye className="absolute right-3  top-1/3 text-xl text-gray-600" /> */}
                </div>
              </div>
              <div className=" text-danger fw-bold d-inline-block">{error}</div>
              <span className="text-[#1f424e] text-2xl -mb-3">Address</span>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Street Name</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  type="text"
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
                    placeholder="Country"
                    required
                  />
                </Form.Group>
              </div>
              <span className="text-[#1f424e] text-lg -mb-3">
                Upload Profile Picture
              </span>
              <Form.Group>
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control
                  onChange={handleOnImageAttached}
                  type="file"
                  name="profileImg"
                  // onChange={handleFileChange}

                  className=" p-2 rounded-xl border"
                />
              </Form.Group>

              <button
                type="submit"
                className="hover:bg-[#1f424e] hover:text-gray-50 rounded-xl  py-2 text-[#1f424e] border-1 border-[#1f424e] bg-gray-300"
              >
                Sign Up
              </button>
            </Form>

            <div className="mt-3 text-lg flex justify-center items-center gap-3">
              <div className="py-2 text-[#1f424e]">
                If you already have an account.
              </div>{' '}
              <Link to="/sign-in">
                <button className="hover:bg-[#1f424e] hover:text-gray-50 rounded-xl  px-2 py-0.5 text-[#1f424e] border-1 border-[#1f424e] bg-gray-300">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUpForm;
