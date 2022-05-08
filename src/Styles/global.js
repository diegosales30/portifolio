import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }
  :root{
    --primary: #000023;
    --secondary: #090832;
    --tertiary: #121041;
    --quaternary: #1b1850;
    --quinary: #24205f;
    --senary: #ffffff;
    
  }
  body{
    font-family: 'Inter', sans-serif;
    background-color: var(--quaternary);
    cursor: url(cursor.png), auto;
    
    
  }

  body, input, button {
    font-family: 'Inter', sans-serif;
    
    
  }

  button {
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }
  `;
