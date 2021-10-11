import React from 'react';
import Hero from './components/hero/Hero';
import styled, { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
      color: #fff
    } 
    
`;

function App() {
  return (
    <Hero />
  );
}

export default App;
