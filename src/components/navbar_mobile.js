import React from 'react';
import burgerImage from '../assets/images/burger.png';
import { Flex, Box, Image, useDisclosure, Drawer, DrawerContent, DrawerCloseButton, DrawerBody, Stack } from '@chakra-ui/react';
import brlogo from '../assets/images/brlogo.png';

const NavbarMobile = ({ display }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Image display={display} position={'absolute'} src={brlogo} mt={'2rem'} width="8rem" objectFit={'cover'} left="50%" transform="translateX(-50%)"/>
      <Flex 
      display={display} 
      position={'fixed'}
      marginY='1rem'
      top="0"
      right="1rem"
      zIndex="1000">
        <Image src={burgerImage} width="3rem" objectFit={'cover'} onClick={onOpen}/>
        <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
          <DrawerContent bg={'off_white'}>
            <DrawerCloseButton />
            <DrawerBody>
              <Stack spacing="1rem" direction="column" align="center" justify="center" color={'dark_green'} fontFamily="heading_shadow" fontSize={'3rem'}>
                <Box as="a" href="#where" borderBottom="1px" borderColor="transparent" _hover={{borderColor: 'yellowish'}} >WHERE</Box>
                <Box as="a" href="#accomodation" borderBottom="1px" borderColor="transparent" _hover={{borderColor: 'yellowish'}} >ACCOMMODATION</Box>
                <Box as="a" href="#rsvp" borderBottom="1px" borderColor="transparent" _hover={{borderColor: 'yellowish'}} fontFamily="heading_filled">RSVP</Box>
                <Box as="a" href="#gifts" borderBottom="1px" borderColor="transparent" _hover={{borderColor: 'yellowish'}} >GIFTS</Box>
                <Box as="a" href="#contact" borderBottom="1px" borderColor="transparent" _hover={{borderColor: 'yellowish'}} >CONTACT</Box>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </div>
  );
};

export default NavbarMobile;
