import styled from 'styled-components';
import Container from "../Container";
import Project from "./Project";

type Props = {
  projects: {
    title: string;
    description: string;
    img: string;
  }[];
};

const Projects = ({ projects }: Props) => {
  return (
    <Container>
      <StyledUl>
        {projects.map((project, index) => {
          const { title, description, img } = project;

          return (
            <li key={title}>
              <Project title={title} description={description} img={img} />
            </li>
          );
        })}
      </StyledUl>
    </Container>
  );
};

export default Projects;

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-block: 6rem;
`;
