import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import Content from "../Typography/Content";

type ProjectProps = {
  img: string;
  title: string;
  description: string;
};

const Project = ({ img, title, description }: ProjectProps) => {
  return (
    <StyledCard>
      <img src={require("../../assets" + img)} alt={title} />
      <Content
        heading={title}
        headingColor="primary"
        variant="h2"
        paragraph={ description }
        paragraphColor="light"
      />
    </StyledCard>
  );
};

export default Project;

const StyledCard = styled(Card)`
  text-align: center;
  background-color: ${props => props.theme.colors.secondary.main};
  grid-template-rows: auto 150px;

  img {
    width: 100%;
  }

  & > div {
    padding: 2rem;
  }
`;
