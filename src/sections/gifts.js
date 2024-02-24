import React from 'react';
import SectionContainer from '../components/section_container';
import Section from '../components/section';
import { Flex, Heading, Image, Stack, Text, Spacer, UnorderedList, ListItem, Link } from '@chakra-ui/react';
import gifts from '../assets/images/gifts.png';


const Gifts = () => {
  const mainTextSize = {base: "1.25rem", md: "1.25rem", lg: "1.5rem", xl: '2rem'};
  return (
  <Section sectionId={'gifts'} backgroundColor={"off_white"} padding={{base: "3rem 0", md: "5rem 0"}}>
    <SectionContainer xMargin={{base: '1rem', md: '10rem', lg: '12rem', xl: '26rem'}}>
        <Stack spacing={"1rem"} align={'center'}
          width={{base: '25rem', md: '32rem', lg: '36rem', xl: '40rem'}}
          minWidth={'30vw'}
          maxWidth={'90vw'}>
            <Heading fontFamily={"heading_shadow"} fontSize={{base: "6rem", md: "6rem", lg: "8rem", xl: '13rem'}} color={'dark_green'} textAlign={'center'}>GIFTS</Heading>
            <Image src={gifts} flexBasis={'0'} maxW={{base: '18rem', md: '22rem', lg: '30rem', xl: '40rem'}} objectFit={'cover'}/>
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
        maxWidth={'90vw'}
        spacing={'1rem'}
        >
          <Text w='100%' fontFamily={"main_text"} fontSize={mainTextSize} marginTop={{base: '1rem', lg: '0'}}>
            Your presence alone will make us more than happy. 
            <br/>
            <br/>
            However, if you're determined to give something, we have a collection pot you can add to.
            <br/>
            <br/>
            The money will be split equally between: 
          </Text>
          <UnorderedList w='100%' fontFamily={"main_text"} fontSize={mainTextSize} marginTop={{base: '1rem', lg: '0'}}>
            <ListItem><Link textDecoration={'underline'} textDecorationColor={'yellowish'} href='https://www.breadwinners.org.uk/' target='_blank'>Breadwinners</Link>, a London-based charity that provides employment and training for refugees and young people seeking asylum.
                      We've both been involved with them and can vouch for their fantastic work!
            </ListItem>
            <ListItem>A long-dreamed honeymoon trip to Japan in 2025</ListItem>
          </UnorderedList>
        </Flex>
    </SectionContainer>
  </Section>
  );
};

export default Gifts;