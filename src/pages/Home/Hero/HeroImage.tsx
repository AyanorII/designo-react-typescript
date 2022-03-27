import React from 'react'
import styled from 'styled-components';
import iphone from "../../../assets/home/desktop/image-hero-phone.png"

type Props = {}

const HeroImage = (props: Props) => {
  return (
    <Img src={iphone} />
  )
}

export default HeroImage

const Img = styled.img`
  position: absolute;
  bottom: -375px;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 1440px) {
    left: 75%;
    bottom: -275px;
  }
`;
