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
  box-shadow: 0px 0px 20px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: grid;
  place-items: center;
`;
