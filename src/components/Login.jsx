import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  FormControl,
  Input,
  InputRightElement,
  Button,
  InputGroup,
  FormLabel,
  Center,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

function Login({ onLogin = () => {} }) {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => history.push('/');
  onLogin();
  const [show, setShow] = useState(false);
  const handelClick = () => setShow(!show);

  return (
    <Center>
      <Box
        maxW="md"
        maxH="md"
        borderWidth="2px"
        borderRadius="lg"
        marginTop="150px"
        borderColor="#eb7013"
        bg="#f2f2f2"
      >
        <Box p="10" textAlign="center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isRequired>
              <FormLabel fontWeight="bold">Email Address</FormLabel>
              <Input
                type="email"
                name="email"
                borderColor="#eb7013"
                ref={register({ required: true })}
              />
              <FormLabel fontWeight="bold">Password</FormLabel>

              <InputGroup>
                <Input
                  type={show ? 'text' : 'password'}
                  name="password"
                  borderColor="#eb7013"
                  ref={register({ required: true })}
                />
                <InputRightElement>
                  <Button
                    size="sm"
                    onClick={handelClick}
                    border="1px"
                    borderColor="#eb7013"
                    marginRight="2px"
                    fontWeight="bold"
                  >
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              type="submit"
              marginTop="8px"
              textAlign="center"
              w="100px"
              border="1px"
              fontWeight="bold"
              borderColor="#eb7013"
            >
              Login
            </Button>
          </form>
        </Box>
      </Box>
    </Center>
  );
}
export default Login;
