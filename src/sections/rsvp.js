import React from 'react';
import SectionContainer from '../components/section_container';
import Section from '../components/section';
import { Heading, Stack, Spacer, Box } from '@chakra-ui/react';


const Rsvp = () => {
  return (
  <Section sectionId={'rsvp'} backgroundColor={"dark_green"} padding={{base: "3rem 0", md: "5rem 0"}}>
    <SectionContainer xMargin={{base: '1rem', md: '10rem', lg: '12rem', xl: '26rem'}}>
        <Stack spacing={"1rem"} align={'center'}
          width={{base: '25rem', md: '32rem', lg: '36rem', xl: '40rem'}}
          minWidth={'30vw'}
          maxWidth={'90vw'}>
            <Heading fontFamily={"heading_shadow"} fontSize={{base: "6rem", md: "6rem", lg: "8rem", xl: '13rem'}} color={'off_white'} textAlign={'center'}>RSVP</Heading>
            <Heading fontFamily={"fancy"} fontSize={{base: "2rem", md: "3rem", lg: "4rem", xl:'6rem'}} color={'off_white'}>by 30th April</Heading>
        </Stack>
        <Spacer/>
        <Box
        marginTop={{base: '2rem', md: '0'}}
        width={{base: '32rem', md: '32rem', lg: '36rem', xl: '40rem'}}
        minWidth={'30vw'}
        maxWidth={'80vw'}
        height={'90vh'}
        >
        <iframe 
        title='rsvp_form' class="airtable-embed" src="https://airtable.com/embed/applTm8Tntu8ZsEbg/shrz0yQRG7wPgydhm?backgroundColor=yellow" 
        frameborder="0" onmousewheel="" width="100%" height="100%" style={{background: 'transparent', border: '1px solid yellowish'}}>
        </iframe>
        </Box>
    </SectionContainer>
  </Section>
  );
};

export default Rsvp;