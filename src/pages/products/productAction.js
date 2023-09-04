import { getProductsAPI } from '../../helper/axios';
import { setProducts } from './productSlice';

export const getAllProductsAction = () => async (dispatch) => {
  const { status, result } = await getProductsAPI();
  if (status === 'success') {
    dispatch(setProducts(result));
  }
};

// export const getAllProductsByCatIdAction = (object) => async (dispatch) => {
//   const { status, result } = await getProductsByCatIdAPI(object);
//   if (status === 'success') {
//     dispatch(setDisplayProducts(result));
//   }
// };
