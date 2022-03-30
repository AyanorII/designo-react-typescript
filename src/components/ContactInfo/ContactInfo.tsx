import React from "react";
import styled from "styled-components";

export type ContactProps = {
  heading: string;
  firstLine: string;
  secondLine: string;
};

const ContactInfo = ({ heading, firstLine, secondLine }: ContactProps) => {
  return (
    <StyledLi>
      <h4>{heading}</h4>
      <p>{firstLine}</p>
      <p>{secondLine}</p>
    </StyledLi>
  );
};

export default ContactInfo;

const StyledLi = styled.li`
  color: ${(props) => props.theme.colors.primary.light};
  font-size: 1rem;
  letter-spacing: 1px;
  line-height: 30px;
  opacity: 0.5;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;
