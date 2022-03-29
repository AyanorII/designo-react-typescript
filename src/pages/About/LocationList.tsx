import React from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import LocationIcon, { LocationIconProps } from "./LocationIcon";

const locations: LocationIconProps[] = [
  {
    location: "Canada",
    src: "/shared/desktop/illustration-canada.svg",
    href: "/location",
  },
  {
    location: "Australia",
    src: "/shared/desktop/illustration-australia.svg",
    href: "/location",
  },
  {
    location: "United Kingdom",
    src: "/shared/desktop/illustration-united-kingdom.svg",
    href: "/location",
  },
];

const LocationList = () => {
  return (
    <Container>
      <StyledUl>
        {locations.map((country) => {
          const { href, src, location } = country;

          return (
            <li key={location}>
              <LocationIcon href={href} src={src} location={location} />
            </li>
          );
        })}
      </StyledUl>
    </Container>
  );
};

export default LocationList;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-block: 7.5rem;
  text-align: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;
