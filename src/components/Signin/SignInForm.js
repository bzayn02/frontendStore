import React, { useEffect, useState } from 'react';
import car10 from '../../assets/car10.avif';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
  autoLoginAction,
  signInUserAction,
} from '../../pages/userAction/userAction';
import { Form } from 'react-bootstrap';

const initialState = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const location = useLocation();
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userInfo);

  const pathTo = location.state?.from?.location?.pathname || '/';

  useEffect(() => {
    user?._id && navigate(pathTo);
    dispatch(autoLoginAction());
  }, [user, navigate, dispatch, pathTo]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(signInUserAction(form));
    navigate('/');
  };

  return (
    <div>
      <section className=" bg-slate-400 min-h-screen flex items-center justify-center">
        {/* Login Container */}
        <div className="bg-slate-300 flex rounded-2xl shadow-lg max-w-5xl p-5">
          <div className="md:w-1/2 px-12 py-12">
            <h1 className="text-center text-[#1f424e] font-semibold">
              BN Store
            </h1>
            <h2 className="font-bold text-3xl text-[#1f424e] text-center">
              Login
            </h2>
            <p className="text-md mt-4 text-[#1f424e] text-center">
              If you're already a member, please login.
            </p>
            <Form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="email"
                name="email"
                onChange={handleOnChange}
                placeholder="sam@mail.com"
                required
              />
              <div className="relative">
                {' '}
                <input
                  className=" w-full p-2 rounded-xl border "
                  type="password"
                  name="password"
                  onChange={handleOnChange}
                  placeholder="***********"
                  required
                />
                <AiFillEye className="absolute right-3 top-1/4 text-2xl text-gray-600" />
              </div>

              <button
                type="submit"
                className="hover:bg-[#1f424e] hover:text-gray-50 rounded-xl  py-2 text-[#1f424e] border-1 border-[#1f424e] bg-gray-300"
              >
                Login
              </button>
            </Form>

            <Link to="/" className="nav-link">
              <p className="mt-5 text-md border-b py-4 text-center border-[#1f424e] text-[#1f424e]">
                Forgot your password?
              </p>
            </Link>

            <div className="mt-3 text-sm flex justify-center items-center gap-3">
              <div className="py-2 text-[#1f424e]">
                If you don't have an account...
              </div>{' '}
              <Link to="/sign-up">
                {' '}
                <button className="hover:bg-[#1f424e] hover:text-gray-50 rounded-xl  px-2 py-0.5 text-[#1f424e] border-1 border-[#1f424e] bg-gray-300">
                  Register
                </button>
              </Link>
            </div>
          </div>

          <div className="md:block hidden  w-1/2 ">
            <img src={car10} className="rounded-2xl" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignInForm;
