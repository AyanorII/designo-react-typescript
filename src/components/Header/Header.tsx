import { useState, useEffect } from 'react'
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import NavButton from '../Nav/NavButton';

interface Props {
  isNavOpen: boolean;
}

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? 'hidden' : 'unset'
  }, [isNavOpen])

  const toggleMenu = (): void => {
    setIsNavOpen(prev => !prev)
  }

  return (
    <StyledHeader isNavOpen={isNavOpen}>
      <Logo variant="dark" />
      <Nav isNavOpen={isNavOpen}/>
      <NavButton isNavOpen={isNavOpen} toggleMenu={toggleMenu} />
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header<Props>`
  background-color: ${(props) => props.theme.colors.primary.light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.25rem 1.5rem;
  position: relative;
  z-index: 10;
  box-shadow: 10px 30px 30px 100vh
    ${(props) => (props.isNavOpen ? "rgba(0, 0, 0, 0.75)" : "rgba(0, 0, 0, 0)")};
  transition: box-shadow 0.35s ease-in-out;
`;
