import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const SectionContainer = ({ children, xMargin }) => {
  return (
    <Box
      marginY="0"
      marginX={xMargin}
      width="100%" 
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection={{base: 'column', md: 'row'}}
    >
      {children}
    </Box>
  );
};

SectionContainer.propTypes = {
  children: PropTypes.node,
};

export default SectionContainer;
