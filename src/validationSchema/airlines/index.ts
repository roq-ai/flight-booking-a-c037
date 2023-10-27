import * as yup from 'yup';

export const airlineValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  founded_at: yup.date().nullable(),
  headquarters: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
