import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const LargeTitle = ({ textSize, jMargin, pMargin, lMargin }) => {
  return (
    <Flex
      direction={'column'}
      align={'center'}
      justifyContent={'center'}
      width={{base: '25rem', md: '32rem', lg: '36rem', xl: '40rem'}}
      minWidth={'30vw'}
      maxWidth={'90vw'}
      >
      <Heading 
        fontFamily={"heading_shadow"} fontSize={textSize} color={'off_white'}
        sx={{ mb: jMargin }} 
      >
        JOSH
      </Heading>
      <Heading 
        fontFamily={"heading_shadow"} fontSize={textSize} color={'yellowish'}
        sx={{ transform: `translateY(${pMargin})` }} 
      >
        +
      </Heading>
      <Heading 
        fontFamily={"heading_shadow"} fontSize={textSize} color={'off_white'}
        sx={{ mt: lMargin }} 
      >
        LYDIA
      </Heading>
    </Flex>
  );
};

export default LargeTitle;
