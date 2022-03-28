import React from "react";
import styled from "styled-components";
import Container from "../../../components/Container";
import FeatureInterface from "../../../modules/interfaces/FeatureInterface";
import Feature from "./Feature";

const features: FeatureInterface[] = [
  {
    title: "Passionate",
    description:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    icon: "/home/desktop/illustration-passionate.svg",
  },
  {
    title: "Resourceful",
    description:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    icon: "/home/desktop/illustration-resourceful.svg",
  },
  {
    title: "Friendly",
    description:
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
    icon: "/home/desktop/illustration-friendly.svg",
  },
];
const Features = () => {
  return (
    <Container>
      <StyledUl>
        {features.map((feature) => {
          const { title, description, icon } = feature;

          return (
            <li key={title}>
              <Feature
                title={ title }
                description={ description }
                icon={ icon } />
            </li>
          );
        })}
      </StyledUl>
    </Container>
  );
};

export default Features;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin-top: 7rem;

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;
