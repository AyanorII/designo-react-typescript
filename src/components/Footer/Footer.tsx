import React from "react";
import styled from "styled-components";
import Container from "../Container";
import Logo from "../Logo/Logo";
import ContactList from "../ContactInfo/ContactList";
import FooterLinks from "./FooterLinks";
import FooterSocialMedia from "./FooterSocialMedia";

type Props = {};

const contacts = [
  {
    heading: "Designo Central OFfice",
    firstLine: "3886 Wellington Street ",
    secondLine: "Toronto, Ontario M9C 3J5",
  },
  {
    heading: "Contact Us (Central Office)",
    firstLine: "P : +1 253-863-8967",
    secondLine: "M : contact@designo.co",
  },
];

const Footer = (props: Props) => {
  return (
    <StyledFooter>
      <StyledContainer>
        <Logo variant="light" />
        <FooterLinks />
        <ContactList contactInfo={contacts} />
        <FooterSocialMedia />
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background: ${(props) => props.theme.colors.primary.dark};
`;

const StyledContainer = styled(Container)`
  padding-block: 15.8125rem 4rem;
  display: grid;
  align-items: center;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-areas:
      "logo    links   links"
      "info    info    social";
    gap: 1rem;
    padding-block: 13rem 6rem;
  }
`;
