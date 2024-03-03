import React from 'react';
import SectionContainer from '../components/section_container';
import Section from '../components/section';
import { Flex, Heading, Image, Stack, Text, Spacer } from '@chakra-ui/react';
import bath from '../assets/images/bath.png';
import AccommodationAccordian from '../components/accommodation_accordion';


const Accommodation = () => {
  const mainTextSize = {base: "1.25rem", md: "1.25rem", lg: "1.5rem", xl: '2rem'};
  return (
  <Section sectionId={'accomodation'} backgroundColor={"off_white"} padding={{base: "3rem 0", md: "5rem 0"}}>
    <SectionContainer xMargin={{base: '1rem', md: '10rem', lg: '12rem', xl: '26rem'}}>
        <Stack spacing={"1rem"} align={'center'}
        maxWidth={'80vw'}
        minWidth={'30vw'}
        width={{base: '25rem', md: '32rem', lg: '36rem', xl: '40rem'}}
        >
            <Heading fontFamily={"heading_shadow"} fontSize={{base: "3.5rem", md: "4rem", lg: "5rem", xl: '10rem'}} color={'dark_green'} textAlign={'center'}>ACCOMMODATION</Heading>
            <Image src={bath} flexBasis={'0'} maxW={{base: '18rem', md: '22rem', lg: '30rem', xl: '40rem'}} objectFit={'cover'}/>
            <Text fontFamily={"main_text"} fontSize={mainTextSize} textAlign={'left'} color={'dark_green'} marginTop={{base: '1rem'}}>
            If you're staying on the estate (manor house, camping, glamping) you're welcome to arrive from 9pm Friday and stay until Monday morning. 
            Just bare in mind it might be a little busy getting ready in the house on the Saturday morning. 
            </Text>
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
            If you're planning to stay in Devon,
            we've put together a range of options to suit all budgets and needs...
          </Text>
          <Text mt={{base: '2rem', md: '0'}} fontFamily={'heading_filled'} fontSize={{base: '3rem', md: '4rem'}}>OPTIONS:</Text>
          <AccommodationAccordian titleTextSize={{base: '2rem', md:'2.5rem', xl: '3rem'}} mainTextSize={mainTextSize}/>
        </Flex>
    </SectionContainer>
  </Section>
  );
};

export default Accommodation;