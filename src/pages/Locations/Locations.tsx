import React from "react";
import styled from "styled-components";
import LocationInfo, { LocationProps } from "./LocationInfo";

const contacts: LocationProps[] = [
  {
    country: "Canada",
    map: {
      small: "/tablet/image-map-canada.png",
      large: "/desktop/image-map-canada.png",
    },
    info: [
      {
        heading: "Designo Central Office",
        firstLine: "3886 Wellington Street",
        secondLine: "Toronto, Ontario M9C 3J5",
      },
      {
        heading: "Contact",
        firstLine: "P : +1 253-863-8967",
        secondLine: "M : contact@designo.co",
      },
    ],
  },
  {
    country: "Australia",
    map: {
      small: "/tablet/image-map-australia.png",
      large: "/desktop/image-map-australia.png",
    },
    info: [
      {
        heading: "Designo AU Office",
        firstLine: "19 Balonne Street",
        secondLine: "New South Wales 2443",
      },
      {
        heading: "Contact",
        firstLine: "P : (02) 6720 9092",
        secondLine: "M : contact@designo.au",
      },
    ],
  },
  {
    country: "United Kingdom",
    map: {
      small: "/tablet/image-map-uk.png",
      large: "/desktop/image-map-united-kingdom.png",
    },
    info: [
      {
        heading: "Designo UK Office",
        firstLine: "13 Colorado Way",
        secondLine: "Rhyd-y-fro SA8 9GA",
      },
      {
        heading: "Contact",
        firstLine: "P : 078 3115 1400",
        secondLine: "M : contact@designo.uk",
      },
    ],
  },
];

const Locations = () => {
  return (
    <StyledUl>
      {contacts.map((contact) => {
        const { country, map, info } = contact;

        return (
          <li key={country}>
            <LocationInfo country={country} map={map} info={info} />
          </li>
        );
      })}
    </StyledUl>
  );
};

export default Locations;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (min-width: 1440px) {
    li:nth-of-type(odd) > div {
      grid-template-columns: 2fr 1fr;
    }

    li:nth-of-type(even) > div {
      grid-template-columns: 1fr 2fr;

      // Map
      & > div {
        order: 0;
      }
    }
  }
`;
