import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Container from "../../components/Container";
import Input from "../../components/Input/Input";

type State = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const Form = () => {
  const [values, setValues] = useState<State>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = (): void => {
    setValues({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const { name, email, phone, message } = values;
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        name="name"
        value={name}
        placeholder="Name"
        type="text"
        onChange={handleChange}
      />
      <Input
        name="email"
        value={email}
        placeholder="Email Address"
        type="email"
        onChange={handleChange}
      />
      <Input
        name="phone"
        value={phone}
        placeholder="Phone"
        type="text"
        onChange={handleChange}
      />
      <Input
        name="message"
        value={message}
        placeholder="Your message"
        type="textarea"
        onChange={handleChange}
      />
      <StyledButton to="/" button="button" variant="light">
        Submit
      </StyledButton>
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (min-width: 1440px) {
    gap: 1.5rem;
  }
`;

const StyledButton = styled(Button)`
  width: 200px;
  margin-top: 1rem;
  align-self: center;

  @media (min-width: 768px) {
    align-self: flex-end;
  }
`;
