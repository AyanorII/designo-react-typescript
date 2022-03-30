import React from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import { ContactProps } from "../../components/ContactInfo/ContactInfo";
import ContactList from "../../components/ContactInfo/ContactList";
import Container from "../../components/Container";
import Heading from "../../components/Typography/Heading";
import Map, { MapInterface } from "./Map";
import background from "../../assets/shared/desktop/bg-pattern-small-circle.svg";

export type LocationProps = {
  map: MapInterface;
  country: string;
  info: ContactProps[];
};

const LocationInfo = ({ map, country, info }: LocationProps) => {
  const { small, large } = map;

  return (
    <StyledContainer className="full">
      <Map small={small} large={large} />
      <Contact>
        <Heading variant="h2" color="primary">
          {country}
        </Heading>
        <ContactList contactInfo={info} />
      </Contact>
    </StyledContainer>
  );
};

export default LocationInfo;

const StyledContainer = styled(Container)`
  @media (min-width: 768px) {
    display: grid;
    grid-auto-rows: 326px;
    gap: 2.5rem;
  }
`;

const Contact = styled(Card)`
  background-color: ${(props) => props.theme.colors.secondary.main}40;
  background-image: url(${background});
  background-size: 85%;
  background-position: 0% 50%;
  background-repeat: no-repeat;
  border-radius: 8px;
  padding: 5rem 6.4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  @media (min-width: 768px) {
    padding: 5.5rem 9.7%;
    justify-content: center;
    text-align: left;
    place-items: unset;
  }

  h2 {
    color: ${(props) => props.theme.colors.primary.main};
    font-size: 2rem;
    text-transform: unset;

    @media (min-width: 768px) {
      font-size: 2.5rem;
      line-height: 48px;
    }
  }

  h4,
  p {
    color: ${(props) => props.theme.colors.primary.dark};
  }

  ul {
    gap: 1.5rem;

    @media (min-width: 768px) {
      gap: 5rem;
    }
  }
`;
