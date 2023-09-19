import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../components/Layout/Layout';

const Profile = () => {
  const { user } = useSelector((state) => state.userInfo);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gray-200 text-center py-4">
            <img
              src={
                process.env.REACT_APP_ROOTSERVER + user?.profileImg?.slice(6)
              }
              alt={`${user.fname} ${user.lname}`}
              className=" w-60 h-60 mx-auto rounded-full object-fit-cover"
            />
          </div>
          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              {user.fname} {user.lname}
            </h2>
            <p className="text-sm text-gray-600">Status: {user.status}</p>
            <p className="text-sm text-gray-600">Email: {user.email}</p>
            <p className="text-sm text-gray-600">
              Date of Birth: {user.dob || 'N/A'}
            </p>
            <p className="text-sm text-gray-600">Phone: {user.phone}</p>
            <p className="text-sm text-gray-600">
              Address: {user.street}, {user.city}, {user.state}, {user.postCode}
              , {user.country}
            </p>
          </div>
          <div className="px-6 py-2 border-t border-gray-300 text-right">
            <button
              className={`bg-${
                user.isVerified ? 'green' : 'red'
              }-500 hover:bg-${
                user.isVerified ? 'green' : 'red'
              }-600 text-white font-semibold py-2 px-4 rounded`}
            >
              {user.isVerified ? 'Verified' : 'Not Verified'}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
