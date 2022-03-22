import React from "react";
import styled from 'styled-components';
import Container from "../../../components/Container";
import LinkWithImageInterface from "../../../modules/interfaces/LinkWithImageInterface";
import Project from "./Project";

const projects: LinkWithImageInterface[] = [
  {
    text: "Web Design",
    href: "/web-design",
    images: {
      mobile: "mobile/image-web-design.jpg",
      tablet: "tablet/image-web-design.jpg",
      desktop: {
        small: "desktop/image-web-design-small.jpg",
        large: "desktop/image-web-design-large.jpg",
      },
    },
  },
  {
    text: "App Design",
    href: "/app-design",
    images: {
      mobile: "mobile/image-app-design.jpg",
      tablet: "tablet/image-app-design.jpg",
      desktop: {
        small: "desktop/image-app-design.jpg",
      },
    },
  },
  {
    text: "Graphic Design",
    href: "/graphic-design",
    images: {
      mobile: "mobile/image-graphic-design.jpg",
      tablet: "tablet/image-graphic-design.jpg",
      desktop: {
        small: "desktop/image-graphic-design.jpg",
      },
    },
  },
];

const Projects = () => {
  return (
    <Container>
      <StyledUl>
        {projects.map((project) => {
          const { href, text, images } = project;

          return (
            <li key={text}>
              <Project href={href} text={text} images={images} />
            </li>
          );
        })}
      </StyledUl>
    </Container>
  );
};

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 7.5rem 0;
`;

export default Projects;
