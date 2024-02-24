import React from 'react';
import brLogo from '../assets/images/brlogo.png';
import { Flex, Box, Image, Link } from '@chakra-ui/react';

const Navbar = ({ display }) => {
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true);

  const handleNavigation = React.useCallback(() => {
    if (typeof window !== 'undefined') {
      // Using a threshold of 100 to add some debounce to the hide/show action
      if (window.scrollY > lastScrollY && window.scrollY > 100) { // Scroll Down
        setIsVisible(false);
      } else { // Scroll Up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleNavigation);

      return () => {
        window.removeEventListener('scroll', handleNavigation);
      };
    }
  }, [handleNavigation]);

  return (
    <Flex
      display={display}
      as="nav"
      align="center"
      justify="space-between"
      m="0 0"
      padding="0 11.5rem"
      color="off_white"
      fontFamily="heading_shadow"
      fontSize={{base: '1.5rem', md: '2rem', lg: '2.5rem'}}
      position="fixed"
      maxHeight={"10rem"}
      top="0"
      right="0"
      left="0"
      zIndex="1000"
      bg="dark_green"
      style={{ 
        transform: isVisible ? 'none' : 'translateY(-100%)', 
        transition: 'transform 0.3s ease-in-out',
        opacity: isVisible ? 1 : 0,
        transitionProperty: 'transform, opacity',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-in-out'
      }}
    >
      <Box as="a" href="#where" p="2" pb="0" visibility={isVisible ? 'visible' : 'hidden'} borderBottom="1px" borderColor="transparent" _hover={{borderColor: 'yellowish'}} >WHERE</Box>
      <Box as="a" href="#accomodation" p="2" pb="0" visibility={isVisible ? 'visible' : 'hidden'} borderBottom="1px" borderColor="transparent" _hover={{borderColor: 'yellowish'}} >ACCOMMODATION</Box>
      <Link href="#home">
        <Image src={brLogo} width={{base: '8rem', md: '9rem', lg: '10rem'}} objectFit={'contain'} transform="translateY(1rem)"/>
      </Link> 
      <Box as="a" href="#rsvp" p="2" pb="0" visibility={isVisible ? 'visible' : 'hidden'} borderBottom="1px" borderColor="transparent" _hover={{borderColor: 'yellowish'}} fontFamily="heading_filled" >RSVP</Box>
      <Box as="a" href="#gifts" p="2" pb="0" visibility={isVisible ? 'visible' : 'hidden'} borderBottom="1px" borderColor="transparent" _hover={{borderColor: 'yellowish'}} >GIFTS</Box>
      <Box as="a" href="#contact" p="2" pb="0" visibility={isVisible ? 'visible' : 'hidden'} borderBottom="1px" borderColor="transparent" _hover={{borderColor: 'yellowish'}} >CONTACT</Box>
    </Flex>
  );
};

export default Navbar;
