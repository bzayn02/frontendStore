import { getCategoriesAPI } from '../../helper/axios';
import { setCategories } from './categorySlice';

export const getAllCategoriesAction = () => async (dispatch) => {
  const { status, result } = await getCategoriesAPI();
  if (status === 'success') {
    dispatch(setCategories(result));
  }
};
