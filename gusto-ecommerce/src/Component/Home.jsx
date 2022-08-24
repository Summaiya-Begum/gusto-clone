import React from 'react'
import image from "../image/home_bg.webp"
import Style from "./Css/Home.module.css"
import { Button, Stack, Text, WrapItem, Box, Wrap, ButtonGroup } from '@chakra-ui/react'
export default function Home() {
  return (
    <div>


      <div style={{
        backgroundImage: `url(${image})`
      }} className={Style.backgroundPicDiv}
      >

        <div
          className={Style.para1Div}
        >

          <Text textAlign="start" fontWeight={900} fontSize={50}>Set your business up with modern payroll, benefits, and more.</Text>
          <Text textAlign="start" fontWeight={600} fontSize={18}>Tell us a little about yourself.</Text>
          <div className={Style.para2Div} style={{}}>
            <div className={Style.para3Div} style={{}} >
              <img src="https://prod.gusto-assets.com/assets/packs/media/hp_segment_radio/hiring-and-onboarding-5e357ad9.svg" alt="icon" />
              <Text marginLeft={10} py={2}fontWeight={490} fontSize={15}>I'm an employer interested in Gusto</Text>
            </div>
            <div className={Style.para4Div} style={{}}>
              <img src="https://prod.gusto-assets.com/assets/packs/media/hp_segment_radio/calculator-eed2b9d2.svg" alt="icon" />
              <Text marginLeft={10} py={2}fontWeight={490} fontSize={15}>I'm an accountant interested in Gusto</Text>
            </div>

            <div className={Style.para5Div} style={{}}>
              <img src="https://prod.gusto-assets.com/assets/packs/media/hp_segment_radio/id-card-b0bed2c9.svg" alt="icon" />
              <Text marginLeft={10} py={2}fontWeight={490} fontSize={15}>My company already uses Gusto</Text>
            </div>
            <div className={Style.para6Div} style={{}}>
              <Stack direction='column'>
                <Box
                display={'flex'}
                justifyContent={'space-evenly'}
                  width='100%'
                  py={5}
                >
                  <Wrap spacing={3}>
                    <WrapItem>
                      <Button colorScheme='red' w={240}>Gray</Button>
                    </WrapItem>
                    <WrapItem>
                      <Button colorScheme='gray' w={240}>Red</Button>
                    </WrapItem>

                  </Wrap>
                </Box>

              </Stack>
            </div>
          </div>
        </div>



        <div className={Style.para7Div}>
          <Text>Lemon yellow</Text>
          <Text>WORK WITH GUEST</Text>
        </div>
      </div>



    </div>
  )
}
