import React from 'react'
import styled from 'styled-components';

type Props = {
  children: React.ReactNode
}

const Container = ({children}: Props) => {
  return (
    <StyledContainer>{children}</StyledContainer>
  )
}

const StyledContainer = styled.div`
  width: 87%;
  margin: 0 auto;
`;

export default Container
