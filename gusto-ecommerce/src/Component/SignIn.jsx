import React from 'react';
import { FcGoogle } from "react-icons/fc"

// import { FaFacebook } from 'react-icons/fa';
// import { SiLinkedin } from 'react-icons/si';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Link,
    Button,
    Text,
    Divider,
    Image,
    Img
} from '@chakra-ui/react';


export default function Login() {


    return (
        <div >


            <Box display={'flex'} justifyContent={'space-around'}
                //  border={'1px solid red'}
                w={'100%'} mt={45} p={'1rem 0rem 1rem 0rem'}>

                <Box ml={10} w={700} boxSize='1000px'
                    // border={'1px solid red'} 
                    mt={150}>
                    <Image h={390} src='https://d3bnlkto289wdc.cloudfront.net/assets/packs/media/illustrations/illo-people-with-bouquet-a88253a7.svg' alt='Dan Abramov' />
                </Box>

                <Box p={'2rem 1rem 2rem 1rem'}

                    //  border={'1px solid green'}
                    w={'90%'} h={600} boxShadow={'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}>
                    <Box border={'1px solid red'} h={65} >
                        <Image margin={'auto'} h={65} src='https://prod.gusto-assets.com/assets/svg/header/gusto-logo-bfed4fde4bd2b5dd364ab0e58f77fc90aeefa2f1ecdb7fff524279642e23f9c2.svg' />
                    </Box>
                    <Box border={'1px solid red'} w={'80%'} m={'auto'} mt={10} >
                        <FormControl id="email">
                            <FormLabel fontSize={"1.2rem"} fontWeight={600}>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel fontSize={"1.2rem"} fontWeight={600}>Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                    </Box>
                    <Box border={'1px solid red'} w={'80%'} m={'auto'} mt={1} color={'teal'} fontWeight={'bold'} >
                        <Text display={'flex'}><Link>Having trouble signing in?</Link></Text>
                    </Box>

                    <Box border={'1px solid red'} w={'80%'} m={'auto'} mt={10} >
                        <Checkbox display={'flex'} fontSize={20}><Text fontWeight={490}>Remember this device @</Text></Checkbox>
                    </Box>

                    <Box >
                        <Button> Sign In</Button>
                    </Box>

                    <Box>
                        <Divider orientation='horizontal' /><Text>Or</Text><Divider orientation='horizontal' />
                    </Box>


                    <Box>
                        <Button w="90%" mb={5} p="5%">
                            <FcGoogle fontSize={20} pr={10} />
                            <Text ml={2}>Sign up with Google</Text>
                        </Button>
                    </Box>

                    <Box>
                        <Button>Sign In with Xero</Button>
                        <Button>Sign in with Intuit</Button>
                    </Box>


                    <Box>
                        <Text>Need help? <Link>Visit our Help Center</Link></Text>
                    </Box>




                </Box>



                <Box mr={10} w={720} boxSize='1000px'
                    //  border={'1px solid red'}
                    mt={150} h={'auto'}>
                    <Image h={530} src='https://d3bnlkto289wdc.cloudfront.net/assets/packs/media/illustrations/illo-2-person-scene-01ac18a3.svg' alt='Dan Abramov' />
                </Box>

            </Box>

            <Text><Link>Don’t have an employee account?</Link></Text>
            <Text><Link> Want to sign your company up with Gusto?</Link></Text>
            <Text><Link>© 2022 Gusto</Link></Text>
        </div >
    )


































    // return (
    //     <Box
    //         w={450}
    //         align={'center'}
    //         justify={'center'}
    //         bg={useColorModeValue('gray.50', 'gray.800')}
    //         m={'auto'}
    //         p={'1rem'}
    //     >
    //         <Box w={'100%'}>

    //             <Box

    //                 bg={useColorModeValue('white', 'gray.700')}
    //                 boxShadow={'lg'}
    //                 w={'100%'}
    //                 h={'auto'}
    //                 m={'auto'}
    //                 // p={'1.5rem 1.5rem 1rem 1.5rem'}
    //             >

    //                 <Image src='https://prod.gusto-assets.com/assets/svg/header/gusto-logo-bfed4fde4bd2b5dd364ab0e58f77fc90aeefa2f1ecdb7fff524279642e23f9c2.svg' />

    //                 <FormControl id="email">
    //                     <FormLabel fontSize={"1.2rem"} fontWeight={400}>Email address</FormLabel>
    //                     <Input type="email" />
    //                 </FormControl>
    //                 <FormControl id="password">
    //                     <FormLabel fontSize={"1.2rem"} fontWeight={400}>Password</FormLabel>
    //                     <Input type="password" />
    //                 </FormControl>
    //                 <Box spacing={6} m={'auto'}>
    //                     <Link fontWeight={600} color={'#0a8080'}>Having trouble signing in?</Link>
    //                     <Box

    //                         m={'auto'}
    //                         border={'1px solid red'}
    //                         w={'85%'}

    //                     >

    //                         <Checkbox m={'auto'}
    //                             border={'1px solid red'}>Remember this device</Checkbox>

    //                     </Box>
    //                     <Box m={'auto'}>
    //                         <Button
    //                             w={'85%'}

    //                             p={'1.5rem'}
    //                             bg={'#0a8080'}
    //                             color={'white'}
    //                             _hover={{
    //                                 bg: 'teal.700',
    //                             }}>
    //                             Sign in
    //                         </Button>
    //                     </Box>
    //                     <hr />
    //                     <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
    //                         <Center>
    //                             <Text>Sign in with Google</Text>
    //                         </Center>
    //                     </Button>
    //                     <Box display={'flex'} justifyContent={'space-around'} gap={5}>
    //                         <Button colorScheme={'facebook'} leftIcon={<FaFacebook />}>
    //                             <Center>
    //                                 <Text>Continue with Facebook</Text>
    //                             </Center>
    //                         </Button>
    //                         <Button colorScheme={'messenger'} leftIcon={<SiLinkedin />}>
    //                             <Center>
    //                                 <Text>Send to Linkedin</Text>
    //                             </Center>
    //                         </Button>
    //                     </Box>

    //                     <Text margin={"auto"} >
    //                         Need help? Visit our Help Center.
    //                     </Text>
    //                 </Box>


    //             </Box>

    //         </Box>
    //     </Box>
    // );
}