/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import * as types from "../../Redux/Auth/actionTypes";
import { Link, useNavigate } from "react-router-dom";
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
import { Alert, AlertIcon } from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

export const Login = () => {
  const isAuth = useSelector((state) => state.Auth.isAuth);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState("");
  const [alertActive, setAlertActive] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // check the user is existed or not
  const checkUser = (userData, email, pwd) => {
    let user = userData.find(
      (user) => user.email === email && user.pwd === pwd
    );
    if (user) return user;
  };

  // validating the email using email regex
  const checkValidEmail = (e) => {
    setEmail(e.target.value);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
      setErr("Please Enter the valid Email"); // show the error of writing email is valid or not
    } else {
      setErr(""); // if email is valid then don't show error
      return;
    }
  };

  // submitting the form
  const handleSubmit = (e) => {
    dispatch({ type: types.LOGIN_REQUEST });
    e.preventDefault();

    axios
      .get("https://punchy-car-5123.herokuapp.com/users")
      .then((res) => {
        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: checkUser(res.data, email, pwd),
        });
        navigate("/");
      })
      .catch((err) =>
        dispatch({ type: types.LOGIN_FAILURE, payload: err.message })
      );
    if (alertActive) {
      setAlertActive(false);
    } else setAlertActive(true);
  };
  return (
    <Container maxWidth="100%">
      <Navbar/>
      <Box w={["95%", "95%", "60%", "35%"]} m="auto" mt="5vh" h="50vh">
        <Heading fontSize="40px" fontWeight="500">
          Log in
        </Heading>

        {alertActive ? (
          <Alert status={isAuth ? "success" : "warning"}>
            <AlertIcon />
            {isAuth ? "Successfully Logged in" : "Check your email or password"}
          </Alert>
        ) : null}
       
        <form onSubmit={handleSubmit}>
          <FormLabel mb="0px">Email</FormLabel>
          <Input
            type="email"
            placeholder="you@example.com"
            border="2px solid"
            borderColor="black"
            rounded="none"
            onChange={checkValidEmail}
          />
          <Text color="red">{err}</Text>
          <FormLabel mb="0px" pt="15px">
            Password
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
      <Footer/>
    </Container>
  );
};
