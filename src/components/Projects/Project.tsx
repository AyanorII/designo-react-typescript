import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import Content from "../Typography/Content";

export type ProjectProps = {
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
        paragraph={description}
        paragraphColor="light"
      />
    </StyledCard>
  );
};

export default Project;

const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.secondary.main};
  grid-template-rows: auto 150px;
  transition: all 0.25s;
  cursor: pointer;

  * {
    text-align: center;
  }

  img {
    width: 100%;
    transition: all 0.25s;
  }

  & > div {
    padding: 2rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.primary.main};

    img {
      transform: scale(1.07);
    }
  }
`;
