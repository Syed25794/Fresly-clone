import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  
  const Checkout = () => {
    return (
      <>
        <Box textStyle="checkoutBox">
          <SimpleGrid columns={[1, null, 2]} spacing="40px">
            <Box border="1px solid rgb(175,175,175)" padding="10" mt="10">
              <Text textStyle="h3">Delivery Address</Text>
              <Flex gap="5" mt="5">
                <Box>
                  <FormLabel fontSize="14px">First Name</FormLabel>
                  <Input />
                </Box>
                <Box>
                  <FormLabel fontSize="14px">Last Name</FormLabel>
                  <Input />
                </Box>
              </Flex>
              <Box>
                <FormLabel fontSize="14px" mt="3">
                  Full Name for Delivery Address
                </FormLabel>
                <Input />
                <Checkbox fontSize="14px" mt="2">
                  Same as my First and Last Name
                </Checkbox>
              </Box>
              <Box>
                <FormLabel fontSize="14px" mt="5">
                  Address Line 1
                </FormLabel>
                <Input />
              </Box>
              <Box>
                <FormLabel fontSize="14px" mt="3">
                  Address Line 2 (optional)
                </FormLabel>
                <Input />
              </Box>
              <Flex gap="5" mt="3">
                <Box>
                  <FormLabel fontSize="14px">City</FormLabel>
                  <Input />
                </Box>
                <Box>
                  <FormLabel fontSize="14px">State</FormLabel>
                  <Input />
                </Box>
                <Box>
                  <FormLabel fontSize="14px">Zip</FormLabel>
                  <Input />
                </Box>
              </Flex>
              <Box mt="3">
                <FormLabel fontSize="14px">Phone</FormLabel>
                <Input />
                <Checkbox defaultChecked>
                  Receive SMS text message updates on my orders
                </Checkbox>
              </Box>
              <Box>
                <FormLabel fontSize="14px" mt="6">
                  Email (We require your email to send you receipts and order
                  updates)
                </FormLabel>
                <Input />
              </Box>
              <Flex mt="5" justifyContent="space-between">
                <Text fontSize="14px">Total</Text>
                <Text>$ {}</Text>
              </Flex>
              <Button mt="3" w="100%" colorScheme="blue" borderRadius="none">
                Next
              </Button>
            </Box>
  
            <Box
              border="1px solid rgb(175,175,175)"
              h="400px"
              padding="10"
              mt="10"
            >
              <Text textStyle="h3">Order Summary</Text>
              <Box mt="8">
                <Text textStyle="code">+ Add Promo Code</Text>
                <Text textStyle="code">+ Redeem gift Card</Text>
                <label>Delivey Date</label>
                <Select>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>saturday</option>
                  <option>Sunday</option>
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                </Select>
              </Box>
            </Box>
          </SimpleGrid>
  
          <Box mt="10">
            <Text textStyle="h1">Common Questions</Text>
            <Flex textStyle="FlexBox">
              <Text>How many servings are your meals?</Text>
              <Text fontSize="20px">🢓</Text>
            </Flex>
            <Flex textStyle="FlexBox">
              <Text>Do you accommodate dietary preferences?</Text>
              <Text fontSize="20px">🢓</Text>
            </Flex>
            <Flex textStyle="FlexBox">
              <Text>How long do the meals last?</Text>
              <Text fontSize="20px">🢓</Text>
            </Flex>
            <Flex textStyle="FlexBox">
              <Text>How do I heat up my meals?</Text>
              <Text fontSize="20px">🢓</Text>
            </Flex>
            <Flex textStyle="FlexBox">
              <Text>How does shipping work?</Text>
              <Text fontSize="20px">🢓</Text>
            </Flex>
            <Flex textStyle="FlexBox">
              <Text>How does the subscription work?</Text>
              <Text fontSize="20px">🢓</Text>
            </Flex>
          </Box>
        </Box>
      </>
    );
  };
  
  export default Checkout;
  