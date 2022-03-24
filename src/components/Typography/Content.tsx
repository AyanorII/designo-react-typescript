import React from 'react'
import styled from 'styled-components';
import Heading from './Heading';
import Paragraph from './Paragraph';
import HeadingInterface from "../../modules/interfaces/HeadingInterface";

interface ContentInterface extends Omit<HeadingInterface, "children"> {
  heading: string;
  paragraph: string;
  children?: string
}

const Content = ({ heading, variant, paragraph, color }: ContentInterface) => {
  return (
    <ContentContainer>
      <Heading variant={variant} color={color}>
        {heading}
      </Heading>
      <Paragraph color="light">{paragraph}</Paragraph>
    </ContentContainer>
  );
};

export default Content

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
