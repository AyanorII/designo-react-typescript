import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import Container from "../Container";
import Content from "../Typography/Content";
import background from "../../assets/shared/desktop/bg-pattern-three-circles.svg";
import Button from "../Button/Button";

type Props = {};

const Jumbotron = (props: Props) => {
  const heading = "Let’s talk about your project";
  const paragraph =
    "Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.";

  return (
    <StyledContainer>
      <StyledJumbotron>
        <Content
          heading={ heading }
          headingColor="primary"
          variant="h2"
          paragraph={ paragraph }
          paragraphColor="light"
          color="primary"
        />
        <Button to="/contact" variant="light">
          Get in touch
        </Button>
      </StyledJumbotron>
    </StyledContainer>
  );
};

export default Jumbotron;

const StyledContainer = styled(Container)`
  position: absolute;
  bottom: -475px;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledJumbotron = styled(Card)`
  gap: 2rem;
  background-color: ${(props) => props.theme.colors.primary.main};
  background-image: url(${background});
  background-size: 85%;
  background-position: 0% 50%;
  padding: 4rem 1.5rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    line-height: 36px;
    text-transform: unset;
  }

  @media (min-width: 768px) {
    padding: 3.5625rem 20%;

    h2{
      font-size: 2.5rem;
    }
  }

  @media (min-width: 1440px) {
    grid-template-columns: 1fr 1fr;
    padding: 4.5rem 5.9375rem;

    a {
      justify-self: end;
    }
  }
`;
