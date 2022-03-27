import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import HeadingInterface, {
  HeadingColor,
} from "../../modules/interfaces/HeadingInterface";
import { ParagraphColor } from "../../modules/interfaces/ParagraphInterface";

type ContentInterface = {
  heading: string;
  paragraph: string;
  headingColor: HeadingColor;
  paragraphColor: ParagraphColor;
} & HeadingInterface;

const Content = ({
  heading,
  variant,
  paragraph,
  headingColor,
  paragraphColor,
}: ContentInterface) => {
  return (
    <ContentContainer>
      <Heading variant={variant} color={headingColor}>
        {heading}
      </Heading>
      <Paragraph color={paragraphColor}>{paragraph}</Paragraph>
    </ContentContainer>
  );
};

export default Content;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;
