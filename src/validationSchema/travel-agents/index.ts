import * as yup from 'yup';

export const travelAgentValidationSchema = yup.object().shape({
  agency_name: yup.string().required(),
  agency_address: yup.string().required(),
  agency_phone: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
