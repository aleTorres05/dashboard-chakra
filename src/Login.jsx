import React from 'react';

import {
  Box,
  ChakraProvider,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Form,
  Formik,
  Field,
  FormErrorMessage,
} from '@chakra-ui/react';

function Login() {
  function validateEmail(email) {
    let error;
    if (!email) {
      error = 'Email is requierd';
    } else if (email.toLowerCase() !== 'ale@gmail.com') {
      error = 'crentials are incorrect';
    }
    return error;
  }
  return (
    <ChakraProvider>
      <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(3, 1fr)">
        <GridItem colSpan={3} rowSpan={3}>
          <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
            <Box p="6">
              <Formik
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                  }, 1000);
                }}
              >
                {props => (
                  <Form>
                    <Field name="name" validate={validateEmail}>
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.name && form.touched.name}
                          isRequired
                        >
                          <FormLabel>Email</FormLabel>
                          <Input {...field} id="name" />
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Form>
                )}
              </Formik>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}
export default Login;
