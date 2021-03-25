import React from 'react';

import {
  Container,
  Heading,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';

function HomePage() {
  return (
    <Container>
      <Heading textAlign="center" fontSize="2xl" margin="5px">
        Company Stats
      </Heading>
      <StatGroup textAlign="center">
        <Stat>
          <StatLabel>Credits Given</StatLabel>
          <StatNumber>150</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" /> 33.25%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Credits Due</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>
    </Container>
  );
}
export default HomePage;
