import React from 'react'
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import Container from '../../components/Container';
import Icon from '../../components/Icon/Icon'
import Heading from '../../components/Typography/Heading';

export type LocationIconProps = {
  href: string;
  location: string;
  src: string;
}

const LocationIcon = ({ src, href, location }: LocationIconProps) => {
  return (
    <StyledContainer>
      <Icon src={src} />
      <Heading variant="h3">{location}</Heading>
      <Button to={href} variant="primary">
        See Location
      </Button>
    </StyledContainer>
  );
};

export default LocationIcon

const StyledContainer = styled(Container)`
  display: grid;
  place-items: center;
  gap: 2rem;

  & > div {
    margin-bottom: 1rem;
  }
`;
