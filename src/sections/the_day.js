import React from 'react';
import SectionContainer from '../components/section_container';
import Section from '../components/section';
import { Flex, Heading, Image, Stack, Text, Spacer } from '@chakra-ui/react';
import dayImg from '../assets/images/day.png';


const TheDay = () => {
  const fontWeight = {fontWeight: 'bold'};
  const mainTextSize = {base: "1.25rem", md: "1.25rem", lg: "1.5rem", xl: '2rem'};
  return (
  <Section sectionId={'day'} backgroundColor={"light_green"} padding={{base: "3rem 0", md: "5rem 0"}}>
    <SectionContainer xMargin={{base: '1rem', md: '10rem', lg: '12rem', xl: '26rem'}}>
        <Stack spacing={"1rem"} align={'center'}
          width={{base: '25rem', md: '32rem', lg: '36rem', xl: '40rem'}}
          minWidth={'30vw'}
          maxWidth={'80vw'}>
            <Heading fontFamily={"heading_shadow"} fontSize={{base: "6rem", md: "6rem", lg: "8rem", xl: '13rem'}} color={'dark_green'} textAlign={'center'} lineHeight={{base: "6rem", md: "6rem", lg: "8rem", xl: '13rem'}}>ON THE DAY</Heading>
            <Image src={dayImg} flexBasis={'0'} maxW={{base: '18rem', md: '22rem', lg: '30rem', xl: '40rem'}} objectFit={'cover'}/>
        </Stack>
        <Spacer/>
        <Flex
        flexBasis={'0'}
        direction={'column'}
        align={{base: 'center', md: 'flex-start', lg: 'flex-start'}}
        justifyContent={'center'}
        color={'dark_green'}
        maxWidth={'80vw'}
        minWidth={'30vw'}
        width={{base: '25rem', md: '32rem', lg: '36rem', xl: '40rem'}}
        spacing={'1rem'}
        >
          <Text fontFamily={"main_text"} fontSize={mainTextSize} marginTop={{base: '1rem', lg: '0'}}>
            The ceremony kicks off at <span style={fontWeight}>12.30pm</span>, followed by plenty of food, music and dancing until the early hours.
          </Text>
          <Text fontFamily={'heading_filled'} fontSize={{base: '3rem', md: '4rem'}}>WHAT TO WEAR</Text>
          <Text fontFamily={"main_text"} fontSize={mainTextSize} marginTop={{base: '1rem', lg: '0'}}>
            We're not too fussy about what you wear, but we'd love it if you could join us in something that makes you feel fabulous, whether that's a suit, a dress, or something else entirely.
            <br/>
            Make sure you're comfy and ready to dance!
          </Text>
          <Text fontFamily={'heading_filled'} fontSize={{base: '3rem', md: '4rem'}}>FOOD AND DRINK</Text>
          <Text fontFamily={"main_text"} fontSize={mainTextSize} marginTop={{base: '1rem', lg: '0'}}>
            We'll be serving a 3-course lunch at around 14.30, with options for different dietary requirements (just let us know in the RSVP!)
            <br/>
            <br/>
            We'll also have a DIY bar - so bring your drink of choice to add to the mix. 
          </Text>
        </Flex>
    </SectionContainer>
  </Section>
  );
};

export default TheDay;