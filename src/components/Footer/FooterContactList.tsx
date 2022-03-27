import React from "react";
import styled from "styled-components";
import FooterContactInfo from "./FooterContactInfo";

type Props = {};

const contacts = [
  {
    heading: "Designo Central OFfice",
    description: {
      firstLine: "3886 Wellington Street ",
      secondLine: "Toronto, Ontario M9C 3J5",
    },
  },
  {
    heading: "Contact Us (Central Office)",
    description: {
      firstLine: "P : +1 253-863-8967",
      secondLine: "M : contact@designo.co",
    },
  },
];

const FooterContactList = (props: Props) => {
  return (
    <StyledUl>
      {contacts.map((contact) => {
        const { heading, description } = contact;
        return (
          <FooterContactInfo
            key={heading}
            heading={heading}
            firstLine={description.firstLine}
            secondLine={description.secondLine}
          />
        );
      })}
    </StyledUl>
  );
};

export default FooterContactList;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    grid-area: info;
    justify-self: start;
    gap: 4rem;
  }
`;
