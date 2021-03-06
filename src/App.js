import React from 'react';
import { createGlobalStyle } from 'styled-components';
import NavBar from './Components/NavBar';

const GlobalStyle = createGlobalStyle`
  html: {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background: #f0f0f0;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: black;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Pacifico', sans-serif;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  button {
    outline: none;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
    </>
  );
}

export default App;
