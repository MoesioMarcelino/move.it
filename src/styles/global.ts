import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin    : 0;
    padding   : 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background);
    color           : var(--text);
  }

  @media(max-width: 1080px) {
    html {
      font-size: 98.75%;
    }
  }

  @media(max-width: 728px) {
    html {
      font-size: 87.5%;
    }
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem 'Inter', san-serif;
  }

  :root {
    --white         : #fff;
    --background    : #f2f3f5;
    --gray-line     : #dcdde0;
    --text          : #666666;
    --text-highlight: #b3b9ff;
    --title         : #2e384d;
    --red           : #e83f5b;
    --green         : #4cd62b;
    --blue          : #5965e0;
    --blue-dark     : #4953b8;
    --blue-twitter  : #2aa9e0;
  }

  button {
    cursor: pointer;
  }

  a {
    color          : inherit;
    text-decoration: none;
  }
`;
