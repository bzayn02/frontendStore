import axios from 'axios';

const rootAPI = process.env.REACT_APP_ROOTAPI;
const categoryAPI = rootAPI + 'categories';
const productAPI = rootAPI + 'products';
const userAPI = rootAPI + 'user';

const axiosProcessor = async ({ method, url, obj }) => {
  try {
    const { data } = await axios({ method, url, data: obj });

    return data;
  } catch (error) {
    return axiosProcessor({
      method,
      url,
      obj,
    });
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
