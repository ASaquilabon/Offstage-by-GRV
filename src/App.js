import React from 'react';
import Hero from './components/hero/Hero';
import styled, { createGlobalStyle } from 'styled-components';
import AboutUs from './components/AboutUs/AboutUs'

const Background = styled.div`
  background-color: #000;
`

function App() {
  return (
    <Background>
    <Hero />
    <AboutUs />
    </Background>
  );
}

export default App;
