import React from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import Container from "../../components/Container";

export interface MapInterface {
  small: string;
  large: string;
}

const Map = ({ small, large }: MapInterface) => {
  return (
    <StyledCard>
      <StyledImg
        src={require("../../assets/locations" + small)}
        className="small"
      />
      <StyledImg
        src={require("../../assets/locations" + large)}
        className="large"
      />
    </StyledCard>
  );
};

export default Map;

const StyledCard = styled(Card)`
  width: 100%;
  border-radius: 0;

  @media (min-width: 768px) {
    border-radius: 8px;
  }

  @media (min-width: 1440px) {
    order: 1;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 375px;
  object-fit: cover;

  &.large {
    display: none;
  }

  @media (min-width: 1440px) {
    &.small {
      display: none;
    }

    &.large {
      display: block;
    }
  }
`;
