import React from 'react';
import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react';

const GettingHere = () => {
  return (
    <Box>
      <Text fontFamily={'heading_filled'} fontSize={{base: '2rem'}}>By Car:</Text>
      <UnorderedList fontFamily={'main_text'} fontSize={{base: '1.5rem'}} padding={'0 0 1rem 2rem'}>
        <ListItem>From the M5, take the A361 to Barnstaple</ListItem>
        <ListItem>3.5 hours from London and Birmingham</ListItem>
        <ListItem>Large car park on site</ListItem>
      </UnorderedList>
      <Text fontFamily={'heading_filled'} fontSize={{base: '2rem'}}>By Train:</Text>
      <UnorderedList fontFamily={'main_text'} fontSize={{base: '1.5rem'}} padding={'0 0 1rem 2rem'}>
        <ListItem>Barnstaple train station (5 miles away)</ListItem>
        <ListItem>Change at Exeter St David's if coming from London Paddington or Birmingham New Street.</ListItem>
      </UnorderedList>
    </Box>
  );
};

export default GettingHere;
