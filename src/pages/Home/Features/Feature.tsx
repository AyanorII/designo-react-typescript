import React from "react";
import styled from "styled-components";
import Icon from "../../../components/Icon/Icon";
import Content from "../../../components/Typography/Content";
import Heading from "../../../components/Typography/Heading";
import Paragraph from "../../../components/Typography/Paragraph";
import FeatureInterface from "../../../modules/interfaces/FeatureInterface";

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

  img {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: auto 1fr;

    h2, p {
      text-align: left;
    }
  }
`;
