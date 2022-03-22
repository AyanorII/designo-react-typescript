import React from "react";
import styled from "styled-components";

type Props = { children: string };

const MainHeading = ({ children }: Props ) => {
  return <StyledHeading>{children}</StyledHeading>;
};

const StyledHeading = styled.h1`
  color: ${props => props.theme.colors.primary.light};
  font-size: 2rem;
  font-weight: normal;
  line-height: 36px;
  text-align: center;
`;

export default MainHeading;
