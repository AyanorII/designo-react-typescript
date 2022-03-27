import React from "react";
import styled from "styled-components";
import { ParagraphInterface } from "../../modules/interfaces/ParagraphInterface";

const Paragraph = ({ children, color = "dark" }: ParagraphInterface) => {
  return <StyledParagraph color={color}>{children}</StyledParagraph>;
};

export default Paragraph;

const StyledParagraph = styled.p<ParagraphInterface>`
  color: ${(props) =>
    props.color === "light"
      ? props.theme.colors.primary.light
      : props.theme.colors.primary.dark};
  font-size: 0.9375rem;
  line-height: 25px;
  font-weight: normal;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;
