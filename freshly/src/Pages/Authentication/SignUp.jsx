import {
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <Container maxWidth="100%">
      <Flex h="10vh" alignItems={"center"}>
        {/* <MenuSharpIcon /> */}
        <Image
          src="https://www.shorenewsnetwork.com/wp-content/uploads/2022/05/freshly-and-asics-join-forces-to-release-limited-edition-meal-plans-for-runners_62962fa4cc112.jpeg"
          w="110px"
          m="auto"
          mt="10px"
        />
      </Flex>
      <Box w={["95%", "95%", "60%", "35%"]} m="auto" mt="5vh" h="50vh">
        <Heading fontSize="40px" fontWeight="500">
          Sign Up
        </Heading>
        <form>
          <Flex justifyContent="space-between" mt="2vh">
            <Box>
              <FormLabel mb="0px">Name</FormLabel>
              <Input border="2px solid" borderColor="black" rounded="none" />
            </Box>
            <Box>
              <FormLabel mb="0px">Mobile</FormLabel>
              <Input border="2px solid" borderColor="black" rounded="none" />
            </Box>
          </Flex>
          <Box>
            <FormLabel mb="0px" pt="15px">
              Email
            </FormLabel>
            <Input
              placeholder="you@domain.com"
              border="2px solid"
              borderColor="black"
              rounded="none"
              mt="0px"
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
          </Box>
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

          {/* <Text>
            Don't have an account?{" "}
            <span style={{ color: "blue " }}>
              <Link to="/signup">Get Started</Link>
            </span>
          </Text> */}
        </Flex>
      </Box>
    </Container>
  );
}

export default SignUp;
