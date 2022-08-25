import { Box, Heading, Text, Stack, Button } from '@chakra-ui/react'
import Style from './Css/Signup.module.css'

const CreateAccount = () => {
    return (
        <div className={Style.SignupBigContainer}>

            <div className={Style.SignUpContainer}>
                <div className={Style.SignUpContainerImage}>
                    <img src="https://prod.gusto-assets.com/assets/svg/header/gusto-logo-bfed4fde4bd2b5dd364ab0e58f77fc90aeefa2f1ecdb7fff524279642e23f9c2.svg" alt="logo" />
                </div>
                <div className={Style.SignUpContainerTitle}>
                    <Text>Talk with our team at <a href=''>(800) 936-0383</a></Text>
                </div>
            </div>
            <Box w={390} m={'auto'} pb={2} mt={18} >
                <Heading mt={12}>Get started with Gusto</Heading>
                <Text>We offer one intuitive place to manage payroll, benefits, and HR for your business.</Text>

            </Box>
            <Box
                w={490}
                m={'auto'}
                h={'auto'}
                mt={15}
                p={'2rem 1rem 2rem 1rem'}
                boxShadow={'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px'}
            >


                <Text
                    fontWeight={400}
                    fontSize={25}
                >
                    <b>Nice!</b>  We could be a great fit for your business.

                </Text>
                <Button>Sign up with Google</Button>
                {/* <FontAwesomeIcon icon="fa-brands fa-google" /> */}


                <Box
                    bg='teal'
                    variant='solid'
                    w={'95%'}
                    m={'auto'}
                    p={'1rem 1rem 1rem 1rem'}
                    borderRadius={5}
                    color={'white'}
                    mt={10}
                >
                    waesrdtfyui
                </Box>




            </Box>

            <Stack p={2}>
                <Box p={0}>
                    <Text fontSize={15}>No credit card required · Secure site</Text>
                </Box>
                <Box p={10}>
                    <Text
                        fontSize={18}
                        fontWeight={450}
                    >
                        Does your company use Gusto today?<a href='./'> Sign in here.</a></Text>
                </Box>
            </Stack>




















        </div>
    )
}

export default CreateAccount
