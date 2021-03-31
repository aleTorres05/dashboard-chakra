import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftAddon,
  Textarea,
  Select,
} from '@chakra-ui/react';

function ContactUs() {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired>
        <Grid
          templateColumns="repeat(2, 1fr)"
          templateRows="repeat(4, 1fr)"
          gap={4}
          overflow="auto"
          padding="5px"
        >
          <GridItem colStart={1} rowStart={1}>
            <FormLabel>First Name</FormLabel>
            <Input
              name="firstName"
              ref={register}
              border="2px"
              borderColor="blackAlpha.500"
              placeholder="First Name"
            />
          </GridItem>
          <GridItem colStart={2} rowStart={1}>
            <FormLabel>Last Name</FormLabel>
            <Input
              name="lastName"
              ref={register}
              border="2px"
              borderColor="blackAlpha.500"
              placeholder="First Name"
            ></Input>
          </GridItem>
          <GridItem colStart={1} rowStart={2}>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              ref={register}
              border="2px"
              borderColor="blackAlpha.500"
              placeholder="Email"
              type="email"
            />
          </GridItem>
          <GridItem colStart={2} rowStart={2}>
            <FormLabel>Phone Number</FormLabel>
            <InputGroup>
              <InputLeftAddon
                children={
                  <Select name="areaCode" ref={register}>
                    <option value="+52">+52</option>
                    <option value="+56">+56</option>
                    <option value="+55">+55</option>
                    <option value="+81">+81</option>
                    <option value="+33">+33</option>
                  </Select>
                }
              ></InputLeftAddon>
              <Input
                name="Number"
                ref={register({
                  pattern: /\d{10}/,
                })}
                border="2px"
                borderColor="blackAlpha.500"
                placeholder="Number"
                type="tel"
              />
            </InputGroup>
            {errors.Number && 'Number must be 10 digist.'}
          </GridItem>
          <GridItem colStart={1} colEnd={3} rowStart={3}>
            <FormLabel>Your Message</FormLabel>
            <Textarea
              placeholder="Message"
              size="sm"
              name="message"
              ref={register}
              border="2px"
              borderColor="blackAlpha.500"
            ></Textarea>
          </GridItem>
          <GridItem rowStart={4} colStart={2}>
            <Button type="submit" size="lg" colorScheme="gray" isFullWidth>
              submit
            </Button>
          </GridItem>
        </Grid>
      </FormControl>
    </form>
  );
}
export default ContactUs;
