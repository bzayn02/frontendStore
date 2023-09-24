import axios from 'axios';

const rootAPI = process.env.REACT_APP_ROOTAPI;
const categoryAPI = rootAPI + 'categories';
const productAPI = rootAPI + 'products';
const userAPI = rootAPI + 'user';
const paymentAPI = rootAPI + 'payment-options';

const getAccessJWT = () => {
  return sessionStorage.getItem('accessJWT');
};

const getRefreshJWT = () => {
  return localStorage.getItem('refreshJWT');
};

const axiosProcessor = async ({
  method,
  url,
  obj,
  isPrivate,
  refreshToken,
}) => {
  const token = refreshToken ? getRefreshJWT() : getAccessJWT();
  const headers = {
    Authorization: isPrivate ? token : null,
  };
  try {
    const { data } = await axios({ method, url, data: obj, headers });

    return data;
  } catch (error) {
    if (
      error?.response?.status === 403 &&
      error?.response?.data?.message === 'jwt expired'
    ) {
      // Get new access JWT
      const { status, accessJWT } = await getNewAccessJWT();
      if (status === 'success' && accessJWT) {
        sessionStorage.setItem('accessJWT', accessJWT);
      }
      return axiosProcessor({
        method,
        url,
        obj,
        isPrivate,
        refreshToken,
      });
    }
    return {
      status: 'error',
      message: error.response ? error?.response?.data?.message : error.message,
    };
  }
};

// =========== User API ================
export const postNewUser = (data) => {
  const obj = {
    method: 'post',
    url: userAPI,
    obj: data,
  };
  return axiosProcessor(obj);
};

export const postVerifyNewUserInfo = (data) => {
  const obj = {
    method: 'post',
    url: userAPI + '/user-verification',
    obj: data,
  };
  return axiosProcessor(obj);
};

export const signInUser = (data) => {
  const obj = {
    method: 'post',
    url: userAPI + '/sign-in',
    obj: data,
  };
  return axiosProcessor(obj);
};

export const getUserInfo = () => {
  const obj = {
    method: 'get',
    url: userAPI,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

export const signoutUser = (_id) => {
  const obj = {
    method: 'post',
    url: userAPI + '/signout',
    obj: { _id, accessJWT: getAccessJWT(), refreshJWT: getRefreshJWT() },
  };
  return axiosProcessor(obj);
};

// =========== Category API ============
export const getCategoriesAPI = () => {
  const obj = {
    method: 'get',
    url: categoryAPI,
  };
  return axiosProcessor(obj);
};

// =========== Product API ============

export const getProductsAPI = () => {
  const obj = {
    method: 'get',
    url: productAPI,
  };
  return axiosProcessor(obj);
};

export const getProductBySlugAPI = (slug) => {
  const obj = {
    method: 'get',
    url: rootAPI + `products/product/${slug}`,
  };
  return axiosProcessor(obj);
};

export const getProductsByCatIdAPI = (object) => {
  const obj = {
    method: 'get',
    url: rootAPI + `products/categories/${object?.slug}/${object?._id}`,
  };
  return axiosProcessor(obj);
};

// ================= Get New AccessJWT =========

export const getNewAccessJWT = () => {
  const obj = {
    method: 'get',
    url: userAPI + '/get-accessjwt',
    refreshToken: true,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

// =============== Get all active payment options ======

export const getPaymentOptions = () => {
  const obj = {
    method: 'get',
    url: paymentAPI,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
