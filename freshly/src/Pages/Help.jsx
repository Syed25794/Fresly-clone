import { Box, Image, Input, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";

const Help = () => {
    return (
        <>
        <Navbar/>
            <Box className="container" mt="65px">
                <Image
                    src="https://theme.zdassets.com/theme_assets/1612443/d214b970a5c2a51ac648138ebda4c206924c9dd7.jpg"
                    alt=""
                />
                <Box className="centered" w="50%">
                    <Input borderRadius="20" bg="white" w="100%" placeholder="Search" />
                </Box>
            </Box>

            <Box w="80%" m="auto" mt="20">
                <SimpleGrid columns={[1, null, 3]} spacing="40px">
                    <Box textStyle="helpBoxes">What is Freshly?</Box>
                    <Box textStyle="helpBoxes">How Does Your Service Work?</Box>
                    <Box textStyle="helpBoxes">Meal Plans & Pricing</Box>
                    <Box textStyle="helpBoxes">about the meals</Box>
                    <Box textStyle="helpBoxes">dietary and nutritional information</Box>
                    <Box textStyle="helpBoxes">packaging and recycling</Box>
                    <Box textStyle="helpBoxes">managing my subscription</Box>
                    <Box textStyle="helpBoxes">all things app</Box>
                    <Box textStyle="helpBoxes">managing an order</Box>
                    <Box textStyle="helpBoxes">payment and promotions</Box>
                    <Box textStyle="helpBoxes">deivary and shipping</Box>
                    <Box textStyle="helpBoxes">technical support</Box>
                </SimpleGrid>
            </Box>

            <Box w="80%" m="auto" mt="20" mb="20" textAlign="left">
                <Text textStyle="h3">Promoted articles</Text>
                <SimpleGrid columns={[1, null, 3]} spacing="40px">
                    <Box borderBottom="1px solid rgb(175,175,175)" h="30px">
                        What's Freshly?
                    </Box>
                    <Box borderBottom="1px solid rgb(175,175,175)" h="30px">
                        What should I know before I order?
                    </Box>
                    <Box borderBottom="1px solid rgb(175,175,175)" h="30px">
                        How much do your meal plans cost?
                    </Box>
                    <Box borderBottom="1px solid rgb(175,175,175)" h="30px">
                        How many servings are in a meal?
                    </Box>
                    <Box borderBottom="1px solid rgb(175,175,175)" h="30px">
                        How do I heat up my meals?
                    </Box>
                    <Box borderBottom="1px solid rgb(175,175,175)" h="30px">
                        Do the meals have a use by freeze my meals?
                    </Box>
                    <Box borderBottom="1px solid rgb(175,175,175)" h="30px">
                        Where are your meals cooked?
                    </Box>
                    <Box borderBottom="1px solid rgb(175,175,175)" h="30px">
                        What am I committing to with a subscription?
                    </Box>
                    <Box borderBottom="1px solid rgb(175,175,175)" h="30px">
                        How do I cancel a subscription?
                    </Box>
                    <Box borderBottom="1px solid rgb(175,175,175)" h="30px">
                        Where do you deliver?
                    </Box>
                </SimpleGrid>
            </Box>
        </>
    );
};

export default Help;
