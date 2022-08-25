import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

const HomePage = () => {
  return (
    <>
      <SimpleGrid columns={[1, null, 2]} mt="65px">
        <Box>
          <Image
            src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62aa50d46eadd67c1b7ca2df_Freshly_SpringMarketing_C141139-Edit%20(1)%20(2).jpg"
            alt=""
          />
        </Box>
        <Box bg="rgb(133,229,198)">
          <Box padding="10">
            <Heading>Balanced meals for busy lives.</Heading>
            <Button
              mt="5"
              borderRadius="none"
              variant="outline"
              colorScheme="blue"
              bg="white"
            >
              Explore Meals
            </Button>
            <Text fontWeight="bold" mt="10">
              See meals available in your area!
            </Text>
            <Flex gap="5" mt="4">
              <Box>
                <FormLabel>Email Address</FormLabel>
                <Input
                  borderRadius="none"
                  bg="white"
                  placeholder="freshly@freshly.com"
                />
              </Box>
              <Box>
                <FormLabel>Zip Code</FormLabel>
                <Input borderRadius="none" bg="white" placeholder="1111" />
              </Box>
            </Flex>

            <Button mt="10" colorScheme="blue" borderRadius="none">
              Get Started
            </Button>
            <Text w="80%" mt="10">
              By continuing, you agree to our <span>Terms</span> and{" "}
              <span>Privacy Policy</span> & will receive emails from Freshly.
            </Text>
          </Box>
        </Box>
      </SimpleGrid>

      <Box bg="rgb(254,249,235)" paddingTop="10">
        <Heading textAlign="center">How it works</Heading>
        <SimpleGrid
          columns={[2, null, 4]}
          spacing="10%"
          alignItems="center"
          padding="20"
          textAlign="center"
        >
          <Box>
            <Image
              margin="auto"
              src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19dbc5f55c4206158f7_choose-your-meals%20(1).svg"
              alt=""
            />
            <Text mt="8">Choose Your Meals</Text>
            <Text>Rotating menu of 50+ balanced dishes.</Text>
          </Box>
          <Box>
            <Image
              margin="auto"
              src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b358b954d12f769ba_we-cook-deliver%20(1).svg"
              alt=""
            />
            <Text mt="8">We Cook & Deliver</Text>
            <Text>Fully-cooked meals sent fresh, not frozen.</Text>
          </Box>
          <Box>
            <Image
              margin="auto"
              src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b53e85f79fe3374c5_chill-reheat.svg"
              alt=""
            />
            <Text mt="8">Chill & Reheat</Text>
            <Text>Refrigerate meals & reheat in 3 minutes.</Text>
          </Box>
          <Box>
            <Image
              margin="auto"
              src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b83b282277e15a7af_eat-repeat.svg"
              alt=""
            />
            <Text mt="8">Eat & Repeat</Text>
            <Text>Change meals, skip a week, or cancel any time.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Box w="100%">
        <Image
          src="https://assets-global.website-files.com/5d03b4e130118314af624b20/61f127577dd58a9659fa4545_22_Homepage_OntheMenu_BG_1440%20x%20890.jpg"
          alt=""
        />
      </Box>

      <Box bg="rgb(255,253,247)" padding="20">
        <Box textAlign="center">
          <Image
            margin="auto"
            src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192ce7669f68694a8b969af_Group%20(8).svg"
            alt=""
          />
          <Heading mt="3">Flexible plans that fit your life</Heading>
          <Text mt="5">
            We offer anywhere from 4–12 meals per week, with meals as low as
            $9.58 each. The bigger your box,
          </Text>
          <Text>
            the more you’ll save—and you can always pause or change your plan at
            any time.
          </Text>
        </Box>
        <SimpleGrid
          columns={[2, null, 5]}
          spacing="20px"
          textAlign="center"
          mt="55px"
        >
          <Box>
            <Image
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492937b0377ca6310cb0_4-5%20Meals-p-500.png"
              alt=""
            />
            <Text>4-5 Meals</Text>
          </Box>
          <Box>
            <Image
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492393696224964e1910_6-7%20Meals-p-500.png"
              alt=""
            />
            <Text>^-7 Meals</Text>
          </Box>
          <Box>
            <Image
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492cddaec74cb5161350_8-9%20Meals-p-500.png"
              alt=""
            />
            <Text>8-9 Meals</Text>
          </Box>
          <Box>
            <Image
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492794414230d9d0e1be_10-11%20Meals-p-500.png"
              alt=""
            />
            <Text>10-11 Meals</Text>
          </Box>
          <Box>
            <Image
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb4927a7912ad1a7770be8_12%20Meals-p-500.png"
              alt=""
            />
            <Text>12 Meals</Text>
          </Box>
        </SimpleGrid>
        <Box textAlign="center" mt="10">
          <Text>
            Shipping and tax added at checkout. Prices are rounded for your
            convenience.
          </Text>
          <Button mt="10" colorScheme="blue" borderRadius="none" size="lg">
            Sign Up Now
          </Button>
        </Box>
      </Box>

      <Box bg="rgb(255,253,247)" textAlign="center">
        <Heading>What Others Are Saying</Heading>
        <SimpleGrid columns={[1, null, 3]} spacing="40px" padding="20">
          <Box>
          <Image w="200px" margin="auto" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg" alt=""/>
            <Text mt="5">Freshly has changed our lives!</Text>
            <Text>
              With Freshly, we don’t have to go anywhere or wait for delivery,
              and our monthly food bill has been cut nearly in half. We love it.
            </Text>
          </Box>
          <Box>
          <Image w="200px" margin="auto" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg" alt=""/>
            <Text mt="5">10 stars! Awesome! Love it!</Text>
            <Text>
              We love Freshly because it takes two minutes to prepare, the food
              is great and we don’t have to spend time cleaning up.
            </Text>
          </Box>
          <Box>
          <Image w="200px" margin="auto" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg" alt=""/>
            <Text mt="5">Delicious! So yummy!</Text>
            <Text>
              The convenience of a well prepared, healthy, flavorful meal with
              no shopping, preparing, or clean up is simply amazing. Looking
              forward to the rest of the week.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Box
        padding="20"
        bg="rgb(247,247,247)"
        borderBottom="1px solid rgb(206,206,206)"
      >
        <SimpleGrid columns={[2, null, 6]} spacing="40px" alignItems="center">
          <Box>
            <Image
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523e435aee2e3a4ab03e6f_The_Huffington_Post_logo.svg"
              alt=""
            />
          </Box>
          <Box>
            <Image
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523e412d98cd166a6c84e6_logo-header.64f3bdc15b1f321829f9f30c7853a1469f469d71.svg"
              alt=""
            />
          </Box>
          <Box>
            <Image
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523e436b26e00a240533b1_Entrepreneur-01.svg"
              alt=""
            />
          </Box>
          <Box>
            <Image
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523e432759db28ffaf924f_w-g-logo-black.svg"
              alt=""
            />
          </Box>
          <Box>
            <Image
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523f552759db186baf93d2_techcrunch-seeklogo.com%20%5BConverted%5D.svg"
              alt=""
            />
          </Box>
          <Box>
            <Image
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523e434bbecc1909457f48_logo-header.aeb2e510354d524c42a87c5d0a97d0a73c5d7581.svg"
              alt=""
            />
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default HomePage;
