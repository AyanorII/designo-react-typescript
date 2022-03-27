import React from "react";
import styled from "styled-components";
import Icon from "../../../components/Icon/Icon";
import Content from "../../../components/Typography/Content";
import FeatureInterface from "../../../modules/interfaces/FeatureInterface";
import background from "../../../assets/shared/desktop/bg-pattern-small-circle.svg"

const Feature = ({ title, description, icon }: FeatureInterface) => {
  return (
    <StyledFeature>
      <Icon src={icon} />
      <Content
        heading={title}
        headingColor="dark"
        variant={"h2"}
        color="dark"
        paragraph={description}
        paragraphColor="dark"
      />
    </StyledFeature>
  );
};

export default Feature;

const StyledFeature = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 2rem;
  text-align: center;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: top;
  background-size: 60%;
  padding-top: 1rem;

  img {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: auto 1fr;
    gap: 6.25%;

    h2, p {
      text-align: left;
    }
  }

  @media (min-width: 1440px) {
    grid-template-columns: 1fr;

    h2, p {
      text-align: center;
    }
  }
`;
