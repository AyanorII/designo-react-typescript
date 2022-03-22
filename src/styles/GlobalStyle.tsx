import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Jost", sans-serif;
    box-sizing: border-box;
  }

  *, *:before, *:after {
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
`
