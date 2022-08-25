import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
function Login() {
  return (
    <Container border="2px solid red" maxWidth="100%">
      <Box w={["95%", "95%", "60%", "35%"]} m="auto" mt="25vh" h="50vh">
        <Heading fontSize="40px" fontWeight="500">
          Log in
        </Heading>
        <form>
          <FormLabel mb="0px">Email</FormLabel>
          <Input
            placeholder="you@domain.com"
            border="2px solid"
            borderColor="black"
            rounded="sm"
          />
          <FormLabel mb="0px" pt="15px">
            Password
          </FormLabel>
          <Input
            placeholder="enter password"
            border="2px solid"
            borderColor="black"
            rounded="sm"
            mt="0px"
          />
          <Button
            type="submit"
            bg="rgb(42,109,255)"
            color="white"
            fontWeight="bold"
            w="100%"
            rounded="sm"
            mt="15px"
            colorScheme={"messenger"}
          >
            Login
          </Button>
        </form>

        <Flex mt="20px" justifyContent="space-between">
          <Text>forgot password</Text>
          <Text>
            Don't have an account? <span>Get Started</span>
          </Text>
        </Flex>
      </Box>
    </Container>
  );
}

export default Login;
