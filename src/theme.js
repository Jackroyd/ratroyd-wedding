import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  breakpoints: {
    base: '0px',
    sm: '640px',
    md: '900px',
    lg: '1300px',
    xl: '1900px',
  },
  colors: {
    dark_green: '#197B46',
    light_green: '#9BD299',
    off_white: '#FAF5DF',
    yellowish: '#E3B23C',
  },
  fonts: {
    heading_shadow: 'Londrina Shadow, cursive',
    heading_filled: 'Londrina Solid, cursive',
    fancy: 'La Belle Aurore, cursive',
    main_text: 'Manjari, sans-serif', 
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 'normal', 
      }
    },
    Button: {
      variants: {
        main: {
          paddingY: '2.5rem',
          fontFamily: 'heading_filled',
          color: 'off_white',
          bg: 'none',
          borderRadius: 'none',
          border: 'solid',
          borderColor: 'off_white',
          boxShadow: '2px 2px 0 0 #FAF5DF',
          transition: 'all 0.2s ease-in-out',    
          _hover: {
            boxShadow: '4px 4px 0 0 #FAF5DF',
            transform: 'translate(-2px, -2px)',          
          },
        },
      },
    },
    Link: {
      baseStyle: {
        cursor: 'pointer',
      },
    },
  }
});

export default customTheme;