import * as Yup from 'yup';

export const checkoutSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Wrong format'),
});
