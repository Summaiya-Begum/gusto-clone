import { Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

const Product = () => {
  return (
    <div>
      <VStack spacing={10}>

    
  <Heading color="red" fontSize="20px">
    The people platform
  </Heading>
  <Heading>
  The modern HR platform for payroll, benefits, and more.
  </Heading>
  <Container>
  benefits, and more.
A well-supported team is the key to a successful business.
With Gusto’s easy-to-use platform, you can empower your people
and push your business forward.
  </Container>
  <Button colorScheme="red">
    Create account
  </Button>
  </VStack>
    </div>
  )
}

export default Product