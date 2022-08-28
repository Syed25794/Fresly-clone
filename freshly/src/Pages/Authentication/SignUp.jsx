/* eslint-disable no-useless-escape */
import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { Alert, AlertIcon } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState("");
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  // checking the email is valid or not with email regex
  const checkValidEmail = (e) => {
    setEmail(e.target.value);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
      setErr("Please Enter the valid Email"); // show the error of writing email
    } else {
      setErr(""); // if email is valid then don't show error
      return;
    }
  };

  // submit the user details to the database;
  const handleSubmit = (e) => {
    e.preventDefault();
    // checking the feilds are filled or not if feild are filled then post in to the database
    if (name !== "" || email !== "" || pwd !== "") {
      axios
        .post("https://punchy-car-5123.herokuapp.com/users", {
          name,
          email,
          pwd,
        })
        .then((res) => res.data)
        .catch((err) => err.message);
      setStatus(true);
      navigate("/login");
    } else setStatus(false);
  };

  return (
    <Container maxWidth="100%">
      <Navbar />
      <Box w={["95%", "95%", "60%", "35%"]} m="auto" mt="5vh" h="50vh">
        <Heading fontSize="40px" fontWeight="500">
          Sign Up
        </Heading>
        <Alert status={status ? "success" : "warning"}>
          <AlertIcon />
          {status ? "Successfully Signed in" : "Enter Details"}
        </Alert>
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
              onChange={checkValidEmail}
            />
            {email.length > 1 ? <Text color="red">{err}</Text> : null}
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
