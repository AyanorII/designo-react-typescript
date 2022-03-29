import React from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import Container from "../../components/Container";
import Content from "../../components/Typography/Content";
import AboutImage, { AboutImageProps } from "./AboutImage";
import { ContentInterface } from "../../components/Typography/Content";
import background from "../../assets/about/mobile/bg-pattern-hero-about-mobile.svg";

export type AboutCardProps = {
  revert?: boolean;
} & AboutImageProps &
  ContentInterface;

const AboutCard = ({ images, heading, paragraph, revert }: AboutCardProps) => {
  return (
    <Container className="full">
      <StyledCard className={revert ? "revert" : ""}>
        <AboutImage images={images} />
        <StyledContent
          heading={heading}
          headingColor="dark"
          variant="h2"
          paragraph={paragraph}
          paragraphColor="dark"
        />
      </StyledCard>
    </Container>
  );
};

export default AboutCard;

const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.secondary.main}50;
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 7.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1.25fr;

    &.revert {
      grid-template-columns: 1.25fr 1fr;

      img {
        order: 1;
      }
    }
  }
`;

const StyledContent = styled(Content)`
  padding: 5rem 6.4%;
  background: url(${background});
  background-position: 25% -55%;
  gap: 1.5rem;
  height: 100%;
  justify-content: center;

  h2 {
    color: ${(props) => props.theme.colors.primary.main};
    font-size: 2rem;
    line-height: 36px;
  }

  @media (min-width: 1024px) {
    padding: 80px 14%;
  }

  @media (min-width: 1440px) {
    padding: 154px 14%;
  }
`;
