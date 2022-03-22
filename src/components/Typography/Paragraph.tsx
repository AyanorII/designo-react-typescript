import React from "react";
import styled from "styled-components";

interface Props {
  color: "light" | "dark";
  children: string;
}

const Paragraph = ({ children, color }: Props) => {
  return <StyledParagraph color={color}>{children}</StyledParagraph>;
};

export default Paragraph;

const StyledParagraph = styled.p<Props>`
  color: ${(props) =>
    props.color === "light"
      ? props.theme.colors.primary.light
      : props.theme.colors.primary.dark};
  text-align: center;
  font-size: 0.9375rem;
  line-height: 25px;
  font-weight: normal
`;
