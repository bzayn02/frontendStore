import React, { useEffect, useState } from 'react';
import { Alert, Container, Spinner } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
// import { postVerifyNewAdminInfo } from '../../helper/axios';
import { toast } from 'react-toastify';
import Layout from '../../components/Layout/Layout';
import { postVerifyNewUserInfo } from '../../helper/axios';

const UserVerification = () => {
  const navigate = useNavigate();
  const [queryStrings] = useSearchParams();
  const code = queryStrings.get('code');
  const email = queryStrings.get('email');

  const [showSpinner, setShowSpinner] = useState(true);
  const [response, setResponse] = useState({});

  //   const callAPI = useRef(true);

  //1. Call api to verify from the server
  //2. Based on response, display the response and redirect to login page.

  useEffect(() => {
    // callAPI &&
    postVerifyNewUserInfo({ code, email }).then((response) => {
      setResponse(response);
      setShowSpinner(false);
      toast[response.status](response.message);
      if (response?.status === 'success') {
        navigate('/sign-in');
      }
    });
    // callAPI.current = false;
  }, [code, email, navigate]);

  return (
    <Layout>
      <main className="main mt-5">
        <Container>
          {showSpinner ? (
            <div className="mt-5 text-center">
              <Spinner animation="border" variant="" />
              <br />
              Please wait while account is being verified.
            </div>
          ) : (
            <Alert
              variant={response.status === 'success' ? 'success' : 'danger'}
            >
              {response.message}
            </Alert>
          )}
        </Container>
      </main>
    </Layout>
  );
};

export default UserVerification;
