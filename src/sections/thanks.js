import React from 'react';
import SectionContainer from '../components/section_container';
import Section from '../components/section';
import { Heading, Stack, Spacer, Image } from '@chakra-ui/react';
import dance from '../assets/images/dance.png';


const Thanks = () => {
  return (
  <Section sectionId={'rsvp'} backgroundColor={"dark_green"} padding={{base: "3rem 0", md: "5rem 0"}}>
    <SectionContainer xMargin={{base: '1rem', md: '10rem', lg: '12rem', xl: '26rem'}}>
      <Stack spacing={"1rem"} align={'center'}
          width={{base: '25rem', md: '32rem', lg: '36rem', xl: '40rem'}}
          minWidth={'30vw'}
          maxWidth={'80vw'}
          textAlign={'center'}>
          <Heading fontFamily={"heading_shadow"} fontSize={{base: "6rem", md: "6rem", lg: "8rem", xl: '13rem'}} color={'off_white'} textAlign={'center'}>Thanks!</Heading>
          <Heading fontFamily={"fancy"} fontSize={{base: "2rem", md: "3rem", lg: "4rem", xl:'6rem'}} color={'off_white'}>love,<br/>Josh & Lydia</Heading>
      </Stack>
      <Spacer/>
      <Image src={dance} flexBasis={'0'} maxW={{base: '18rem', md: '22rem', lg: '25rem', xl: '30rem'}} objectFit={'cover'} marginTop={{base: '2rem', md: '0'}}/>
    </SectionContainer>
  </Section>
  );
};

export default Thanks;