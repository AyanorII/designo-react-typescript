import React from "react";
import styled from "styled-components";

type Props = {
  placeholder: string;
  name: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder, name, type, value, onChange }: Props) => {
  return (
    <StyledInput
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
    ></StyledInput>
  );
};

export default Input;

const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.primary.light}75;
  padding: 0.75rem;
  color: ${(props) => props.theme.colors.primary.light};
  max-width: 100%;
  background: transparent;
  outline: none;
  position: relative;
  font-size: 1rem;
  letter-spacing: 1px;

  &::placeholder {
    color: ${(props) => props.theme.colors.primary.light}75;
  }

  &[type="textarea"] {
    padding-bottom: 100px;

      &::placeholder {
        position: absolute;
      }
  }
`;
