import axios from 'axios';

const rootAPI = process.env.REACT_APP_ROOTAPI;
const categoryAPI = rootAPI + '/categories';
const productAPI = rootAPI + '/products';

const axiosProcessor = async ({ method, url, obj }) => {
  try {
    const { data } = await axios({ method, url, data: obj });
    console.log(data, 'from axios');
    return data;
  } catch (error) {
    return axiosProcessor({
      method,
      url,
      obj,
    });
  }
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
