import React from "react";
import styled from "styled-components";
import Container from "../Container";
import Logo from "../Logo/Logo";
import FooterContactList from "./FooterContactList";
import FooterLinks from "./FooterLinks";
import FooterSocialMedia from "./FooterSocialMedia";

type Props = {};

const Footer = (props: Props) => {
  return (
    <StyledFooter>
      <StyledContainer>
        <Logo variant="light" />
        <FooterLinks />
        <FooterContactList />
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
