import { Box, Heading, Text, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Style from './Css/Signup.module.css'
import Form from './Form'
export default function SignUp() {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();
    const formData = [
        {
            text: 'We support growing businesses at any stage.',
            heading: "How many employees do you have, including yourself?",
            subHeading: 'Tell us a little about your business.',
            data: [{
                heading: "0-2 employees"
            },
            {
                heading: "3-9 employees"
            },
            {
                heading: "10-2 employees"
            },
            {
                heading: "100+ employees"
            }
            ]
        },
        // Main form options Data
        {
            subHeading: 'Just a few more questions.',
            heading: 'Have you run payroll yet this calendar year?',
            data: [
                {
                    heading: 'Yes'
                },
                {
                    heading: 'No'
                }
            ]
        },
        // Yes option's form Data
        {
            subHeading: 'Just a few more questions.',
            heading: 'Have you run payroll yet this calendar year?',
            data: [
                {
                    heading: 'We’re new to running payroll',
                },
                {
                    heading: 'We use another online payroll software'
                },
                {
                    heading: 'We do it ourselves manually'
                }

            ]
        },
        // NO option's form Data
        {
            subHeading: 'Just a few more questions.',
            heading: 'Have you run payroll yet this calendar year?',
            data: [
                {
                    heading: 'We’re new to running payroll',
                },
                {
                    heading: 'We use another online payroll software'
                },
                {
                    heading: 'We do it ourselves manually'
                }

            ]
        },
        // Yes section's all option & same data
        {
            subHeading: 'Just a few more questions.',
            heading: 'How would you describe your business setting?',
            data: [
                {
                    heading: 'We work in an office',
                },
                {
                    heading: 'We work in retail or food service'
                },
                {
                    heading: 'We work in a factory, construction, or in the field'
                }

            ]
        },
        // Yes section's all option's data 
        {
            subHeading: 'Just a few more questions.',
            heading: 'What type of workers do you need to pay?',
            data: [
                {
                    heading: 'Employees (W-2s)',
                },
                {
                    heading: 'Contractors (1099s)'
                },
                {
                    heading: 'Both (W-2s & 1099s)'
                }

            ]
        },
        // Yes section's all option's data (yes & no options)[YES [data[2]]]
        {
            subHeading: 'Just a few more questions.',
            heading: 'Interested in offering health benefits to your team?',
            data: [
                {
                    heading: 'Yes',
                },
                {
                    heading: 'No'
                }

            ]
        },
        // Yes section's all option's data (yes & no options)[YES [data[0]]] - Yes select
        {
            subHeading: 'One last question.',
            heading: 'Ready to set up your company?',
            data: [
                {
                    heading: 'Yes, I’m ready!',
                },
                {
                    heading: 'No, I’d like to learn more.'
                }

            ]
        },

    ]
    const handleIndex = () => {
        setIndex(index + 1)
        if (index === 7) {
            navigate("/create-account")
        }
    }
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

            <Form data={formData[index]} handleIndex={handleIndex} />

            <Stack p={2}>
                <Box p={0}>
                    <Text fontSize={15}>No credit card required · Secure site</Text>
                </Box>
                <Box p={10}>
                    <Text
                        fontSize={18}
                        fontWeight={450}
                    >
                        Does your company use Gusto today?<a href='./signin'> Sign in here.</a></Text>
                </Box>
            </Stack>




















        </div>
    )
}
