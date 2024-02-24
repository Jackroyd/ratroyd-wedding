import React from 'react';
import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Section = ({ sectionId, margin, padding, backgroundColor, children }) => {
  return (
    <Flex
      minH="100vh" // Sets the minimum height to 100% of the viewport height
      w="100vw" // Sets the width to 100%
      bg={backgroundColor} // Uses the backgroundColor prop for the background color
      m={margin} // Uses the margin prop for the margin
      p={padding} // Uses the padding prop for the padding
      align="center"
      justify="center"
      id={sectionId} // Uses the sectionId prop for the id
        >
      {children}
    </Flex>
  );
};

Section.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
