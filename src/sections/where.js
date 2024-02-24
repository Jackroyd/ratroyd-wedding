import React from 'react';
import SectionContainer from '../components/section_container';
import Section from '../components/section';
import { Flex, Heading, Image, Stack, Text, Box, Button, Spacer, Link } from '@chakra-ui/react';
import ashMap from '../assets/images/ash-barton-map.png';
import GettingHereAccordian from '../components/getting_here_accordian';


const Where = () => {
  const mainTextSize = {base: "1.25rem", md: "1.25rem", lg: "1.5rem", xl: '2rem'};
  return (
  <Section sectionId={'where'} backgroundColor={"light_green"} padding={{base: "3rem 0", md: "5rem 0"}}>
    <SectionContainer xMargin={{base: '1rem', md: '10rem', lg: '12rem', xl: '26rem'}}>
        <Stack spacing={"1rem"} 
          width={{base: '25rem', md: '32rem', lg: '36rem', xl: '40rem'}}
          minWidth={'30vw'}
          maxWidth={'90vw'}
          align={'center'}>
            <Heading fontFamily={"heading_shadow"} fontSize={{base: "6rem", md: "8rem", lg: "10rem", xl: '14rem'}} color={'dark_green'} textAlign={'center'}>WHERE</Heading>
            <Image src={ashMap} flexBasis={'0'} maxW={{base: '18rem', md: '22rem', lg: '30rem', xl: '40rem'}} objectFit={'cover'}/>
        </Stack>
        <Spacer/>
        <Flex
        flexBasis={'0'}
        direction={'column'}
        align={{base: 'center', md: 'flex-start', lg: 'flex-start'}}
        justifyContent={'center'}
        color={'dark_green'}
        maxWidth={'90vw'}
        minWidth={'30vw'}
        width={{base: '25rem', md: '32rem', lg: '36rem', xl: '40rem'}}
        spacing={'1rem'}
        >
          <Text fontFamily={"main_text"} fontSize={mainTextSize} marginTop={{base: '1rem', lg: '0'}}>It's all happening on an estate in North Devon, 
          close to the sea side.</Text>
          <Flex align={'center'} maxWidth={'100%'} >
            <Box width={{base: '20rem', md: '22rem', lg:'26rem'}}>
              <Text fontFamily={'heading_filled'} fontSize={{base: '3rem', md: '4rem'}}>ADDRESS</Text>
              <Text fontFamily={'main_text'} fontSize={mainTextSize} lineHeight={'2rem'}>Ash Barton Estate <br/>
                    Ash Rd,<br/>
                    Braunton<br/>
                    EX33 2NP</Text>
            </Box>
            <Link href='https://maps.app.goo.gl/m8aPb1kvRoFSfMxW7' target='_blank'>
              <Button variant='main' lineHeight={{base: "2.25rem", md: "3rem", lg: "3rem", xl: '4rem'}} fontSize={{base: "2.25rem", md: "2.25rem", lg: "2.5rem", xl: '3rem'}} padding={{base:'4rem 1rem', xl:'4rem 2rem'}} maxWidth={{base: "12rem", md: "14rem", xl: "18rem"}} whiteSpace={'normal'}>SEE ON MAPS</Button>
            </Link>
          </Flex>
          <Text fontFamily={'heading_filled'} fontSize={{base: '3rem', md: '4rem'}}>GETTING HERE</Text>
          <GettingHereAccordian titleTextSize={{base: '2rem', md:'2.5rem', xl: '3rem'}} mainTextSize={mainTextSize}/>
        </Flex>
    </SectionContainer>
  </Section>
  );
};

export default Where;