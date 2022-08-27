import { Box, Text, HStack, Divider, Container, } from '@chakra-ui/react'
import React from 'react'
import { BsTwitter } from "react-icons/bs"
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa"

export default function Footer() {
    return (
        <div style={{}}>


            <Box display={'flex'} justifyContent={'space-evenly'} gap={20}>
                <Box textAlign={'start'} mt={10} lineHeight={10}>
                    <Box>
                        <Text fontWeight={'bold'}>Pricing</Text>
                        <Text>Starting at just $46 per month</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={'bold'} mt={10}>Built for you</Text>
                        <Text>Starting a business</Text>
                        <Text>Switching to Gusto</Text>
                        <Text>Working remotely</Text>
                        <Text>Why Gusto</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={'bold'} mt={10}>For Accountants</Text>
                        <Text>Become a partner</Text>
                        <Text>People Advisory</Text>
                        <Text>Trainings</Text>
                        <Text>Gusto Pro</Text>
                        <Text>Gusto partner blog</Text>
                        <Text>Gusto Next 2022</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={'bold'} mt={10}>For Developers</Text>
                        <Text>Gusto Embedded Payroll</Text>
                        <Text>Build apps with Gust o</Text>
                        <Text>Developer tools</Text>
                    </Box>

                </Box>


                <Box textAlign={'start'} mt={10} lineHeight={10}>
                    <Box>
                        <Text fontWeight={'bold'}>Get started</Text>
                        <Text>Interactive Demo</Text>
                        <Text>Contact Sales — (800) 936-0383</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={'bold'} mt={10}>Services</Text>
                        <Text>People platform</Text>
                        <Text>Full-service payroll</Text>
                        <Text>Employee Benefits</Text>
                        <Text>Health Benefits</Text>
                        <Text>Financial Benefits</Text>
                        <Text>Time and attendance</Text>
                        <Text> Hiring and onboarding</Text>
                        <Text> management</Text>
                        <Text>Insights and reporting</Text>
                        <Text>Workers' compensation</Text>
                        <Text>Gusto Wallet</Text>
                    </Box>
                </Box>

                <Box textAlign={'start'} mt={10} lineHeight={10}>
                    <Box>
                        <Text fontWeight={'bold'}>Company</Text>
                        <Text>About</Text>
                        <Text>Careers — We're hiring!</Text>
                        <Text> Press</Text>
                        <Text>News</Text>
                        <Text>Investors</Text>
                        <Text> Contact</Text>
                        <Text> Affiliate program</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={'bold'} mt={10}> Licenses</Text>
                        <Text>Gusto Capital, LLC NMLS ID: 1845463</Text>
                        <Text> ZenPayroll, Inc. NMLS ID: 1737896</Text>

                    </Box>
                    <Box>
                        <Text fontWeight={'bold'} mt={10}>Support</Text>
                        <Text> Help Center</Text>
                        <Text>Talk to support — Sign in</Text>
                    </Box>

                </Box>

                <Box textAlign={'start'} mt={10} lineHeight={10}>
                    <Box>
                        <Text fontWeight={'bold'}>   Resources</Text>
                        <Text>Customer stories</Text>
                        <Text>reviews</Text>
                        <Text>Compare</Text>
                        <Text>Partner Directory</Text>
                        <Text> Business Guides</Text>
                        <Text>FAQs</Text>
                        <Text>Security</Text>
                        <Text>Integrations</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={'bold'} mt={10}>  Tools</Text>
                        <Text>Small Business Financial Relief</Text>
                        <Text>Employer tax calculator</Text>
                        <Text>Burn rate calculator</Text>
                        <Text>New hire checklist</Text>
                    </Box>
                </Box>
            </Box>

            {/* second step footer */}
            <Box mt={10}>
                <Box display={'flex'} justifyContent={'space-between'} gap={50} alignItems={'center'}>
                    <Text w={400}>Talk Shop: Business resources</Text>
                    <Divider />
                </Box>

                <Box display={'flex'} justifyContent={'space-evenly'} alignItems={'start'} gap={20} textAlign={'start'} mt={10} lineHeight={8}>
                    <Box >
                        <Text fontWeight={700} color={'teal'}>Talk Shop Blog</Text>
                        <Text noOfLines={3} w={250}>Advice and information for
                            growing businesses and their
                            teams
                        </Text>
                    </Box>
                    <Box>
                        <Text>  Running payroll</Text>
                        <Text>Employee benefits</Text>
                        <Text>Health insurance</Text>
                        <Text>Burn rate calculator</Text>
                        <Text>People management</Text>
                    </Box>
                    <Box>
                        <Text>Workers' comp</Text>
                        <Text>Starting a business</Text>
                        <Text> Business finances</Text>
                    </Box>
                    <Box>
                        <Text>  Hiring</Text>
                        <Text>Growth</Text>
                        <Text>Taxes</Text>
                    </Box>
                </Box>
            </Box>

            {/* third footer row */}
            <Box display={'flex'} justifyContent={'flex-start'} gap={10} mt={10}>
                <Box display={'flex'} gap={5} ml={45}>
                    <Text>Gusto © 2022</Text>
                    <Text>Brokers</Text>
                    <Text>Privacy</Text>
                    <Text>Accessibility</Text>
                    <Text>Terms</Text>
                    <Text>Licenses</Text>
                    <Text>Site</Text>
                </Box>
                <Box display={'flex'} gap={5} >
                    <FaFacebookF />
                    <BsTwitter />
                    <FaLinkedinIn />
                    <FaInstagram />
                </Box>

            </Box>
            <Box display={'flex'} justifyContent={'flex-start'} ml={45} ><Text>map</Text></Box>
        </div>
    )
}
