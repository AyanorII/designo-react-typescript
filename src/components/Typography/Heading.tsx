import React from "react";
import styled from "styled-components";

interface Props {
  children: string;
  variant: "h1" | "h2";
  color?: "dark" | "primary";
}

const Heading = ({ children, variant }: Props) => {
  return variant === "h1" ? (
    <StyledH1 variant={variant}>{children}</StyledH1>
  ) : (
    <StyledH2 variant={variant}>{children}</StyledH2>
  );
};

const StyledH1 = styled.h1<Props>`
  color: ${(props) => props.theme.colors.primary.light};
  font-size: 2rem;
  font-weight: normal;
  line-height: 36px;
  text-align: center;
`;

const StyledH2 = styled.h2<Props>`
  color: ${(props) =>
    props.color === "dark"
      ? props.theme.colors.primary.dark
      : props.theme.colors.primary.primary};
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 5px;
  line-height: 26px;
  text-align: center;
  text-transform: uppercase;
`;

export default Heading;
