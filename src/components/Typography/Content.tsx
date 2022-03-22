import React from 'react'
import styled from 'styled-components';
import MainHeading from './MainHeading';
import Paragraph from './Paragraph';

type Props = {
  heading: string;
  paragraph: string;
}

const Content = ({heading, paragraph}: Props) => {
  return (
    <ContentContainer>
      <MainHeading>
        {heading}
      </MainHeading>
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
