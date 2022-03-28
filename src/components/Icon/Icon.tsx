import React from "react";
import styled from "styled-components";
import background from "../../assets/shared/desktop/bg-pattern-small-circle.svg";

type Props = {
  src: string;
};

const Icon = ({ src }: Props) => {
  return (
    <Wrapper>
      <img
        src={require("../../assets" + src)}
        width="202px"
        height="202px"
        alt={src}
      />
    </Wrapper>
  );
};

export default Icon;

const Wrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;
