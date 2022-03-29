import React from "react";
import styled from "styled-components";

export type AboutImageProps = {
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

const AboutImage = ({ images }: AboutImageProps) => {
  const { mobile, tablet, desktop } = images;

  return (
    <>
      <StyledImg
        className="mobile"
        src={require("../../assets" + mobile)}
      />
      <StyledImg
        className="tablet"
        src={require("../../assets" + tablet)}
      />
      <StyledImg
        className="desktop"
        src={require("../../assets" + desktop)}
      />
    </>
  );
};

export default AboutImage;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;

  &.tablet,
  &.desktop {
    display: none;
  }

  @media (min-width: 768px) {
    &.mobile {
      display: none;
    }

    &.tablet {
      display: block;
    }
  }

  @media (min-width: 1024px) {
    &.tablet {
      display: none;
    }

    &.desktop {
      display: block;
    }
  }
`;
