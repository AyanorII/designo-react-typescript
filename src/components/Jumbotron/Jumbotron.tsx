import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import Container from "../Container";
import Content from "../Typography/Content";
import background from "../../assets/shared/desktop/bg-pattern-small-circle.svg";
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
          heading={heading}
          variant="h2"
          paragraph={paragraph}
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
`;
