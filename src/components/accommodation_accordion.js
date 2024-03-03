import React from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, ListItem, Text, UnorderedList } from '@chakra-ui/react';

const AccommodationAccordian = ({titleTextSize, mainTextSize}) => {
  return (
    <Accordion width={'100%'}>
      <AccordionItem borderTop={'solid 2px'} borderColor={'yellowish'}>
        <AccordionButton>
          <Text fontFamily={'heading_filled'} fontSize={titleTextSize}>Manor house</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Text fontFamily={'main_text'} fontSize={mainTextSize} padding={'0 0 1rem 2rem'}>
          The manor house has lots of space if you want somewhere to crash. There are sofas and areas for makeshift beds. 
          Remember to bring a sleeping bag and blow up bed if you need it!
          </Text>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderTop={'solid 2px'} borderColor={'yellowish'}>
      <AccordionButton>
      <Text fontFamily={'heading_filled'} fontSize={titleTextSize}>Camping</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Text fontFamily={'main_text'} fontSize={mainTextSize} padding={'0 0 1rem 2rem'}>
            For the oudoorsy ones, the estate has a large camping area for tents and camper vans.
            You'll find great facilities with high quality showers, toilets and an area to get ready. 
          </Text>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderTop={'solid 2px'} borderColor={'yellowish'}>
      <AccordionButton>
      <Text fontFamily={'heading_filled'} fontSize={titleTextSize}>Glamping</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Text fontFamily={'main_text'} fontSize={mainTextSize} padding={'0 0 1rem 2rem'}>
            For a bit more comfort, you can hire a yurt from Fri-Mon (3 nights) on the estate:
          </Text>
          <UnorderedList fontFamily={'main_text'} fontSize={mainTextSize} padding={'0 0 1rem 2rem'}>
            <ListItem>2-3 people: £200</ListItem>
            <ListItem>4 people: £250</ListItem>
            <ListItem>8 people: £350</ListItem>
          </UnorderedList>
          <Text fontFamily={'main_text'} fontSize={mainTextSize} padding={'0 0 1rem 2rem'}>
            Please indicate in the RSVP form if you're interested and we'll book these for you.
            You'll find great facilities with high quality showers, toilets and an area to get ready.         
          </Text>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderY={'solid 2px'} borderColor={'yellowish'}>
      <AccordionButton>
      <Text fontFamily={'heading_filled'} fontSize={titleTextSize}>Book your own</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Text fontFamily={'main_text'} fontSize={mainTextSize} padding={'0 0 1rem 2rem'}>
            There are plenty of locations you can book around the area.
            We've put together a list of places, which includes recommendations by the venue, as well as highly-rated AirBnBs.
            <br/>
            <br/>
            Booked a place? Let us know so we can strike it from the list.          
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccommodationAccordian;
