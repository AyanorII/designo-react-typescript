import React from "react";
import styled from 'styled-components';
import LocationList from "../About/LocationList";
import ContactHero from "./ContactHero";

type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      <ContactHero />
      <StyledLocationList />
    </>
  );
};

export default Contact;

const StyledLocationList = styled(LocationList)`
  ul {
    margin-bottom: 0;
  }
`;
