import React from 'react'
import styled from 'styled-components';
import Heading from './Heading';
import Paragraph from './Paragraph';

type Props = {
  heading: string;
  paragraph: string;
}

const Content = ({heading, paragraph}: Props) => {
  return (
    <ContentContainer>
      <Heading variant="h1">
        {heading}
      </Heading>
      <Paragraph color="light">
        {paragraph}
      </Paragraph>
    </ContentContainer>
  );
}

export default Content

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
