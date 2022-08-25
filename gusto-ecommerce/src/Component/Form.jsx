import { Box, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react'


export default function Form({ data, handleIndex }) {


    return (
        <div>
            <Box
                w={490}
                m={'auto'}
                h={'auto'}
                mt={15}
                p={'2rem 1rem 2rem 1rem'}
                boxShadow={'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px'}
            >

                <Text p={'0rem 1rem 2rem 1rem'}>
                    {data.text}
                    {/* Tell us a little about your business. */}
                </Text>
                <Text
                    fontWeight={400}
                    fontSize={19}
                >
                    {/* We support growing businesses at any stage. */}
                    {data.subHeading}

                </Text>
                <Heading
                    p={'0rem 1rem 2rem 1rem'}
                    fontWeight={500}
                    fontSize={30}

                >
                    {/* How many employees do you have, including yourself? */}
                    {data.heading}

                </Heading>

                {
                    data.data?.map((item) => (
                        <Box
                            bg='teal'
                            variant='solid'
                            w={'95%'}
                            m={'auto'}
                            p={'1rem 1rem 1rem 1rem'}
                            borderRadius={5}
                            color={'white'}
                            mt={10}
                            onClick={() => handleIndex()}
                        >
                            {item.heading}
                        </Box>
                    ))
                }


            </Box>
            
            
            
            </div>
    )
}