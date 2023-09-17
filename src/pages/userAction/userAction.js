import { toast } from 'react-toastify';

import { postNewUser } from '../../helper/axios';

export const createNewUserAction = (obj) => async (dispatch) => {
  const pendingResponse = postNewUser(obj);
  toast.promise(pendingResponse, {
    pending: 'Please wait...',
  });
  const { status, message } = await pendingResponse;
  toast[status](message);
};
