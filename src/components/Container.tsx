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
`;

export default Container
