import React from 'react'
import styled from 'styled-components';

type Props = {
  children: React.ReactNode
  className?: string
}

const Container = ({children, className}: Props) => {
  return (
    <StyledContainer className={className}>{children}</StyledContainer>
  )
}

const StyledContainer = styled.div`
  width: 87%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 89%;
  }

  @media (min-width: 1440px) {
    width: 77%;
  }
`;

export default Container
