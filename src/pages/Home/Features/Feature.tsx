import React from 'react'
import styled from 'styled-components';
import Icon from '../../../components/Icon/Icon';
import Heading from '../../../components/Typography/Heading';
import Paragraph from '../../../components/Typography/Paragraph';
import FeatureInterface from "../../../modules/interfaces/FeatureInterface"

const Feature = ({title, description, icon}: FeatureInterface) => {
  return (
    <StyledFeature>
      <Icon src={icon}/>
      <Heading variant="h2">{ title }</Heading>
      <Paragraph color="dark">{description}</Paragraph>
    </StyledFeature>
  )
}

export default Feature

const StyledFeature = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  text-align: center;

  img {
    margin-bottom: 1rem;
  }
`;
