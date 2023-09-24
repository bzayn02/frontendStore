import { getPaymentOptions } from '../../helper/axios';
import { setPaymentOptions } from './paymentSlice';

export const getAllPaymentOptionsAction = () => async (dispatch) => {
  const { status, paymentOptions } = await getPaymentOptions();
  if (status === 'success') {
    dispatch(setPaymentOptions(paymentOptions));
  }
};
