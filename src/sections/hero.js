import React from 'react';
import PropTypes from 'prop-types';
import SectionContainer from '../components/section_container';
import Section from '../components/section';
import LargeTitle from '../components/large_title';
import { Button, Flex, Heading, Spacer } from '@chakra-ui/react';

const Hero = () => {
  const marginY = {base: '0.5rem', md: '0.75rem', lg: '1rem'};
  return (
  <Section sectionId={'home'} backgroundColor={"dark_green"} padding={{base: "10rem 0 0 0", md: "11rem 0 0 0"}}>
    <SectionContainer xMargin={{base: '1rem', md: '12rem', lg: '18rem', xl: '28rem'}}>
        <LargeTitle 
          textSize={{base: '8rem', md: '12rem', lg: '14rem', xl: '18rem'}} 
          jMargin={{base: '-6rem',md: '-8rem', lg: '-10rem'}} 
          pMargin={{base: '1rem', md: '2rem', lg: '3rem'}} 
          lMargin={{base: '-6rem', md: '-9rem', lg: '-11rem'}} 
          flexBasis={'0'}/>
        <Spacer/>
        <Flex
          flexBasis={'0'}
          direction={'column'}
          align={'center'}
          justifyContent={'center'}
          whiteSpace={'nowrap'}
        >
          <Heading fontFamily={"fancy"} fontSize={{base: "2rem", md: "2.5rem", lg: "3rem", xl: '4.5rem'}} color={'off_white'} marginY={marginY}>are getting married</Heading>
          <Heading fontFamily={"heading_shadow"} fontSize={{base: "2rem", md: "2.5rem", lg: "3rem", xl: '4.5rem'}} color={'off_white'} marginY={marginY}>Saturday</Heading>
          <Heading fontFamily={"heading_shadow"} fontSize={{base: "2.5rem", md: "3rem", lg: "3.5rem", xl: '5rem'}} color={'off_white'} marginY={marginY}>12th October 2024</Heading>
          <Button variant='main' fontSize={{base: "2.5rem", md: "3rem", lg: "3.5rem", xl: '5rem'}} width={'12rem'} marginY={marginY}>RSVP</Button>
          <Heading fontFamily={"fancy"} fontSize={{base: "2rem", md: "2.5rem", lg: "3rem", xl: '4.5rem'}} color={'off_white'} marginY={marginY}>by 31st March</Heading>
        </Flex>
    </SectionContainer>
  </Section>
  );
};

Hero.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;