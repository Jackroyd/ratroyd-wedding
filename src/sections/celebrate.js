import React from 'react';
import SectionContainer from '../components/section_container';
import Section from '../components/section';
import { Flex, Heading, Image, Spacer } from '@chakra-ui/react';
import dayone from '../assets/images/dayone.png';


const Celebrate = () => {
  const marginY = {base: '0.5rem', md: '0.75rem', lg: '1rem'};
  return (
  <Section backgroundColor={"off_white"} padding={{base: "3rem 0", md: "5rem 0"}}>
    <SectionContainer xMargin={{base: '1rem', md: '12rem', lg: '18rem', xl: '28rem'}}>
        <Image src={dayone} flexBasis={'0'} objectFit={'cover'}
          width={{base: '25rem', md: '32rem', lg: '36rem', xl: '40rem'}}
          minWidth={'30vw'}
          maxWidth={'90vw'}
        />
        <Spacer/>
        <Flex
        flexBasis={'0'}
        direction={'column'}
        align={'center'}
        justifyContent={'center'}
        color={'dark_green'}
        width={{base: '25rem', md: '32rem', lg: '36rem', xl: '40rem'}}
        minWidth={'30vw'}
        maxWidth={'90vw'}
        spacing={'1rem'}
        whiteSpace={'nowrap'}
        >
          <Heading fontFamily={"heading_shadow"} fontSize={{base: "4rem", md: "5rem", lg: "6rem", xl: "8rem"}} color={'dark_green'} marginY={marginY} textAlign={'center'}>let's<br></br>celebrate</Heading>
          <Heading fontFamily={"fancy"} fontSize={{base: "2rem", md: "3rem", lg: "4rem", xl:'6rem'}} color={'dark_green'} marginY={marginY}>like we did on day one</Heading>
        </Flex>
    </SectionContainer>
  </Section>
  );
};

export default Celebrate;