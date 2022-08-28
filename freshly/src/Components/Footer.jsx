import React from 'react'
import {
    Box,
    Container,
    Image,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';



const Footer = () => {
    return (
        <>
            <Box
            
                bg={useColorModeValue('gray.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')}>
                <Container as={Stack} maxW={'6xl'} py={10}>
                    <SimpleGrid
                        templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
                        spacing={8}>
                        <Stack spacing={6}>
                            <Box>
                                <Image w="120px" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5fc4feea074f5b86a6c62285_freshly-logo-R.svg" alt="" />
                            </Box>
                            <Text textAlign="left" fontSize={'sm'}>
                                © Freshly Inc.
                            </Text>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <Text fontSize="18px">Company</Text>
                            <Link href={'#'}> Careers</Link>
                            <Link href={'#'}>Contact Us</Link>
                            <Link href={'#'}>Press</Link>
                            <Link href={'#'}>Terms</Link>
                            <Link href={'#'}>Privacy</Link>
                            <Link href={'#'}>Affiliates</Link>
                            <Link href={'#'}>Partnerships</Link>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <Text fontSize="18px">Learn More</Text>
                            <Link href={'#'}>Plans & Menu</Link>
                            <Link href={'#'}>Why Freshly?</Link>
                            <Link href={'#'}>Gifts</Link>
                            <Link href={'#'}>FAQs</Link>
                            <Link href={'#'}>Blog</Link>
                            <Link href={'#'}>Students</Link>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <Text fontSize="18px" ml="8px">Join Us</Text>
                            <Image w="135px" src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-travel-awards-globestamp-7.png" alt="" />
                        </Stack>
                    </SimpleGrid>
                </Container>
            </Box>
        </>
    )
}

export default Footer;