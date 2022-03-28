import React from "react";
import styled from "styled-components";
import background from "../../assets/shared/desktop/bg-pattern-small-circle.svg";
import Card from "../Card/Card";
import Container from "../Container";
import Content from "../Typography/Content";

export type IntroProps = {
  heading: string;
  paragraph: string;
};

const Intro = ({ heading, paragraph }: IntroProps) => {
  return (
    <Container className="full">
      <StyledIntro>
        <Content
          heading={heading}
          headingColor="primary"
          variant="h1"
          paragraph={paragraph}
          paragraphColor="light"
        />
      </StyledIntro>
    </Container>
  );
};

export default Intro;

const StyledIntro = styled(Card)`
  background-color: ${(props) => props.theme.colors.primary.main};
  background-image: url(${background});
  background-size: 33%;
  padding: 6.5625rem 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    padding-inline: 20%;
  }

  @media (min-width: 1024px) {
    * {
      text-align: center;
    }
  }
`;
