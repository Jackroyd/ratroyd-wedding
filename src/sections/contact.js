import React from 'react';
import SectionContainer from '../components/section_container';
import Section from '../components/section';
import { Flex, Heading, Stack, Text, Spacer } from '@chakra-ui/react';


const Contact = () => {
  const mainTextSize = {base: "1.5rem", md: "1.5rem", lg: "1.75rem", xl: '2.25rem'};
  return (
  <Section sectionId={'contact'} backgroundColor={"light_green"} padding={{base: "3rem 0", md: "5rem 0"}}>
    <SectionContainer xMargin={{base: '1rem', md: '10rem', lg: '12rem', xl: '26rem'}}>
        <Stack spacing={"1rem"} align={'center'} 
          width={{base: '25rem', md: '32rem', lg: '36rem', xl: '40rem'}}
          minWidth={'30vw'}
          maxWidth={'90vw'}>
            <Heading fontFamily={"heading_shadow"} fontSize={{base: "6rem", md: "6rem", lg: "8rem", xl: '13rem'}} color={'dark_green'} textAlign={'center'}>CONTACT</Heading>
        </Stack>
        <Spacer/>
        <Flex
        flexBasis={'0'}
        direction={'column'}
        align={{base: 'center', md: 'flex-start', lg: 'flex-start'}}
        justifyContent={'center'}
        color={'dark_green'}
        width={{base: '25rem', md: '32rem', lg: '36rem', xl: '40rem'}}
        minWidth={'30vw'}
        maxWidth={'80vw'}
        spacing={'1rem'}
        >
          <Text fontFamily={"main_text"} fontSize={mainTextSize} marginTop={{base: '1rem', lg: '0'}}>
            Please don't hesitate to get in touch. We'd be very happy to share any extra info or address any particular concerns.
            <br/>
            <br/>
            Josh: 07930 294 864
            <br/>
            Lydia: 07727 194 593
          </Text>
        </Flex>
    </SectionContainer>
  </Section>
  );
};

export default Contact;