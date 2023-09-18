import { toast } from 'react-toastify';

import {
  getNewAccessJWT,
  getUserInfo,
  postNewUser,
  signInUser,
} from '../../helper/axios';
import { setUser } from './userSlice';

export const createNewUserAction = (obj) => async (dispatch) => {
  const pendingResponse = postNewUser(obj);
  toast.promise(pendingResponse, {
    pending: 'Please wait...',
  });
  const { status, message } = await pendingResponse;
  toast[status](message);
};

export const signInUserAction = (obj) => async (dispatch) => {
  const pendingResponse = signInUser(obj);
  toast.promise(pendingResponse, {
    pending: 'Please wait',
  });

  const { status, message, token } = await pendingResponse;
  toast[status](message);

  if (status === 'success') {
    sessionStorage.setItem('accessJWT', token.accessJWT);
    localStorage.setItem('refreshJWT', token.refreshJWT);
    dispatch(getUserProfileAction());
  }
};

export const getUserProfileAction = () => async (dispatch) => {
  const { status, user } = await getUserInfo();

  if (status === 'success') {
    dispatch(setUser(user));
  }
};

// Auto Login
export const autoLoginAction = () => async (dispatch) => {
  // Check if accessJWT exists in session
  const accessJWT = sessionStorage.getItem('accessJWT');
  if (accessJWT) {
    return dispatch(getUserProfileAction());
  }

  const refreshJWT = localStorage.getItem('refreshJWT');
  if (refreshJWT) {
    // request new accessJWT from server and call getAdminProfile

    const { accessJWT } = await getNewAccessJWT();

    if (accessJWT) {
      sessionStorage.setItem('accessJWT', accessJWT);
      dispatch(getUserProfileAction());
    }
  }
};
