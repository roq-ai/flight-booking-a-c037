import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { travelAgentValidationSchema } from 'validationSchema/travel-agents';
import { UserInterface } from 'interfaces/user';
import { TravelAgentInterface } from 'interfaces/travel-agent';

function TravelAgentCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: TravelAgentInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.travel_agent.create({ data: values as RoqTypes.travel_agent });
      resetForm();
      router.push('/travel-agents');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<TravelAgentInterface>({
    initialValues: {
      agency_name: '',
      agency_address: '',
      agency_phone: '',
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: travelAgentValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Travel Agents',
              link: '/travel-agents',
            },
            {
              label: 'Create Travel Agent',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Travel Agent
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.agency_name}
            label={'Agency Name'}
            props={{
              name: 'agency_name',
              placeholder: 'Agency Name',
              value: formik.values?.agency_name,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.agency_address}
            label={'Agency Address'}
            props={{
              name: 'agency_address',
              placeholder: 'Agency Address',
              value: formik.values?.agency_address,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.agency_phone}
            label={'Agency Phone'}
            props={{
              name: 'agency_phone',
              placeholder: 'Agency Phone',
              value: formik.values?.agency_phone,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/travel-agents')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'travel_agent',
    operation: AccessOperationEnum.CREATE,
  }),
)(TravelAgentCreatePage);
