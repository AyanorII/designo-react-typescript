import React from "react";
import styled from "styled-components";
import Container from "../Container";
import CategoryInterface from "../../modules/interfaces/CategoryInterface";
import Project from "./Category";

interface CategoriesInterface {
  categories: CategoryInterface[];
}

const Categories = ({ categories }: CategoriesInterface) => {
  return (
    <Container>
      <StyledUl>
        {categories.map((project) => {
          const { href, title, images } = project;

          return (
            <li
              key={title}
              className={
                title.includes("Web") &&
                window.location.pathname === "/"
                  ? "tall"
                  : ""
              }
            >
              <Project href={href} title={title} images={images} />
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
  margin-top: 7.5rem;

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    li.tall {
      grid-row: 1 / 3;

      & > div,
      a {
        height: 100%;
      }
    }
  }
`;

export default Categories;
