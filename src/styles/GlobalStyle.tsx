import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    font-family: "Jost", sans-serif;
  }

  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    outline: none;
  }

  ul, li, ol {
    list-style: none;
  }
`;
