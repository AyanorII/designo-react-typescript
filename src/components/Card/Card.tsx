import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  className?: string
};

const Card = ({ children, className }: Props) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};

export default Card;

const StyledCard = styled.div<Props>`
  border-radius: 8px;
  overflow: hidden;
  display: grid;
  place-items: center;
`;
