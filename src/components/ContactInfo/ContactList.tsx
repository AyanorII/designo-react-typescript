import React from "react";
import styled from "styled-components";
import ContactInfo, { ContactProps } from "./ContactInfo";

type Props = {
  contactInfo: ContactProps[];
};

const ContactList = ({contactInfo}: Props) => {
  return (
    <StyledUl>
      {contactInfo.map((contact) => {
        const { heading, firstLine, secondLine } = contact;
        return (
          <ContactInfo
            key={heading}
            heading={heading}
            firstLine={firstLine}
            secondLine={secondLine}
          />
        );
      })}
    </StyledUl>
  );
};

export default ContactList;

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

  @media (min-width: 1440px) {
    width: 100%;
    gap: 15%;
  }
`;
