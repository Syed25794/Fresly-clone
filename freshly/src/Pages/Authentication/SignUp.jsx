import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [err,setErr] = useState("")

  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/users", { name, email, pwd })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
    alert("sign up success");
  };
  return (
    <Container maxWidth="100%">
      <Box w={["95%", "95%", "60%", "35%"]} m="auto" mt="5vh" h="50vh">
        <Heading fontSize="40px" fontWeight="500">
          Sign Up
        </Heading>
        <form onSubmit={handleSubmit}>
          <Box>
            <FormLabel mb="0px">Name</FormLabel>
            <Input
              type="text"
              border="2px solid"
              borderColor="black"
              rounded="none"
              placeholder="john doe"
              onChange={(e) => setName(e.target.value)}
            />
          </Box>

          <Box>
            <FormLabel mb="0px" pt="15px">
              Email
            </FormLabel>
            <Input
              type="email"
              placeholder="you@domain.com"
              border="2px solid"
              borderColor="black"
              rounded="none"
              mt="0px"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel mb="0px" pt="15px">
              Set Password
            </FormLabel>
            <Input
              type="password"
              placeholder="enter password"
              border="2px solid"
              borderColor="black"
              rounded="none"
              mt="0px"
              onChange={(e) => setPwd(e.target.value)}
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
            Sign up
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default SignUp;
