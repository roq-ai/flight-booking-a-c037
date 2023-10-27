import * as yup from 'yup';

export const customerServiceValidationSchema = yup.object().shape({
  service_hours: yup.string().required(),
  service_phone: yup.string().required(),
  user_id: yup.string().nullable().required(),
  airline_id: yup.string().nullable().required(),
});
