import React from 'react'
import image from "../image/home_bg.webp"
import Style from "./Css/Home.module.css"
import { Button, Stack, Text, Box, Divider, SimpleGrid, Img, Image, VStack, StackDivider, Container } from '@chakra-ui/react'
import Navbar from './Navbar';
import Footer from './Footer';
export default function Home() {

  const [state, setState] = React.useState(-1);




  return (
    <div>
      <Navbar />
      {/* ................................FORM DIV............................... */}
      <div style={{
        backgroundImage: `url(${image})`
      }} className={Style.backgroundPicDiv}
      >

        <div
          className={Style.para1Div}
        >

          <Text textAlign="start" fontWeight={500} fontSize={50}>Set your business up with modern payroll, benefits, and more.</Text>
          <Text textAlign="start" fontWeight={600} fontSize={18}>Tell us a little about yourself.</Text>
          <div className={Style.para2Div} >
            <div div className={Style.para3Div}
              onClick={() => setState(0)} style={state === 0 ? { backgroundColor: "#f3fafb", border: "2px solid #0b9daa" } : null}>
              <img src="https://prod.gusto-assets.com/assets/packs/media/hp_segment_radio/hiring-and-onboarding-5e357ad9.svg" alt="icon" />
              <Text marginLeft={10} py={2} fontWeight={490} fontSize={15}>I'm an employer interested in Gusto</Text>
            </div>
            <div className={Style.para4Div}

              onClick={() => setState(1)} style={state === 1 ? { backgroundColor: "#f3fafb", border: "2px solid #0b9daa" } : null}>
              <img src="https://prod.gusto-assets.com/assets/packs/media/hp_segment_radio/calculator-eed2b9d2.svg" alt="icon" />
              <Text marginLeft={10} py={2} fontWeight={490} fontSize={15}>I'm an accountant interested in Gusto</Text>
            </div>

            <div className={Style.para5Div}

              onClick={() => setState(2)} style={state === 2 ? { backgroundColor: "#f3fafb", border: "2px solid #0b9daa" } : null}>
              <img src="https://prod.gusto-assets.com/assets/packs/media/hp_segment_radio/id-card-b0bed2c9.svg" alt="icon" />
              <Text marginLeft={10} py={2} fontWeight={490} fontSize={15}>My company already uses Gusto</Text>
            </div>
            <div className={Style.para6Div} >

              {
                state === -1 ? <Stack direction='column'>
                  <Box
                    display={'flex'}
                    justifyContent={'space-evenly'}
                    width='100%'
                    py={5}

                  >
                    <Button colorScheme='red' w={240}  > <a href='./signup'>Create an account</a></Button>
                    <Button colorScheme='gray' w={240}>Learn more</Button>
                  </Box>
                </Stack> : null
              }



              {
                state === 0 ? <Stack direction='column'>
                  <Box
                    display={'flex'}
                    justifyContent={'space-evenly'}
                    width='100%'
                    py={5}
                  >
                    <Button colorScheme='red' w={240} ><a href='./signup'>Create an account</a></Button>
                    <Button colorScheme='gray' w={240}>Learn more</Button>
                  </Box>
                </Stack> : null
              }
              {
                state === 1 ?
                  <Stack direction='column'>
                    <Box
                      display={'flex'}
                      justifyContent={'space-evenly'}
                      width='100%'
                      py={5}

                    >
                      <Button colorScheme='red' w={240} >Become a partner</Button>
                      <Button colorScheme='gray' w={240}>Learn more</Button>
                    </Box>
                  </Stack> : null
              }
              {
                state === 2 ? <Stack direction='column'>
                  <Box
                    display={'flex'}
                    justifyContent={'space-evenly'}
                    width='100%'
                    py={5}

                  >
                    <Button colorScheme='red' w={480} ><a href='./signin'>Sign In</a></Button>

                  </Box>
                </Stack> : null
              }

            </div>
          </div>
        </div>



        <SimpleGrid columns={1} row={2} marginTop={10} width={200} marginLeft={'auto'} padding={'1rem'}>
          <Box height='80px'>
            <img style={{ width: "100%" }} src="https://prod.gusto-assets.com/assets/svg/company/signature-lemon-yellow-c41f76ecdb0e4736ee8c2513e974cf8e6c00168d61b0d4a630614330e31b16c8.svg" alt="lemon-yellow" />
            <Divider orientation='horizontal' width={40} />
            <Text fontWeight={'bold'} fontSize={18} color={'white'} >WORK   <Text as='samp' color={'black'}>WITH</Text> GUEST</Text>
          </Box>


        </SimpleGrid>

      </div>




      {/* ................................FORM DIV............................... */}




      <div className={Style.gridDiv} >

        <SimpleGrid
          column={[1]}
          row={[4]}
          display={'flex'}
          justifyContent={'space-between'}
          // border={"1px solid red"}
          p={'1rem 1rem 1rem 1rem'}
          w={'90%'}
          m={'auto'}
        >

          <Box className={Style.backImage}
            w={'100%'}
            h={250}
          >
            <Text
              textAlign={"left"}
              fontWeight={590}
              fontSize={25}
              paddingTop={'4rem'}
            >
              Trusted by more than 200,000 businesses and their teams.</Text>

          </Box>

          <Stack
            // border={"1px solid red"}
            w={'100%'}
            display={'flex'}
            direction={'column'}
            alignItems={'center'}
            justifyContent={'center'}
          >

            <Text
              fontWeight={'bold'}
              fontSize={25}
            >
              4.8</Text>
            <Img src='https://prod.gusto-assets.com/assets/homepage/finimpact-star-rating@2x-31c470fba52435f58c3465ecbd3038ef97dddb4804860a97bb6e7373c44a2fa8.svg' />
            <Text> FinImpact | June 2021</Text>
          </Stack>

          <Stack
            // border={"1px solid red"}
            w={'90%'}
            display={'flex'}
            direction={'column'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Img src='https://prod.gusto-assets.com/assets/homepage/Trophy@2x-37c878a48954a0e493690ecbf96e41669e8849cc3e770a0014298f14d811ce10.svg' />
            <Text fontWeight={500}
              fontSize={20}>Best HR & Payroll Platform</Text>
            <Text>NerdWallet | February 2022</Text>
          </Stack>

          <Stack
            // border={"1px solid red"}
            w={'90%'}
            display={'flex'}
            direction={'column'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Img src='https://prod.gusto-assets.com/assets/homepage/Trophy@2x-37c878a48954a0e493690ecbf96e41669e8849cc3e770a0014298f14d811ce10.svg' />
            <Text
              fontWeight={500}
              fontSize={20}>Editor's Choice</Text>
            <Text>PC Mag | January 2022</Text>



          </Stack>
        </SimpleGrid>
      </div>






      {/* ................................Paragraph Section............................... */}



      <div className={Style.VSatckBox} >

        <VStack
          padding={'2rem'}
          spacing={4}
        // align='stretch'
        // display={'flex'}
        // direction={'column'}
        // textAlign={'center'}
        // justifyContent={'center'}
        >
          <Box w={300} margin={'auto'} color={'tomato'} p={5}>
            <Text fontWeight={500}
              fontSize={18}>The people platform</Text>
          </Box>
          <Box h='120px' w={420} margin={'auto'}>
            <Text fontWeight={500}
              fontSize={40}>Manage your growing team, all in one place.</Text>
          </Box>
          <Box w={600} margin={'auto'} color={'black'} pb={5}>
            <Text fontWeight={400}
              fontSize={18}

            >Behind every successful business is a thriving team. Hire, pay, insure, and support your employees with Gusto's all-in-one people platform.</Text>
          </Box>
          <Box w={300} margin={'auto'} color={'teal'}>
            <Text fontWeight={600}
              fontSize={18}>Learn more</Text>
          </Box>
        </VStack>




        <SimpleGrid
          // w="60%"
          p="0 20%"
          gap={25}
          fontSize={14}
          // border="1px red solid"
          // className={Style.PosterGrid}
          columns={[2, 3, 4, 6, 6]}>
          <VStack>
            <Image boxSize="60px" src="https://prod.gusto-assets.com/assets/components/people_platform/svg/HROS_Payroll@2x-80bbe6366bd32b637b306c324ceac63d666649e5c3fb5f7fa96c6c1581fdc7c1.svg" />
            <Text>Full-service payroll</Text>
          </VStack>
          <VStack>

            <Image boxSize="60px" src="https://prod.gusto-assets.com/assets/components/people_platform/svg/HROS_Benefits@2x-516b42413e9fbb129e21e9ac272e82d4f5994aaccc015ab85b81faa52722a5be.svg" />
            <Text>Employee benefits</Text>
          </VStack>
          <VStack>
            <Image boxSize="60px" src="https://prod.gusto-assets.com/assets/components/people_platform/svg/HROS_Time%20and%20Attendance-e863d55e2ea828436aade1cc5ab2a79d9e1f0c5868b7eb56716cb01a51d7213c.svg" />
            <Text>Time and attendance</Text>
          </VStack>
          <VStack>
            <Image boxSize="60px" src="https://prod.gusto-assets.com/assets/components/people_platform/svg/HROS_HiringAndOnboarding@2x-c5d38fff8b6148d52fce57aac81cd88a4115c3e725adbfc502b64776520b95b8.svg" />
            <Text> Hiring and onboarding</Text>
          </VStack>
          <VStack>
            <Image boxSize="60px" src="https://prod.gusto-assets.com/assets/components/people_platform/svg/HROS_Talent%20Management-917165f1ffb3dfc6bb5a66d9182143738f01aefa6b0505c2bca6536b575fba55.svg" />
            <Text> Talent management</Text>
          </VStack>
          <VStack>
            <Image boxSize="60px" src="https://prod.gusto-assets.com/assets/components/people_platform/svg/HROS_InsightsAndReporting@2x-aefd17463c1c53c20e07a1acfc2f1d9701697f897869859747bff1b3c31580ab.svg" />
            <Text> Insights and reporting</Text>
          </VStack>
          {/* #e9dcdb */}

        </SimpleGrid>
        <Box position="relative"
          h="600px"
          // border="1px red solid"
          >

          <Image
            position="absolute"
            bottom={-10}
            left="25%"
            w="50%"
            src="https://prod.gusto-assets.com/assets/components/people_platform/svg/HROS@2x-2743f54414e7738e77bb05a0d2e015bf32531a3f088d3a66d05d12b3cbdc15ae.svg" />
        </Box>
        <Box
          h="300px"
          bg="#0a8080">
          <Container pt="10%" color="white"
            fontSize={24}>
            We see Gusto as our complete HR business partner—especially
            now that we’re more remote and businesses are hiring people from everywhere.
          </Container>

        </Box>

      </div>
      <div>
      </div>
      <Footer />
    </div>
  )
}



























