import React from "react";
import styled from "styled-components";
import background from "../../assets/shared/desktop/bg-pattern-three-circles.svg";
import Content from "../Typography/Content";

type Props = {
  heading: string;
  paragraph: string;
};


const Intro = ({ heading, paragraph }: Props) => {

  return (
    <StyledIntro>
      <Content
        heading={heading}
        headingColor="primary"
        variant="h1"
        paragraph={paragraph}
        paragraphColor="light"
      />
    </StyledIntro>
  );
};

export default Intro;

const StyledIntro = styled.div`
  background-color: ${(props) => props.theme.colors.primary.main};
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 6.5625rem 1.5rem;
  text-align: center;
`;
