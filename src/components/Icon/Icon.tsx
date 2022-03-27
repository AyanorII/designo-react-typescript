import React from "react";
import styled from "styled-components";

type Props = {
  src: string;
};

const Icon = ({ src }: Props) => {
  return (
    <img
      src={require("../../assets" + src)}
      width="202px"
      height="202px"
      alt={src}
    />
  );
};

export default Icon;
