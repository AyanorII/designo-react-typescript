import React from 'react'
import styled from 'styled-components';
import Logo from "../Logo/Logo"
import FooterContactList from './FooterContactList';
import FooterLinks from './FooterLinks';
import FooterSocialMedia from './FooterSocialMedia';

type Props = {}

const Footer = (props: Props) => {
  return (
    <StyledFooter>
      <Logo variant="light" />
      <FooterLinks />
      <FooterContactList />
      <FooterSocialMedia />
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  background: ${props => props.theme.colors.primary.dark};
  padding: 15.8125rem 1.5rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;
