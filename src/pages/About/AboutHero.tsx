import React from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import Card from "../../components/Card/Card";
import Content from "../../components/Typography/Content";
import AboutImage, { AboutImageProps } from "./AboutImage";
import bgMobile from "../../assets/about/mobile/bg-pattern-hero-about-mobile.svg";
import bgDesktop from "../../assets/about/desktop/bg-pattern-hero-about-desktop.svg";

type Props = {};

type AboutType = {
  heading: string;
  paragraph: string;
} & AboutImageProps;

const content: AboutType = {
  heading: "About us",
  paragraph:
    "Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.",
  images: {
    mobile: "/about/mobile/image-about-hero.jpg",
    tablet: "/about/tablet/image-about-hero.jpg",
    desktop: "/about/desktop/image-about-hero.jpg",
  },
};

const AboutHero = (props: Props) => {
  const { heading, paragraph, images } = content;

  return (
    <Container className="full">
      <StyledCard>
        <StyledIntro>
          <AboutImage images={images} />
          <Content
            heading={heading}
            variant="h1"
            headingColor="primary"
            paragraph={paragraph}
            paragraphColor="light"
          />
        </StyledIntro>
      </StyledCard>
    </Container>
  );
};

export default AboutHero;

const StyledIntro = styled.div`

  @media (min-width: 1024px) {
    display: grid;
    grid-auto-flow: revert;
    grid-template-columns: 1.25fr 1fr;

    img {
      order: 1;
      height: 100%;
    }
  }

  @media (min-width: 1440px) {
    grid-template-columns: 1.75fr 1fr;

  }

  & > div {
    padding: 5rem 8%;
    background-image: url(${bgMobile});
    background-position: 30% 20%;
    background-repeat: no-repeat;

    @media (min-width: 1024px) {
      background-image: url(${bgDesktop});
      padding: 5.4375rem 4rem;
    }

    @media (min-width: 1440px) {
      padding: 8.4375rem 10rem 8.4375rem 5.9375rem;
    }
  }
`;

const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.primary.main};
  text-align: center;
`;
