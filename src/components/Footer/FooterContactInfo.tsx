import React from "react";
import styled from "styled-components";

type ContactProps = {
  heading: string;
  firstLine: string;
  secondLine: string;
};

const FooterContactInfo = ({ heading, firstLine, secondLine }: ContactProps) => {
  return (
    <StyledLi>
      <h3>{heading}</h3>
      <p>{ firstLine }</p>
      <p>{ secondLine }</p>
    </StyledLi>
  );
};

export default FooterContactInfo;

const StyledLi = styled.li`
  color: ${(props) => props.theme.colors.primary.light};
  font-size: 1rem;
  letter-spacing: 1px;
  line-height: 30px;
  opacity: 0.5;
  text-align: center;
`;
