import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    color: #fff;
    font-family: Arial, sans-serif;
  }
`;