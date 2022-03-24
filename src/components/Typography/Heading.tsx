import React from "react";
import styled from "styled-components";
import HeadingInterface from "../../modules/interfaces/HeadingInterface";

const Heading = ({ children, variant, color }: HeadingInterface) => {
  return variant === "h1" ? (
    <StyledH1 variant={variant} color={color}>
      {children}
    </StyledH1>
  ) : (
    <StyledH2 variant={variant} color={color}>
      {children}
    </StyledH2>
  );
};

const StyledH1 = styled.h1<HeadingInterface>`
  color: ${(props) => props.theme.colors.primary.light};
  font-size: 2rem;
  font-weight: normal;
  line-height: 36px;
  text-align: center;
`;

const StyledH2 = styled.h2<HeadingInterface>`
  color: ${(props) =>
    props.color === "dark"
      ? props.theme.colors.primary.dark
      : props.theme.colors.primary.light};
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 5px;
  line-height: 26px;
  text-align: center;
  text-transform: uppercase;
`;

export default Heading;
