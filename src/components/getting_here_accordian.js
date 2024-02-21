import React from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, ListItem, Text, UnorderedList } from '@chakra-ui/react';

const GettingHereAccordian = ({titleTextSize, mainTextSize}) => {
  return (
    <Accordion width={'100%'}>
      <AccordionItem borderTop={'solid 1px'} borderColor={'yellowish'}>
        <AccordionButton>
          <Text fontFamily={'heading_filled'} fontSize={titleTextSize}>By Car:</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <UnorderedList fontFamily={'main_text'} fontSize={mainTextSize} padding={'0 0 1rem 2rem'}>
            <ListItem>From the M5, take the A361 to Barnstaple</ListItem>
            <ListItem>3.5 hours from London and Birmingham</ListItem>
            <ListItem>Large car park on site</ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderY={'solid 1px'} borderColor={'yellowish'}>
      <AccordionButton>
      <Text fontFamily={'heading_filled'} fontSize={titleTextSize}>By Train:</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <UnorderedList fontFamily={'main_text'} fontSize={mainTextSize} padding={'0 0 1rem 2rem'}>
            <ListItem>Barnstaple train station (5 miles away)</ListItem>
            <ListItem>Change at Exeter St David's if coming from London Paddington or Birmingham New Street.</ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default GettingHereAccordian;
