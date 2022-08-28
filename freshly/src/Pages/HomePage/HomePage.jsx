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
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <SimpleGrid columns={[1, null, 2]} mt="65px">
        <Box>
          <Image
            src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62aa50d46eadd67c1b7ca2df_Freshly_SpringMarketing_C141139-Edit%20(1)%20(2).jpg"
            alt=""
          />
        </Box>
        <Box bg="rgb(133,229,198)" textAlign="left">
          <Box padding="10">
            <Heading>Balanced meals for busy lives.</Heading>
            <Button
              mt="5"
              mb="5"
              borderRadius="none"
              variant="outline"
              colorScheme="blue"
              bg="white"
            >
              Explore Meals
            </Button>
            <Text w="300px" textStyle="p5">
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
            <Text textStyle="p4">
              By continuing, you agree to our{" "}
              <span className="span">Terms</span> and{" "}
              <span className="span">Privacy Policy</span> & will receive emails
              from Freshly.
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
            <Text textStyle="h3">Choose Your Meals</Text>
            <Text>Rotating menu of 50+ balanced dishes.</Text>
          </Box>
          <Box>
            <Image
              margin="auto"
              src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b358b954d12f769ba_we-cook-deliver%20(1).svg"
              alt=""
            />
            <Text textStyle="h3">We Cook & Deliver</Text>
            <Text>Fully-cooked meals sent fresh, not frozen.</Text>
          </Box>
          <Box>
            <Image
              margin="auto"
              src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b53e85f79fe3374c5_chill-reheat.svg"
              alt=""
            />
            <Text textStyle="h3">Chill & Reheat</Text>
            <Text>Refrigerate meals & reheat in 3 minutes.</Text>
          </Box>
          <Box>
            <Image
              margin="auto"
              src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b83b282277e15a7af_eat-repeat.svg"
              alt=""
            />
            <Text textStyle="h3">Eat & Repeat</Text>
            <Text>Change meals, skip a week, or cancel any time.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Box>
        <Box bg="white" w="80%" margin="auto" padding="10" mt="10">
          <Heading textAlign="center" color="black">
            On The Menu
          </Heading>
          <Text textAlign="center" color="black" mt="3">
            Each Freshly meal is perfectly sized for 1 person to enjoy at 1
            sitting. Our fully-prepared meals are delivered fresh, and ready to
            eat in 3 minutes.
          </Text>
          <SimpleGrid columns={[1, null, 3]} spacing="30px" mt="8">
            <Box>
              <Image
                borderRadius="10"
                src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg"
                alt=""
              />
              <Text textStyle="h4">Steak Peppercorn</Text>
              <Text textStyle="h5">500 Cal | Gluten Free | Single-Serve</Text>
            </Box>
            <Box>
              <Image
                borderRadius="10"
                src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8686c6708c070e7d41_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg"
                alt=""
              />
              <Text textStyle="h4">Homestyle Chicken</Text>
              <Text textStyle="h5">
                560 Cal | Gluten Free | Single-Serve | Cauliflower Shell Beef
                Bolognese
              </Text>
            </Box>
            <Box>
              <Image
                borderRadius="10"
                src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b89b735739065897a4f_production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpeg"
                alt=""
              />
              <Text textStyle="h4">Cauliflower Shell Beef Bolognese</Text>
              <Text textStyle="h5">490 Cal | Gluten Free | Single-Serve</Text>
            </Box>
            <Box>
              <Image
                borderRadius="10"
                src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8bdf3b65081fd159c6_production-meal-image-f0de55be-d691-4ade-bc26-b4a8aedaa1fe.jpeg"
                alt=""
              />
              <Text textStyle="h4">Sausage Baked Penne</Text>
              <Text textStyle="h5">470 Cal | Gluten Free | Single-Serve</Text>
            </Box>
            <Box>
              <Image
                borderRadius="10"
                src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8e6dd23b60cb122654_production-meal-image-92ec0fc1-d352-4720-9b83-96798ab8d2de.jpeg"
                alt=""
              />
              <Text textStyle="h4">Savory-Sweet Chicken Teriyaki Bowl</Text>
              <Text textStyle="h5">420 Cal | Gluten Free | Single-Serve</Text>
            </Box>
            <Box>
              <Image
                borderRadius="10"
                src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640046931cb5d54bd5472_production-meal-image-7a62bb89-9bcb-4f1f-9f0f-d8372698d48e.jpeg"
                alt=""
              />
              <Text textStyle="h4">Protein-Packed Chicken Parm</Text>
              <Text textStyle="h5">410 Cal | Gluten Free | Single-Serve</Text>
            </Box>
          </SimpleGrid>
          <Button mt="10" colorScheme="blue" borderRadius="none">
            View Plans & Menu
          </Button>
        </Box>
      </Box>

      <Box bg="rgb(255,253,247)" padding="20">
        <Box textAlign="center">
          <Image
            margin="auto"
            src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192ce7669f68694a8b969af_Group%20(8).svg"
            alt=""
          />
          <Heading mt="3">Flexible plans that fit your life</Heading>
          <Text textStyle="p2">
            We offer anywhere from 4–12 meals per week, with meals as low as
            $9.58 each. The bigger your box,
          </Text>
          <Text textStyle="p3">
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
            <Text textStyle="meal">4-5 Meals</Text>
          </Box>
          <Box>
            <Image
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492393696224964e1910_6-7%20Meals-p-500.png"
              alt=""
            />
            <Text textStyle="meal">6-7 Meals</Text>
          </Box>
          <Box>
            <Image
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492cddaec74cb5161350_8-9%20Meals-p-500.png"
              alt=""
            />
            <Text textStyle="meal">8-9 Meals</Text>
          </Box>
          <Box>
            <Image
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492794414230d9d0e1be_10-11%20Meals-p-500.png"
              alt=""
            />
            <Text textStyle="meal">10-11 Meals</Text>
          </Box>
          <Box>
            <Image
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb4927a7912ad1a7770be8_12%20Meals-p-500.png"
              alt=""
            />
            <Text textStyle="meal">12 Meals</Text>
          </Box>
        </SimpleGrid>
        <Box textAlign="center" mt="10">
          <Text textStyle="p2">
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
            <Image
              w="200px"
              margin="auto"
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg"
              alt=""
            />
            <Text textStyle="p">Freshly has changed our lives!</Text>
            <Text textStyle="p2">
              With Freshly, we don’t have to go anywhere or wait for delivery,
              and our monthly food bill has been cut nearly in half. We love it.
            </Text>
          </Box>
          <Box>
            <Image
              w="200px"
              margin="auto"
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg"
              alt=""
            />
            <Text textStyle="p">10 stars! Awesome! Love it!</Text>
            <Text textStyle="p2">
              We love Freshly because it takes two minutes to prepare, the food
              is great and we don’t have to spend time cleaning up.
            </Text>
          </Box>
          <Box>
            <Image
              w="200px"
              margin="auto"
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg"
              alt=""
            />
            <Text textStyle="p">Delicious! So yummy!</Text>
            <Text textStyle="p2">
              The convenience of a well prepared, healthy, flavorful meal with
              no shopping, preparing, or clean up is simply amazing. Looking
              forward to the rest of the week.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Box>
        <SimpleGrid columns={[1, null, 2]} alignItems="center" textAlign="left">
          <Box padding="20">
            <Heading>
              We believe eating right should be easy for everyone.
            </Heading>
            <Text mt="5">
              Each Freshly meal is perfectly sized for 1 person to enjoy at 1
              sitting. Our fully-prepared meals are delivered fresh, and ready
              to eat in 3 minutes.
            </Text>
            <Button mt="10" colorScheme="blue" borderRadius="none">
              Learn More
            </Button>
          </Box>
          <Box>
            <Image
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/61f1275059fd961964f53287_22_Homepage_EatingBetterEasy_BG_866x708.jpg"
              alt=""
            />
          </Box>
        </SimpleGrid>
      </Box>

      <SimpleGrid columns={[1, null, 2]} mt="30" textAlign="left">
        <Box padding="20">
          <Heading>Healthy Meals Delivered Weekly</Heading>
          <Input mt="5" placeholder="freshly@freshly.com" />
          <br />
          <br />
          <Input placeholder="zip" />
          <Button borderRadius="none" colorScheme="blue" mt="5">
            Get Started!
          </Button>
          <Text textStyle="p4">
            Already have an account? <span className="span">Log in.</span>
          </Text>
          <Text fontSize="14px">
            By continuing, you agree to our <span className="span">Terms</span>{" "}
            and
            <span className="span"> Privacy Policy.</span>& will receive emails
            from Freshly.
          </Text>
        </Box>

        <Box>
          <Image
            src="https://assets-global.website-files.com/5d03b4e130118314af624b20/61f1274f0c096f517bb89ed5_22_Homepage_HealthyMealsDelivered_866x708.jpg"
            alt=""
          />
        </Box>
      </SimpleGrid>

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
      <Footer />
    </>
  );
};

export default HomePage;
