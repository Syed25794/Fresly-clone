import React from "react";

import { Link } from "react-router-dom";
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
    <Container maxWidth="100%">
      <Box w={["95%", "95%", "60%", "35%"]} m="auto" mt="5vh" h="50vh">
        <Heading fontSize="40px" fontWeight="500">
          Log in
        </Heading>
        <form>
          <FormLabel mb="0px">Username</FormLabel>
          <Input
            placeholder="example_123"
            border="2px solid"
            borderColor="black"
            rounded="none"
          />
          <FormLabel mb="0px" pt="15px">
            Password
          </FormLabel>
          <Input
            placeholder="enter password"
            border="2px solid"
            borderColor="black"
            rounded="none"
            mt="0px"
          />
          <Button
            type="submit"
            bg="rgb(42,109,255)"
            color="white"
            fontWeight="bold"
            w="100%"
            rounded="none"
            mt="15px"
            colorScheme={"messenger"}
          >
            Login
          </Button>
        </form>

        <Flex
          mt="20px"
          justifyContent="space-between"
          direction={["column", "column", "row", "row"]}
        >
          <Text color="blue">forgot password</Text>

          <Text>
            Don't have an account?{" "}
            <span style={{ color: "blue " }}>
              <Link to="/signup">Get Started</Link>
            </span>
          </Text>
        </Flex>
      </Box>
    </Container>
  );
}

export default Login;
