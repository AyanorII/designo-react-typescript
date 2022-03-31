import React from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import Container from "../../components/Container";
import Content, { ContentInterface } from "../../components/Typography/Content";
import Form from "./Form";
import background from "../../assets/contact/desktop/bg-pattern-hero-desktop.svg";

type Props = {};

const content: ContentInterface = {
  heading: "Contact",
  headingColor: "primary",
  variant: "h1",
  paragraph:
    "Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.",
  paragraphColor: "light",
};

const ContactHero = () => {
  const { heading, headingColor, variant, paragraph, paragraphColor } = content;

  return (
    <Container className="full">
      <StyledCard>
        <Content
          heading={heading}
          headingColor={headingColor}
          variant={variant}
          paragraph={paragraph}
          paragraphColor={paragraphColor}
        />
        <Form />
      </StyledCard>
    </Container>
  );
};

export default ContactHero;

const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.primary.main};
  background-image: url(${background});
  padding: 4.5rem 6.4%;
  gap: 2.5rem;

  @media (min-width: 1440px){
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
`;
